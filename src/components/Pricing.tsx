export default function Pricing() {
    return (
      <section id="pricing" className="max-w-6xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Realtor */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Realtor</h3>
            <p className="text-5xl font-bold mb-4">$200<span className="text-xl">/mo</span></p>
            <p className="text-gray-300 mb-6">Full AR-suite for professional listings.</p>
            <a href="https://apps.apple.com/tw/app/hapstr-v2/id6461165079?l=en-GB" target="_blank" className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200">Download</a>
          </div>
          {/* Buyer */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Buyer</h3>
            <p className="text-5xl font-bold mb-4">$4.99<span className="text-xl">/mo</span></p>
            <p className="text-gray-300 mb-6">On-the-go insights & AR previews.</p>
            <a href="https://apps.apple.com/tw/app/hapstr-v2/id6461165079?l=en-GB" target="_blank" className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200">Download</a>
          </div>
        </div>
      </section>
    );
  }
  