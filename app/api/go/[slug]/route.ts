import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// This route handles requests like: https://aetrixa.com/api/go/private-jet-promo
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    // 1. Find the target URL
    const link = await prisma.affiliateLink.findUnique({
      where: { slug },
    });

    if (!link) {
      // Return a luxury 404 or redirect to home if link not found
      return NextResponse.redirect(new URL("/", request.url));
    }

    // 2. Async Tracking (Fire and forget, don't block the redirect)
    // In a serverless environment like Vercel, use 'waitUntil' or a queue (e.g., Inngest/Upstash)
    // For standard Next.js, we await strictly to ensure data integrity or offload it.
    await prisma.$transaction([
      prisma.affiliateLink.update({
        where: { id: link.id },
        data: { totalClicks: { increment: 1 } },
      }),
      prisma.clickEvent.create({
        data: {
          affiliateLinkId: link.id,
          ipAddress: "anonymized", // Implement IP hashing utility here
          userAgent: request.headers.get("user-agent") || "unknown",
          country: "US", // Integrate GeoIP library here
        },
      }),
    ]);

    // 3. Redirect to the external affiliate partner
    return NextResponse.redirect(new URL(link.targetUrl, request.url));

  } catch (error) {
    console.error("Link Cloaking Error:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
