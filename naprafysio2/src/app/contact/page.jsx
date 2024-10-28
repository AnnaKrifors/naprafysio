"use client"; // Detta indikerar att hela komponenten är en Client Component

export default function ContactPage() {
  // Hanterar formulärets skick
  async function handleSubmit(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om
    console.log("Form submitted");

    const formData = new FormData(event.target);
    console.log("Form data:", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }); // Hämtar formulärdata

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
      event.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-semibold text-center mb-6" style={{ color: "#0892a5" }}>
        Kontakta oss
      </h1>
      <p className="text-center text-gray-600 mb-8">Vi finns här för att hjälpa dig.</p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="mb-4">
          <label htmlFor="form-name" className="block text-gray-700 font-medium mb-2">
            Namn:
          </label>
          <input
            type="text"
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="form-email" className="block text-gray-700 font-medium mb-2">
            E-post:
          </label>
          <input
            type="email"
            id="form-email"
            autoComplete="email"
            maxLength={80}
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="form-message" className="block text-gray-700 font-medium mb-2">
            Meddelande:
          </label>
          <textarea
            id="form-message"
            name="message"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg transition bg-[#0892a5] hover:bg-[#067a86] focus:outline-none focus:ring-4 focus:ring-[#0892a5] focus:ring-opacity-50">
          Skicka
        </button>
      </form>
    </div>
  );
}
