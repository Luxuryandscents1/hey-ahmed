"use client"
import { useCart } from "@/store/cart"
import { CartDrawer } from "@/components/CartDrawer"

const products = [
  { id: 1, name: "Wireless Pro Headphones", price: 179.99, oldPrice: 249.99, cat: "Electronics", img: "https://placehold.co/400x400/1a1a2e/eee?text=Headphones", stars: 5 },
  { id: 2, name: "Cashmere Blend Sweater", price: 89.99, oldPrice: 0, cat: "Fashion", img: "https://placehold.co/400x400/2d3436/eee?text=Sweater", stars: 4 },
  { id: 3, name: "Smart Home Speaker", price: 129.99, oldPrice: 159.99, cat: "Electronics", img: "https://placehold.co/400x400/0f3460/eee?text=Speaker", stars: 5 },
  { id: 4, name: "Leather Crossbody Bag", price: 149.99, oldPrice: 0, cat: "Fashion", img: "https://placehold.co/400x400/533483/eee?text=Bag", stars: 4 },
  { id: 5, name: "Minimalist Desk Lamp", price: 59.99, oldPrice: 0, cat: "Home", img: "https://placehold.co/400x400/2c3e50/eee?text=Lamp", stars: 5 },
  { id: 6, name: "Running Shoes Ultra", price: 119.99, oldPrice: 159.99, cat: "Sports", img: "https://placehold.co/400x400/e17055/fff?text=Shoes", stars: 5 },
  { id: 7, name: "Ceramic Vase Set", price: 44.99, oldPrice: 0, cat: "Home", img: "https://placehold.co/400x400/636e72/eee?text=Vase", stars: 4 },
  { id: 8, name: "Yoga Mat Premium", price: 34.99, oldPrice: 0, cat: "Sports", img: "https://placehold.co/400x400/6c5ce7/fff?text=Yoga+Mat", stars: 4 },
]

const categories = [
  { name: "Electronics", icon: "⚡", color: "from-blue-600 to-blue-800" },
  { name: "Fashion", icon: "👗", color: "from-pink-600 to-purple-700" },
  { name: "Home & Living", icon: "🏠", color: "from-emerald-600 to-teal-700" },
  { name: "Sports", icon: "⚽", color: "from-orange-500 to-red-600" },
]

const testimonials = [
  { name: "Sarah M.", init: "SM", text: "Amazing quality products! Fast shipping and the packaging was beautiful. Will definitely order again.", stars: 5 },
  { name: "James K.", init: "JK", text: "Best online store I've used in years. The deals are unbeatable and customer support is top-notch.", stars: 5 },
  { name: "Amira R.", init: "AR", text: "Love the variety and the clean shopping experience. The cashmere sweater is absolutely gorgeous!", stars: 4 },
]

function Stars({ n }: { n: number }) {
  return <span className="text-yellow-500 text-sm">{"★".repeat(n)}{"☆".repeat(5 - n)}</span>
}

export default function Home() {
  const addItem = useCart((s) => s.addItem)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Announcement Bar */}
      <div className="bg-zinc-900 dark:bg-blue-600 text-white text-center text-xs py-2 font-medium tracking-wide">
        🚚 FREE SHIPPING on orders over $50 — Limited time only!
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">🔥 StormStore</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition">Products</a>
            <a href="#categories" className="hover:text-zinc-900 dark:hover:text-white transition">Categories</a>
            <a href="#deals" className="hover:text-zinc-900 dark:hover:text-white transition">Deals</a>
            <a href="#reviews" className="hover:text-zinc-900 dark:hover:text-white transition">Reviews</a>
          </div>
          <CartDrawer />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-950" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full">✨ New Collection 2026</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Discover Your<br /><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Style</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Premium products, unbeatable prices. Shop the latest trends with free shipping on orders over $50.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#products" className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">Shop Now →</a>
              <a href="#deals" className="border-2 border-zinc-300 dark:border-zinc-700 font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">View Deals</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl absolute -inset-4" />
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <span className="text-[120px] block">🛍️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Curated Selection</span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Featured Products</h3>
          <p className="text-zinc-500 mt-3 max-w-md mx-auto">Hand-picked premium items just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                {p.oldPrice > 0 && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">SALE</span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-900/90 text-xs font-medium px-2.5 py-1 rounded-full">{p.cat}</span>
              </div>
              <div className="p-5 space-y-3">
                <Stars n={p.stars} />
                <h4 className="font-semibold leading-snug">{p.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${p.price}</span>
                  {p.oldPrice > 0 && <span className="text-sm text-zinc-400 line-through">${p.oldPrice}</span>}
                </div>
                <button
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: p.img })}
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold py-2.5 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Browse</span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Shop by Category</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <div key={i} className={`bg-gradient-to-br ${c.color} rounded-2xl p-8 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}>
              <span className="text-5xl block mb-4">{c.icon}</span>
              <h4 className="font-bold">{c.name}</h4>
              <p className="text-sm text-white/70 mt-1">Shop now →</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deals Banner */}
      <section id="deals" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-10 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex-1 relative z-10">
            <span className="text-sm font-semibold bg-white/20 px-4 py-1.5 rounded-full">🔥 Limited Time Offer</span>
            <h3 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Up to 50% Off</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-md">Don&apos;t miss out on our biggest sale of the year. Premium products at unbeatable prices.</p>
            <div className="flex gap-3 mb-8">
              {[{ v: "02", l: "Days" }, { v: "14", l: "Hours" }, { v: "36", l: "Mins" }, { v: "52", l: "Secs" }].map((t, i) => (
                <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 min-w-[72px] text-center border border-white/10">
                  <div className="text-2xl font-bold">{t.v}</div>
                  <div className="text-xs text-blue-200">{t.l}</div>
                </div>
              ))}
            </div>
            <button className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 hover:scale-105 transition-all">Shop the Sale →</button>
          </div>
          <div className="flex-1 relative z-10 flex justify-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 max-w-[260px]">
              <img src="https://placehold.co/300x300/fff/333?text=Deal+of+the+Day" alt="Deal" className="rounded-xl mb-4" />
              <h4 className="font-bold">Wireless Pro Headphones</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-bold">$179.99</span>
                <span className="text-sm text-blue-200 line-through">$249.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Social Proof</span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">What Our Customers Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <Stars n={t.stars} />
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{t.init}</div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-green-600 font-medium">✓ Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-900 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold text-white">Stay in the Loop</h3>
          <p className="text-zinc-400 mt-3 mb-8">Subscribe for exclusive deals, new arrivals, and 10% off your first order</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-zinc-800 border border-zinc-700 text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-500" />
            <button className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-blue-700 transition text-sm">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">🔥 StormStore</h4>
            <p className="text-sm leading-relaxed">Premium products at unbeatable prices. Your one-stop shop for everything.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition">Sale</a></li>
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          © 2026 StormStore. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
