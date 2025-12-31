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
        
        {/* Product Section */}
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

        {/* --- PROFESSIONAL BOOKING FORM SECTION --- */}
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-widest">Reserve Your Experience</h2>
            <p className="text-gray-500 mt-2">Contact our concierge for private bookings and elite services.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-600 transition-all text-black" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-600 transition-all text-black" required />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Service Required</label>
              <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-600 transition-all text-black">
                <option>Private Yacht Charter</option>
                <option>Luxury Hotel Suite</option>
                <option>VIP Travel Assistance</option>
                <option>Product Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Message</label>
              <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-600 transition-all text-black"></textarea>
            </div>

            <button type="submit" className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-yellow-600 transition-all shadow-lg">
              Send Reservation Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
