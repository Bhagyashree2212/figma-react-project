const trustItems = [
  {
    icon: "✅",
    title: "100% Genuine Medicines",
    desc: "Every product is sourced from licensed manufacturers. FSSAI verified batch by batch.",
  },
  {
    icon: "🏅",
    title: "Licensed Pharmacy",
    desc: "Government registered, FSSAI certified. Our pharmacists verify every prescription.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    desc: "256-bit SSL encryption. All payment methods secured. PCI DSS compliant gateway.",
  },
  {
    icon: "↩️",
    title: "Easy Returns",
    desc: "Hassle-free return policy. Full refund for any unsealed product within 7 days.",
  },
  {
    icon: "✅",
    title: "Verified Suppliers",
    desc: "We work only with authorised distributors. Every supply chain link is authenticated.",
  },
];

function TrustSafety() {
  return (
    <section className="px-8 py-14 text-center">
      <p className="text-green-600 text-sm font-medium mb-2">TRUST & SAFETY</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Your health is our responsibility</h2>

      <div className="grid grid-cols-5 gap-5 text-left">
        {trustItems.map((item, index) => (
          <div key={index} className="border rounded-xl p-5">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg mb-4">
              {item.icon}
            </div>
            <p className="font-semibold text-gray-800 mb-2">{item.title}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSafety;