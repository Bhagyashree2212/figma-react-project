const deals = [
  {
    id: 1,
    title: "Fever Essentials",
    icon: "💊",
    desc: "Paracetamol, Dolo & more",
    tags: ["Dolo 650", "Crocin", "Combiflam"],
    off: "Up to 30% off",
    btnColor: "bg-blue-600",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Diabetes Care",
    icon: "📱",
    desc: "Monitors, strips & medicines",
    tags: ["Metformin", "Glucometer", "Test Strips"],
    off: "Up to 25% off",
    btnColor: "bg-green-600",
    tagColor: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Skin & Hair",
    icon: "🤍",
    desc: "Dermatologist recommended",
    tags: ["Minoxidil", "SPF 50", "Biotin"],
    off: "Up to 40% off",
    btnColor: "bg-pink-600",
    tagColor: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    title: "Vitamin Store",
    icon: "✨",
    desc: "D3, B12, Omega-3 & more",
    tags: ["Vitamin D3", "B-Complex", "Zinc"],
    off: "Up to 35% off",
    btnColor: "bg-orange-500",
    tagColor: "bg-orange-100 text-orange-600",
  },
];

function DealCard({ deal }) {
  return (
    <div className="rounded-xl overflow-hidden border">
      <div className="relative bg-gray-200 h-36 flex items-end p-3">
        <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
          {deal.off}
        </span>
        <p className="text-white font-semibold flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
          {deal.icon} {deal.title}
        </p>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-3">{deal.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {deal.tags.map((tag, i) => (
            <span key={i} className={`text-xs px-2 py-1 rounded-full ${deal.tagColor}`}>
              {tag}
            </span>
          ))}
        </div>
        <button className={`w-full ${deal.btnColor} text-white text-sm font-medium py-2 rounded-full`}>
          Shop Now →
        </button>
      </div>
    </div>
  );
}

function TopDeals() {
  return (
    <section className="px-8 py-10">
      <p className="flex items-center gap-1 text-purple-600 text-sm font-medium mb-2">
        ⊞ EXCLUSIVE
      </p>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-800">Top Deals</h2>
        <a href="#" className="text-blue-600 text-sm font-medium">All deals →</a>
      </div>
      <p className="text-gray-500 text-sm mb-6">Unlock your best healthcare savings today</p>

      <div className="grid grid-cols-4 gap-5">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}

export default TopDeals;