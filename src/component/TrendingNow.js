
const filters = ["All", "Supplements", "Devices", "Skincare", "Diabetes"];

const trendingProducts = [
  { id: 1, name: "Omega-3 Fish Oil", brand: "HealthKart", rating: 4, reviews: "2.3k", price: 349, oldPrice: 499, tag: "Trending", discount: "-30%" },
  { id: 2, name: "Whey Protein 1kg", brand: "MuscleBlaze", rating: 4, reviews: "5.7k", price: 799, oldPrice: 1199, tag: "Best Seller", discount: "-33%" },
  { id: 3, name: "Glucometer Kit", brand: "Brand", rating: 4, reviews: "1.2k", price: 999, oldPrice: 1399, tag: "New", discount: "-28%" },
  { id: 4, name: "Multivitamin 60s", brand: "Brand", rating: 4, reviews: "3.1k", price: 499, oldPrice: 699, tag: "Trending", discount: "-28%" },
  { id: 5, name: "Ashwagandha 500", brand: "Brand", rating: 4, reviews: "2.8k", price: 399, oldPrice: 525, tag: "Popular", discount: "-24%" },
  { id: 6, name: "BP Monitor Digital", brand: "Omron", rating: 4, reviews: "6.9k", price: 1299, oldPrice: 1799, tag: "Best Seller", discount: "-28%" },
];

const tagColors = {
  Trending: "bg-gray-800",
  "Best Seller": "bg-purple-600",
  New: "bg-green-600",
  Popular: "bg-pink-500",
};

function TrendingCard({ product }) {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="relative bg-gray-100 h-32">
        <span className={`absolute top-2 left-2 ${tagColors[product.tag]} text-white text-xs px-2 py-0.5 rounded`}>
          {product.tag}
        </span>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
          {product.discount}
        </span>
      </div>
      <div className="p-3">
        <p className="font-semibold text-gray-800">{product.name}</p>
        <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
        <p className="text-xs text-yellow-500 mb-2">
          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}{" "}
          <span className="text-gray-400">{product.reviews}</span>
        </p>
        <p className="text-sm mb-3">
          <span className="font-bold text-gray-800">₹{product.price}</span>{" "}
          <span className="text-gray-400 line-through text-xs">₹{product.oldPrice}</span>
        </p>
        <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function TrendingNow() {
  return (
    <section className="px-8 py-10">
      <p className="flex items-center gap-1 text-orange-500 text-sm font-medium mb-2">
        🔥 HOT RIGHT NOW
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Trending Now</h2>
      <p className="text-gray-500 text-sm mb-5">Most purchased by customers like you this week</p>

      <div className="flex gap-3 mb-6">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              index === 0 ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4">
        {trendingProducts.map((product) => (
          <TrendingCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default TrendingNow;