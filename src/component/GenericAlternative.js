const medicineChips = ["Azithromycin 500mg", "Atorvastatin 10mg", "Pantoprazole 40mg", "Metformin 500mg"];

function GenericAlternative() {
  return (
    <section className="px-8 py-10 bg-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">💰</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Save with a Generic Alternative</h2>
          <p className="text-sm text-gray-500">Same salt composition – verified lower price</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        {medicineChips.map((chip, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              index === 0 ? "bg-green-700 text-white" : "border border-gray-300 text-gray-600"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        {/* You Selected card */}
        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-gray-400 font-medium">YOU SELECTED</p>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">Brand</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">🔗</div>
            <div>
              <p className="font-semibold text-gray-800">Azithral 500</p>
              <p className="text-xs text-gray-500">Azithromycin 500mg</p>
              <p className="text-xs text-gray-400">Alembic</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">PRICE PER STRIP</p>
          <p className="text-2xl font-bold text-gray-800 mb-3">₹132</p>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>Cost</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gray-400 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
        </div>

        {/* Generic Option card */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-gray-500 font-medium">GENERIC OPTION</p>
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">RECOMMENDED</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">🔗</div>
            <div>
              <p className="font-semibold text-gray-800">Azithromycin 500</p>
              <p className="text-xs text-gray-500">Azithromycin 500mg</p>
              <p className="text-xs text-gray-400">DavaGen</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>Cost</span>
            <span>Only 29% of brand</span>
          </div>
          <div className="w-full bg-white rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "29%" }}></div>
          </div>
        </div>
      </div>

      {/* Savings banner */}
      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-5 py-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-green-600">📈</span>
          <div>
            <p className="font-semibold text-gray-800">You save on this item</p>
            <p className="text-xs text-gray-500">Same salt · CDSCO approved substitute</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-green-700 text-lg">₹94</p>
          <p className="text-xs text-green-600">71% off</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-3">
        <button className="flex-1 bg-green-700 text-white font-medium py-3 rounded-full flex items-center justify-center gap-2">
          🔄 Switch to generic & save ₹94
        </button>
        <button className="px-6 border border-gray-300 rounded-full font-medium text-gray-700">
          Keep original
        </button>
        <button className="px-4 border border-gray-300 rounded-full text-gray-500">ⓘ</button>
      </div>

      <p className="text-xs text-gray-400">
        ⓘ Same salt composition and strength per catalogue mapping. Our pharmacy team may review the substitution before dispatch.
      </p>
    </section>
  );
}

export default GenericAlternative;