import React from 'react';

const product = {
  name: "Aetrixa Signature Black T-Shirt",
  price: "$29.99",
  description: "Premium heavy-weight cotton. Designed for the elite. Part of our exclusive dropshipping collection.",
  image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800",
  paypalLink: "#", // Yahan apna PayPal payment link paste karein
  payoneerEmail: "your-email@payoneer.com", // Apna Payoneer email likhein
  bankDetails: "Meezan Bank | Account: 1234-5678-90 | Title: Aetrixa Ltd"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* --- Navigation --- */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="text-2xl font-black tracking-tighter">AETRIXA.</div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-gray-500">Shop</a>
          <a href="#" className="hover:text-gray-500">Affiliate</a>
          <a href="#" className="hover:text-gray-500">Track Order</a>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100"></div>
            </div>
          </div>

          {/* Product Details & Payments */}
          <div className="flex flex-col h-full justify-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Limited Edition</span>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tighter">{product.name}</h1>
            <p className="text-3xl font-light mb-8 text-gray-800">{product.price}</p>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg max-w-md">{product.description}</p>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest border-b pb-2">Select Payment Method</h3>
              
              {/* PayPal Button */}
              <a href={product.paypalLink} className="flex items-center justify-between w-full bg-[#0070ba] text-white p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                <span className="font-bold uppercase tracking-widest text-sm">Pay with PayPal</span>
                <span className="text-xs opacity-80 underline">Fast Checkout</span>
              </a>

              {/* Payoneer Option */}
              <div className="w-full bg-[#ff4800] text-white p-5 rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold uppercase tracking-widest text-sm">Payoneer</span>
                  <span className="text-[10px] bg-white text-[#ff4800] px-2 py-1 rounded-full font-black">24/7</span>
                </div>
                <p className="text-[10px] opacity-90">Send payment to: {product.payoneerEmail}</p>
              </div>

              {/* Bank Details */}
              <div className="w-full bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Direct Bank Transfer</span>
                <p className="text-sm font-mono text-gray-700">{product.bankDetails}</p>
              </div>
            </div>

            <p className="mt-8 text-[10px] text-gray-400 uppercase text-center tracking-widest">
              Worldwide Shipping • Secure Checkout • 30-Day Returns
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black tracking-tighter mb-8">AETRIXA.</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-12 italic">"The future of luxury commerce and digital asset procurement."</p>
          <div className="flex justify-center space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Shipping</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
