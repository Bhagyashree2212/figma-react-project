function WelcomeStrip() {
  return (
    <div className="flex items-center justify-between bg-blue-50 px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          👤
        </div>
        <div>
          <p className="font-semibold text-gray-800">Welcome to DavaDay</p>
          <p className="text-sm text-gray-500">
            Log in for faster checkout, order history and exclusive deals
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
          Log In
        </button>
        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default WelcomeStrip;