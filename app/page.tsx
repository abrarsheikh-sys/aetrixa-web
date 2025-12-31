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
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 text-black">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest">
          AETRIXA CURATED PRODUCTS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-xl rounded-2xl">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-yellow-600 font-bold mb-6 text-lg">{product.price}</p>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="block text-center bg-black text-white py-4 rounded-xl font-bold uppercase text-sm hover:bg-yellow-600 transition-colors">
                Buy Now
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold text-center uppercase tracking-widest mb-10">Reserve Your Experience</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border rounded-xl" required />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border rounded-xl" required />
            </div>
            <select className="w-full p-4 bg-gray-50 border rounded-xl">
              <option>Private Yacht Charter</option>
              <option>Luxury Hotel Suite</option>
              <option>Product Inquiry</option>
            </select>
            <textarea rows={4} placeholder="Your Message" className="w-full p-4 bg-gray-50 border rounded-xl"></textarea>
            <button type="submit" className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-yellow-600">
              Send Reservation Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
