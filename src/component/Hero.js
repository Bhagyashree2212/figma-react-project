function Hero() {
  return (
    <section className="bg-blue-50 px-8 py-10 flex items-center justify-between">
      {/* Left side */}
      <div className="max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <p className="font-medium text-gray-700">What are you looking for?</p>
          <a href="#" className="text-blue-600 text-sm font-medium">
            UPLOAD NOW →
          </a>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search medicines, vitamins..."
            className="flex-1 border border-gray-300 rounded-l-full px-4 py-3 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 rounded-r-full">
            Search Medicines
          </button>
        </div>

        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
          🔗 Licensed Online Pharmacy
        </span>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Say Hi 👋 to Big Savings on Every Medicine
        </h1>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium mb-6">
          Get App
        </button>

        <div className="flex gap-6 text-sm text-green-600">
          <span>✅ Licensed Pharmacy</span>
          <span>✅ 100% Genuine Products</span>
          <span>🕒 2-4 Hour Delivery</span>
        </div>
      </div>

      {/* Right side - doctor image */}
      <div>
        <img
          src="/doctor.png"
          alt="Doctor"
          className="w-96"
        />
      </div>
    </section>
  );
}

export default Hero;