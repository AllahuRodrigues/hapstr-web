export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Realtor",
            price: "$200",
            freq: "/mo",
            desc: "Full AR-suite for professional listings.",
          },
          {
            title: "Buyer",
            price: "$4.99",
            freq: "/mo",
            desc: "On-the-go insights & AR previews.",
          },
        ].map((plan) => (
          <div
            key={plan.title}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-5xl font-bold mb-4">
              {plan.price}
              <span className="text-xl">{plan.freq}</span>
            </p>
            <p className="text-gray-300 mb-6">{plan.desc}</p>
            <a
              href="https://apps.apple.com/tw/app/hapstr-v2/id6461165079?l=en-GB"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
