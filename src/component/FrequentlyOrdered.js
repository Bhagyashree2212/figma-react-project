const products = [
  { id: 1, name: "Dolo 650", brand: "Micro Labs", category: "PAIN RELIEF", price: 27, oldPrice: 30, discount: "10% OFF" },
  { id: 2, name: "Pan 40", brand: "Alkem", category: "GASTRIC", price: 89, oldPrice: 105, discount: "15% OFF" },
  { id: 3, name: "Product 3", brand: "Brand", category: "CATEGORY", price: 50, oldPrice: 60, discount: "15% OFF" },
  { id: 4, name: "Product 4", brand: "Brand", category: "CATEGORY", price: 40, oldPrice: 53, discount: "25% OFF" },
  { id: 5, name: "Product 5", brand: "Brand", category: "CATEGORY", price: 60, oldPrice: 75, discount: "19% OFF" },
  { id: 6, name: "Atorvastatin", brand: "Torrent", category: "CARDIAC", price: 78, oldPrice: 95, discount: "18% OFF" },
];

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-3 relative">
      <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
        {product.discount}
      </span>
      <span className="absolute top-2 right-2 text-gray-400">♡</span>
      <div className="bg-gray-100 h-28 rounded-lg mb-3"></div>
      <p className="text-xs text-gray-400">{product.category}</p>
      <p className="font-semibold text-gray-800">{product.name}</p>
      <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
      <p className="text-sm">
        <span className="font-bold text-gray-800">₹{product.price}</span>{" "}
        <span className="text-gray-400 line-through text-xs">₹{product.oldPrice}</span>
      </p>
      <p className="text-xs text-green-600">You save ₹{product.oldPrice - product.price}</p>
    </div>
  );
}

function FrequentlyOrdered() {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-800">Frequently Ordered</h2>
        <div className="flex items-center gap-4">
          <button className="text-gray-400">←</button>
          <button className="text-gray-400">→</button>
          <a href="#" className="text-blue-600 text-sm font-medium">View All →</a>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-5">Popular medicines at the best prices</p>

      <div className="grid grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
          <button className="w-full border border-blue-600 text-blue-600 text-sm font-medium py-2 rounded-full">
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default FrequentlyOrdered;