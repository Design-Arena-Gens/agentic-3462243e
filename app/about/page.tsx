export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About MechPro</h1>

        <div className="card p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              MechPro Hardware Store has been serving professionals and DIY enthusiasts for over 25 years.
              We pride ourselves on offering the highest quality tools, mechanical parts, and equipment at competitive prices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To provide our customers with reliable, durable, and professional-grade hardware and mechanical
              components that help them complete their projects with confidence and precision.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  Every product is carefully selected from trusted manufacturers and tested for reliability.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-700">
                  Our team consists of experienced professionals who can guide you to the right tools.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">
                  We offer the best value without compromising on quality or service.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-700">
                  Quick and reliable shipping to get your tools when you need them.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Our Product Range</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-primary mr-3 text-xl">✓</span>
                Professional power tools for construction and manufacturing
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-xl">✓</span>
                Precision hand tools for detailed mechanical work
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-xl">✓</span>
                Industrial-grade mechanical parts and components
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-xl">✓</span>
                Workshop equipment and safety gear
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-xl">✓</span>
                Measuring and diagnostic tools for precision work
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Browse our extensive catalog and find the perfect tools for your next project.
          </p>
          <a href="/products">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
