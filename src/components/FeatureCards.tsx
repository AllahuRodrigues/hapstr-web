import { EyeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function FeatureCards() {
  return (
    <section id="features" className="max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Interior */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
          <EyeIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Interior Transparency</h3>
          <p className="text-gray-300">
            Virtually tour a property’s layout from the sidewalk – like test-driving your future home.
          </p>
        </div>
        {/* AR signage */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
          <MapPinIcon className="h-12 w-12 text-white mb-4" />
          <h3 className="text-2xl font-semibold mb-2">AR Signage</h3>
          <p className="text-gray-300">
            Dynamic overlays replace static yard signs and stream live data to passers-by.
          </p>
        </div>
      </div>
    </section>
  );
}
