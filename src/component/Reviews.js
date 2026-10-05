const reviews = [
  {
    id: 1,
    text: "Dava Day has been a lifesaver. My parents get their regular medications delivered within hours at prices that are nearly half of what I used to pay at a local pharmacy. The peace of mind knowing these are genuine medicines is priceless.",
    name: "Priya Sharma",
    location: "Mumbai",
    initials: "PS",
    color: "bg-blue-500",
  },
  {
    id: 2,
    text: "Super impressed with the service quality. Uploaded my prescription and everything was sorted within minutes. The app is incredibly intuitive and the delivery tracking is real-time. Finally a pharmacy platform that works.",
    name: "Rahul Mehta",
    location: "Bangalore",
    initials: "RM",
    color: "bg-purple-500",
  },
  {
    id: 3,
    text: "The generic alternatives feature is brilliant. It saved me over ₹4,000 on my monthly medicines alone. The quality is identical — same active ingredients — just without the expensive brand name markup.",
    name: "Anita Krishnan",
    location: "Chennai",
    initials: "AK",
    color: "bg-orange-500",
  },
  {
    id: 4,
    text: "From prescription upload to delivery tracking, everything works seamlessly. Customer support is exceptionally responsive. Dava Day is the only pharmacy app I recommend to my entire family and colleagues.",
    name: "Vikram Patel",
    location: "Delhi",
    initials: "VP",
    color: "bg-green-600",
  },
];

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl p-5 border">
      <p className="text-yellow-500 text-sm mb-3">★★★★★</p>
      <p className="text-sm text-gray-600 mb-5">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 ${review.color} text-white rounded-full flex items-center justify-center text-xs font-semibold`}>
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
          <p className="text-xs text-gray-400">
            {review.location} <span className="text-green-600">✓ Verified</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section className="px-8 py-14 text-center bg-gray-50">
      <p className="text-blue-600 text-sm font-medium mb-2">REVIEWS</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">What Customers Say</h2>
      <p className="text-yellow-500 mb-10">
        ★★★★★ <span className="text-gray-800 font-semibold">4.9</span>{" "}
        <span className="text-gray-400 text-sm">· 50,000+ verified reviews</span>
      </p>

      <div className="grid grid-cols-4 gap-5 text-left">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;