
import { Helmet } from "react-helmet-async";
import { Phone, Star, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Phone Under 2000 | Top Mobile Deals | 8860976606</title>
        <meta name="description" content="Find the best phone under 2000. Top smartphone deals and mobile offers. Call 8860976606 for expert advice on budget phones." />
        <meta name="keywords" content="best phone under 2000, mobile deals, smartphone offers, budget phones, cheap phones" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Phone className="h-8 w-8 text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-900">Mobile Hub</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-lg font-semibold text-blue-600">8860976606</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Phone Under <span className="text-blue-600">₹2000</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover amazing smartphone deals and find the perfect budget phone that fits your needs. 
              Expert guidance available at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:8860976606" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 8860976606
              </a>
              <div className="text-gray-600 font-medium">
                Get Expert Phone Recommendations
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top Rated Phones</h3>
              <p className="text-gray-600">Carefully selected best phones under 2000 with excellent reviews and performance</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Deals</h3>
              <p className="text-gray-600">Genuine mobile deals with warranty and authentic products guaranteed</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Quick response and immediate assistance for all your smartphone needs</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Categories</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="tel:8860976606" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
                <h4 className="font-semibold text-blue-600 mb-2">Best Phone Under 2000</h4>
                <p className="text-gray-600 text-sm">Top budget smartphones with great features</p>
              </a>
              
              <a href="tel:8860976606" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
                <h4 className="font-semibold text-blue-600 mb-2">Mobile Deals & Offers</h4>
                <p className="text-gray-600 text-sm">Latest discounts on popular smartphones</p>
              </a>
              
              <a href="tel:8860976606" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
                <h4 className="font-semibold text-blue-600 mb-2">Phone Buying Guide</h4>
                <p className="text-gray-600 text-sm">Expert advice on choosing the right phone</p>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding the Perfect Phone?</h3>
            <p className="text-lg mb-6">Call our experts for personalized recommendations</p>
            <a 
              href="tel:8860976606" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              8860976606
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">© 2024 Mobile Hub. Find the best phone under 2000 | Call: 8860976606</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
