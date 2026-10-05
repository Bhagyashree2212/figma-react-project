const categories = [
  { icon: "💊", title: "Medicines", count: "2,000+ products", sub: "Prescription & OTC", bg: "bg-blue-100", text: "text-blue-600" },
  { icon: "❤️", title: "Personal Care", count: "800+ products", sub: "Skin, hair & body", bg: "bg-pink-100", text: "text-pink-500" },
  { icon: "🍼", title: "Baby Care", count: "400+ products", sub: "Safe for infants", bg: "bg-orange-100", text: "text-orange-500" },
  { icon: "✨", title: "Nutrition", count: "600+ products", sub: "Vitamins & proteins", bg: "bg-green-100", text: "text-green-600" },
  { icon: "🛡️", title: "Wellness", count: "500+ products", sub: "Immunity & more", bg: "bg-purple-100", text: "text-purple-600" },
  { icon: "🧪", title: "Devices", count: "300+ products", sub: "BP, sugar monitors", bg: "bg-yellow-100", text: "text-yellow-600" },
];

function PopularCategories() {
  return (
    <section className="px-8 py-10 bg-blue-50">
      <p className="flex items-center gap-1 text-blue-600 text-sm font-medium mb-2">
        ⊛ BROWSE
      </p>

      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">See all →</a>
      </div>
      <p className="text-gray-500 text-sm mb-6">Everything you need, neatly organised</p>

      <div className="grid grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white rounded-xl p-5 text-center shadow-sm">
            <div className={`w-14 h-14 ${cat.bg} rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}>
              {cat.icon}
            </div>
            <p className="font-semibold text-gray-800">{cat.title}</p>
            <p className="text-xs text-gray-400 mb-2">{cat.count}</p>
            <p className="text-xs text-gray-400">{cat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;