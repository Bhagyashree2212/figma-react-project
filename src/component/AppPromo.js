function AppPromo() {
  return (
    <section className="px-8 py-10">
      <div className="bg-gray-900 rounded-2xl px-10 py-12 flex items-center justify-between relative overflow-hidden">
        {/* Left side */}
        <div className="max-w-md z-10">
          <span className="inline-block bg-white/10 text-blue-300 text-xs px-3 py-1 rounded-full mb-4">
            📲 Mobile App
          </span>

          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            Healthcare at <span className="text-blue-400">Your Fingertips</span>
          </h2>

          <p className="text-gray-400 mb-6">
            Order medicines, upload prescriptions, consult doctors, and track your health — all from your phone.
          </p>

          <button className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-lg font-medium mb-8">
            ▶ <span className="text-left text-xs leading-tight">
              <span className="block text-[10px] text-gray-500">Get it on</span>
              Google Play
            </span>
          </button>

          <div className="flex gap-8 border-t border-gray-700 pt-5">
            <div>
              <p className="text-white font-bold">4.8★</p>
              <p className="text-xs text-gray-400">App Rating</p>
            </div>
            <div>
              <p className="text-white font-bold">2M+</p>
              <p className="text-xs text-gray-400">Downloads</p>
            </div>
            <div>
              <p className="text-white font-bold">#1</p>
              <p className="text-xs text-gray-400">Pharmacy App</p>
            </div>
          </div>
        </div>

        {/* Right side - phone mockup */}
        <div className="relative z-10">
          <div className="w-56 h-96 bg-gray-800 rounded-3xl border-4 border-gray-700 p-4">
            <p className="text-white text-sm font-medium mb-1">Your Health Hub</p>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <div className="bg-gray-700 rounded-lg p-3 text-xs text-gray-300">Medicines</div>
              <div className="bg-gray-700 rounded-lg p-3 text-xs text-gray-300">Lab Tests</div>
              <div className="bg-gray-700 rounded-lg p-3 text-xs text-gray-300">Consult</div>
              <div className="bg-gray-700 rounded-lg p-3 text-xs text-gray-300">Refill</div>
            </div>
          </div>

          {/* Notification popup */}
          <div className="absolute top-6 -left-10 bg-white rounded-lg px-3 py-2 shadow-lg w-40">
            <p className="text-xs font-semibold text-gray-800">Order Delivered 📦</p>
            <p className="text-[10px] text-gray-500">Dolo 650 · Just now</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromo;