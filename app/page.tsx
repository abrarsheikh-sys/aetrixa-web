import React from 'react';

const product = {
  name: "AETRIXA LUXE T-SHIRT",
  price: "$35.00",
  image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800",
  description: "Elite cotton blend. Limited dropshipping edition by Aetrixa.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900 p-8 rounded-[40px] shadow-2xl border border-zinc-800">
        
        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl">
          <img src={product.image} alt="Product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Sales & Payment Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-black tracking-tighter mb-2">{product.name}</h1>
          <p className="text-2xl text-yellow-500 font-bold mb-6">{product.price}</p>
          <p className="text-zinc-400 mb-10 leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            {/* PayPal Button */}
            <button className="w-full bg-[#0070ba] py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-500 transition-all">
              Pay with PayPal
            </button>

            {/* Payoneer Button */}
            <button className="w-full bg-[#ff4800] py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-500 transition-all">
              Pay with Payoneer
            </button>

            {/* Bank Info */}
            <div className="p-4 border border-zinc-700 rounded-2xl text-center bg-zinc-800/50">
              <span className="text-[10px] text-zinc-500 uppercase block mb-1">Direct Bank Transfer</span>
              <p className="text-sm font-mono tracking-tight">IBAN: PK12 XXXX XXXX XXXX</p>
            </div>
          </div>

          <p className="mt-8 text-[10px] text-zinc-600 text-center uppercase tracking-[0.2em]">
            Verified Merchant • Global Shipping
          </p>
        </div>
      </div>
    </div>
  );
}
