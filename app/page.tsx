import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Luxury Watch - Gold Edition",
    price: "$2,500",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500", // Example Image
    affiliateLink: "https://amazon.com/your-affiliate-link-1", // Apna link yahan dalein
  },
  {
    id: 2,
    name: "Premium Travel Suitcase",
    price: "$450",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=500",
    affiliateLink: "https://amazon.com/your-affiliate-link-2",
  },
  // Aur products yahan add kar sakte hain
];

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest">
          Luxury Curated Selection
        </h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="relative h-64 w-full mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gold-600 font-bold mb-4">{product.price}</p>
              
              {/* Affiliate / Dropshipping Link */}
              <a 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gold-600 transition-colors uppercase text-sm tracking-widest"
              >
                Shop Now / Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
