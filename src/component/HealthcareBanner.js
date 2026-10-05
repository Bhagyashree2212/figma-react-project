const features = [
  { icon: "🛡️", title: "Trust", desc: "Verified medicines" },
  { icon: "💰", title: "Affordability", desc: "Fair, honest pricing" },
  { icon: "🐷", title: "Savings", desc: "Big on health, light on cost" },
  { icon: "🚚", title: "Convenience", desc: "Fast & easy delivery" },
];

function HealthcareBanner() {
  return (
    <section className="bg-blue-50 px-8 py-12">
      <p className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="text-orange-500">⊙⊙</span> DavaDay
      </p>

      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Healthcare <span className="text-gray-900">Made</span>{" "}
        <span className="text-orange-500">Simple</span>
      </h2>

      <p className="text-gray-500 mb-8 max-w-md">
        Your trusted online pharmacy for genuine medicines, delivered safely to your doorstep.
      </p>

      <div className="grid grid-cols-4 gap-6 max-w-xl mb-8">
        {features.map((item, index) => (
          <div key={index}>
            <div className="w-14 h-14 border-2 border-orange-400 rounded-full flex items-center justify-center text-2xl mb-2">
              {item.icon}
            </div>
            <p className="font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium mb-8">
        Shop Now →
      </button>

      {/* Carousel dots */}
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((dot) => (
          <span
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot === 0 ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HealthcareBanner;