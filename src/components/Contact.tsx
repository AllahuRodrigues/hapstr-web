export default function Contact() {
    return (
      <section id="contact" className="max-w-4xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-4">
          {['Name','Email'].map(label => (
            <div key={label}>
              <label className="block mb-1">{label}</label>
              <input type={label === 'Email' ? 'email' : 'text'} required
                className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
            </div>
          ))}
          <div>
            <label className="block mb-1">Message</label>
            <textarea rows={4} required className="w-full p-2 rounded bg-gray-800 border border-gray-600"></textarea>
          </div>
          <button type="submit" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Send</button>
        </form>
      </section>
    );
  }
  