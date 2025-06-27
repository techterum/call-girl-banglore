
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Phone Under 2000 | Mobile Deals | Budget Smartphones | 8860976606</title>
        <meta name="description" content="Find the best phone under 2000 with expert advice. Top mobile deals, budget smartphones, and affordable phone options. Call 8860976606 for personalized recommendations." />
        <meta name="keywords" content="best phone under 2000, mobile deals, smartphone offers, budget phones, cheap phones, mobile under 2000, phone deals, budget mobile, affordable smartphones, samsung phone under 2000, xiaomi phone under 2000" />
        <meta name="author" content="Mobile Expert Hub" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Expert Hub",
            "description": "Best phone under 2000 with expert advice",
            "telephone": "8860976606",
            "priceRange": "Under ₹2000",
            "serviceArea": "India"
          })}
        </script>
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Phone Under 2000 | Mobile Deals | 8860976606" />
        <meta property="og:description" content="Find the best phone under 2000 with expert advice. Top mobile deals and budget smartphones." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovable.dev" />
        <meta property="og:site_name" content="Mobile Expert Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Best Phone Under 2000 | Mobile Deals" />
        <meta name="twitter:description" content="Expert advice on budget smartphones under ₹2000" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://lovable.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header Section */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
              📱 Best Phone Under ₹2000
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Expert Mobile Advice • Call: <a href="tel:8860976606" className="text-blue-600 font-semibold hover:text-blue-800">8860976606</a>
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Phone Categories Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              📋 Phone Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Best Phone Under 2000",
                "Mobile Deals and Offers", 
                "Budget Smartphones",
                "Cheap Mobile Phones",
                "Affordable Android Phones",
                "Phone Under 2000 Rupees"
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                  <a href="tel:8860976606" className="text-blue-600 hover:text-blue-800 font-medium block">
                    {category}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Keywords Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
              🔥 Popular Keywords
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Best Phone Under 2000",
                "Mobile Under 2000",
                "Phone Deals",
                "Budget Mobile",
                "Cheap Smartphones",
                "Mobile Offers",
                "Phone Under 2000",
                "Budget Phone Deals",
                "Affordable Mobile",
                "Low Price Phones"
              ].map((keyword, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow p-3">
                  <a href="tel:8860976606" className="text-green-700 hover:text-green-900 font-medium block">
                    {keyword}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Specific Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-500 pb-2">
              🏷️ Brand Specific
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Samsung Phone Under 2000",
                "Xiaomi Phone Under 2000",
                "Redmi Phone Under 2000",
                "Realme Phone Under 2000",
                "Vivo Phone Under 2000",
                "Oppo Phone Under 2000"
              ].map((brand, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-4 border-l-4 border-purple-500">
                  <a href="tel:8860976606" className="text-purple-600 hover:text-purple-800 font-medium block">
                    {brand}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">
              ⚡ Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "4G Phone Under 2000",
                "Dual Sim Phone Under 2000",
                "Camera Phone Under 2000",
                "Long Battery Phone Under 2000",
                "Android Phone Under 2000"
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                  <a href="tel:8860976606" className="text-orange-600 hover:text-orange-800 font-medium block">
                    {feature}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">📞 Get Expert Mobile Advice</h2>
              <p className="text-lg mb-4">Call now for personalized phone recommendations</p>
              <a href="tel:8860976606" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors text-xl">
                📱 8860976606
              </a>
            </div>
          </section>

          {/* Location Based Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">
              📍 Location Based
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Best Phone Under 2000 in India",
                "Mobile Deals Near Me",
                "Phone Shop Contact Number"
              ].map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border-l-4 border-teal-500">
                  <a href="tel:8860976606" className="text-teal-600 hover:text-teal-800 font-medium block">
                    {location}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-lg mb-2">Mobile Expert Hub - Your Trusted Phone Advisor</p>
            <p className="text-gray-400">Call <span className="text-blue-400">8860976606</span> for best phone deals under ₹2000</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
