const plans = [
  {
    id: 1,
    label: "BASIC",
    tagline: "Essential healthcare savings",
    price: "₹299",
    period: "/month",
    features: ["Auto Refill", "Priority Reminders", "Free Delivery above ₹500", "5% Extra Savings on Generics", "Email Support"],
    btnText: "Get Started",
    btnStyle: "border border-gray-300 text-gray-700",
    highlight: false,
  },
  {
    id: 2,
    label: "PREMIUM",
    tagline: "Everything you need, unlocked",
    price: "₹599",
    period: "/month",
    features: ["Everything in Basic", "Locked Medicine Prices", "Free Delivery on Every Order", "15% Extra Savings", "2x Loyalty Rewards", "Priority Customer Support"],
    btnText: "Subscribe Now",
    btnStyle: "bg-blue-600 text-white",
    highlight: true,
    badge: "★ Most Popular",
  },
  {
    id: 3,
    label: "ANNUAL",
    tagline: "Best value for families",
    price: "₹4,999",
    period: "/year",
    subNote: "Billed as ₹4,999 annually – ₹417/mo",
    features: ["Everything in Premium", "Annual Health Report", "Priority Lab Test Booking", "Dedicated Health Manager", "Family Sharing (3 Members)", "Exclusive Health Events"],
    btnText: "Choose Annual Plan",
    btnStyle: "bg-gray-900 text-white",
    highlight: false,
    badge: "Save ₹2,189",
  },
];

function PlanCard({ plan }) {
  return (
    <div
      className={`bg-white rounded-xl p-6 relative ${
        plan.highlight ? "border-2 border-blue-600 shadow-lg" : "border"
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full ${
            plan.highlight ? "bg-blue-600 text-white" : "bg-green-600 text-white"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <p className="text-xs font-bold text-gray-500 mb-1">{plan.label}</p>
      <p className="text-sm text-gray-500 mb-4">{plan.tagline}</p>

      <p className="mb-1">
        <span className="text-3xl font-bold text-gray-800">{plan.price}</span>{" "}
        <span className="text-gray-400 text-sm">{plan.period}</span>
      </p>
      {plan.subNote && <p className="text-xs text-gray-400 mb-4">{plan.subNote}</p>}

      <ul className="space-y-2 my-5">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="text-green-600">✓</span> {f}
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-full font-medium ${plan.btnStyle}`}>
        {plan.btnText}
      </button>
    </div>
  );
}

function Membership() {
  return (
    <section className="px-8 py-14 text-center bg-gray-50">
      <p className="text-blue-600 text-sm font-medium mb-2">⚙ MEMBERSHIP</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Unlock Better Healthcare Savings</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Join DavaDay Care Plan and enjoy exclusive pricing, priority healthcare services,
        faster delivery, and loyalty rewards – all in one membership.
      </p>

      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-8">
        All plans include a 7-day free trial · Cancel anytime · GST applicable
      </p>
    </section>
  );
}

export default Membership;