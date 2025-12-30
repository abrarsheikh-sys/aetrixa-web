import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Luxury Watch - Gold Edition",
    price: "$2,500",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500",
    affiliateLink: "https://amazon.com/your-affiliate-link-1", 
  },
  {
    id: 2,
    name: "Premium Travel Suitcase",
    price: "$450",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=500",
    affiliateLink: "https://amazon.com/your-affiliate-link-2",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest text-black">
          AETRIXA CURATED PRODUCTS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-xl rounded-2xl transition-all hover:shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-black">{product.name}</h2>
              <p className="text-yellow-600 font-bold mb-6 text-lg">{product.price}</p>
              
              <a 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-4 rounded-xl hover:bg-yellow-600 transition-colors uppercase font-bold text-sm tracking-widest"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
