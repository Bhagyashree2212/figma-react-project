function PromoBanners() {
  return (
    <div className="grid grid-cols-3 gap-4 px-8 py-8">
      {/* Banner 1 */}
      <div className="bg-blue-600 rounded-xl p-5 text-white relative overflow-hidden">
        <p className="font-bold text-sm mb-1">⊙⊙ DavaDay</p>
        <span className="bg-orange-500 text-xs px-2 py-1 rounded font-semibold">
          LIMITED TIME
        </span>
        <h3 className="text-2xl font-bold mt-2">Super Saver</h3>
        <p className="text-sm mt-1 mb-3">Biggest discounts on everyday medicines</p>
        <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          Use code SAVE20
        </span>
      </div>

      {/* Banner 2 */}
      <div className="bg-purple-50 rounded-xl p-5 relative overflow-hidden">
        <p className="font-bold text-sm mb-1 text-gray-700">⊙⊙ DavaDay</p>
        <h3 className="text-xl font-bold text-gray-800 mt-2">
          Stronger Together, <span className="text-purple-600">Against Cancer</span>
        </h3>
        <p className="text-sm mt-1 mb-3 text-gray-500">
          Compassionate care. Advanced treatment. Better outcomes.
        </p>
        <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
          Shop Now
        </button>
      </div>

      {/* Banner 3 */}
      <div className="bg-blue-50 rounded-xl p-5 relative overflow-hidden">
        <p className="font-bold text-sm mb-1 text-gray-700">⊙⊙ DavaDay</p>
        <h3 className="text-xl font-bold text-gray-800 mt-2">
          Better Health, <span className="text-orange-500">Every Day</span>
        </h3>
        <p className="text-sm mt-1 mb-3 text-gray-500">
          Your trusted partner for medicines & expert care
        </p>
        <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default PromoBanners;