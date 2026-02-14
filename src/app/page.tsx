export default function Home() {
  const products = [
    { name: "Wireless Headphones", price: "$79.99", badge: "New", img: "https://placehold.co/400x300/1a1a2e/eee?text=Headphones" },
    { name: "Smart Watch Pro", price: "$199.99", badge: "Hot", img: "https://placehold.co/400x300/16213e/eee?text=Smart+Watch" },
    { name: "Leather Backpack", price: "$129.99", badge: "", img: "https://placehold.co/400x300/0f3460/eee?text=Backpack" },
    { name: "Running Shoes", price: "$89.99", badge: "Sale", img: "https://placehold.co/400x300/533483/eee?text=Shoes" },
  ]

  const categories = [
    { name: "Electronics", icon: "⚡", color: "bg-blue-500/10 text-blue-600" },
    { name: "Fashion", icon: "👗", color: "bg-pink-500/10 text-pink-600" },
    { name: "Home & Living", icon: "🏠", color: "bg-green-500/10 text-green-600" },
    { name: "Sports", icon: "⚽", color: "bg-orange-500/10 text-orange-600" },
  ]

  const testimonials = [
    { name: "Sarah M.", text: "Amazing quality products! Fast shipping and great customer service.", stars: 5 },
    { name: "James K.", text: "Best online store I've used. The deals are unbeatable.", stars: 5 },
    { name: "Amira R.", text: "Love the variety and the clean shopping experience. Highly recommend!", stars: 4 },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">🔥 StormStore</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition">Products</a>
            <a href="#categories" className="hover:text-zinc-900 dark:hover:text-white transition">Categories</a>
            <a href="#deals" className="hover:text-zinc-900 dark:hover:text-white transition">Deals</a>
            <a href="#reviews" className="hover:text-zinc-900 dark:hover:text-white transition">Reviews</a>
          </div>
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition">
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-sm font-medium px-3 py-1 rounded-full">✨ New Collection 2026</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Discover Your <span className="text-blue-600">Style</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            Premium products, unbeatable prices. Shop the latest trends with free shipping on orders over $50.
          </p>
          <div className="flex gap-3">
            <a href="#products" className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-6 py-3 rounded-full hover:opacity-90 transition">
              Shop Now →
            </a>
            <a href="#deals" className="border border-zinc-300 dark:border-zinc-700 font-medium px-6 py-3 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
              View Deals
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 flex items-center justify-center aspect-square max-w-md mx-auto">
            <span className="text-8xl">🛍️</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tight">Featured Products</h3>
          <p className="text-zinc-500 mt-2">Hand-picked just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4 space-y-3">
                <h4 className="font-semibold">{p.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{p.price}</span>
                  <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-full hover:opacity-90 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tight">Shop by Category</h3>
          <p className="text-zinc-500 mt-2">Find exactly what you need</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <div key={i} className={`${c.color} rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}>
              <span className="text-4xl block mb-3">{c.icon}</span>
              <h4 className="font-semibold text-sm">{c.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Deals Banner */}
      <section id="deals" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">🔥 Limited Time Offer</span>
          <h3 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Up to 50% Off</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-md mx-auto">
            Don&apos;t miss out on our biggest sale of the year. Ends this weekend!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {[{ v: "02", l: "Days" }, { v: "14", l: "Hours" }, { v: "36", l: "Mins" }, { v: "52", l: "Secs" }].map((t, i) => (
              <div key={i} className="bg-white/20 backdrop-blur rounded-xl px-4 py-3 min-w-[70px]">
                <div className="text-2xl font-bold">{t.v}</div>
                <div className="text-xs text-blue-200">{t.l}</div>
              </div>
            ))}
          </div>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
            Shop the Sale →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tight">What Our Customers Say</h3>
          <p className="text-zinc-500 mt-2">Real reviews from real people</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="text-yellow-500 text-lg">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
              <p className="text-zinc-600 dark:text-zinc-400">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter + Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Stay in the Loop</h3>
            <p className="text-zinc-500 mt-2">Subscribe for exclusive deals and new arrivals</p>
            <div className="flex max-w-md mx-auto mt-6 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-zinc-300 dark:border-zinc-700 bg-transparent rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition text-sm">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p>© 2026 StormStore. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
