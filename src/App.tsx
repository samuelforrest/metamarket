import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  // --- Simulated query param for demo headline ---
  let visitorType = "owner";
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");
    if (typeParam === "shopper" || typeParam === "owner") visitorType = typeParam;
  }

  // --- Demo product feed data ---
  const demoProducts = [
    {
      id: 1,
      name: "AI-Optimized Headphones",
      price: 199,
      category: "Electronics",
      image: "/mock/headphones.jpg",
      inStock: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Smart Running Shoes",
      price: 129,
      category: "Footwear",
      image: "/mock/shoes.jpg",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Wireless Home Speaker",
      price: 89,
      category: "Electronics",
      image: "/mock/speaker.jpg",
      inStock: false,
      rating: 4.2,
    },
    {
      id: 4,
      name: "Eco-Friendly Water Bottle",
      price: 29,
      category: "Accessories",
      image: "/mock/bottle.jpg",
      inStock: true,
      rating: 5,
    },
    {
      id: 5,
      name: "Ergo Laptop Stand",
      price: 59,
      category: "Accessories",
      image: "/mock/laptopstand.jpg",
      inStock: true,
      rating: 4.4,
    },
    {
      id: 6,
      name: "AI Fitness Tracker",
      price: 149,
      category: "Wearables",
      image: "/mock/tracker.jpg",
      inStock: true,
      rating: 4.7,
    },
  ];

  // --- Demo team testimonials ---
  const testimonials = [
    {
      id: 1,
      name: "Sophie Tran",
      company: "ShopVerse",
      logo: "/mock/shopverse.svg",
      image: "/mock/sophie.jpg",
      role: "E-Commerce Director",
      quote:
        "MetaMarket's AI suggestions boosted our revenue by 24% in just two months. The insights are practical and actionable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rivas",
      company: "UrbanGoods",
      logo: "/mock/urbangoods.svg",
      image: "/mock/carlos.jpg",
      role: "Founder",
      quote:
        "We finally understand what our customers want. The product recommendations engine is pure magic.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Jenna Lee",
      company: "BrightMart",
      logo: "/mock/brightmart.svg",
      image: "/mock/jenna.jpg",
      role: "Growth Lead",
      quote:
        "Inventory management used to be chaos. Automated alerts save us hours every week. Highly recommended.",
      rating: 4.8,
    },
  ];

  // --- Pricing plans ---
  const pricingPlans = [
    {
      name: "Free",
      monthly: 0,
      yearly: 0,
      features: [
        "Basic AI pricing suggestions",
        "Standard analytics dashboard",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      monthly: 49,
      yearly: 480,
      features: [
        "All Free features",
        "Personalized recommendations",
        "Inventory automation",
        "Competitor tracking",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      monthly: 129,
      yearly: 1200,
      features: [
        "All Pro features",
        "Custom integrations",
        "Dedicated AI consultant",
        "SLA & onboarding",
        "Advanced exporting",
      ],
      highlighted: false,
    },
  ];

  // --- FAQ ---
  const faqs = [
    {
      q: "How does MetaMarket's AI pricing work?",
      a: "Our proprietary algorithms analyze your product data, market trends, and competitor pricing to suggest optimal prices for maximum profit and conversion.",
    },
    {
      q: "Is my store data safe and private?",
      a: "Absolutely. We use enterprise-grade encryption and never share your data. You control all data permissions.",
    },
    {
      q: "Can I try MetaMarket without technical skills?",
      a: "Yes! Our onboarding is designed for everyone. No coding required—just connect your store and unlock actionable insights.",
    },
    {
      q: "Which e-commerce platforms do you support?",
      a: "We support Shopify, WooCommerce, Magento, BigCommerce, and more. Custom integrations are available on Enterprise.",
    },
    {
      q: "How do I get help or support?",
      a: "Our support team is available 24/7 via chat and email. Pro and Enterprise plans get priority response.",
    },
  ];

  // --- State (simulate with React for demo, but omitting imports as instructed) ---
  let currentTestimonial = 0;
  let pricingToggle = "monthly";
  let faqOpen = [false, false, false, false, false];
  let newsletterEmail = "";
  let newsletterStatus: "idle" | "loading" | "success" | "error" = "idle";
  let newsletterError = "";

  // --- Accessibility helpers ---
  const ratingStars = (n: number) => (
    <span className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.round(n) ? "text-yellow-400" : "text-gray-500 dark:text-gray-400"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </span>
  );

  // --- Meta/SEO/JSON-LD (Next.js handles in layout, but output as JSX fragments here) ---
  const meta = (
    <>
      <title>MetaMarket | AI-Driven E-Commerce Optimizer for Stores</title>
      <meta name="description" content="MetaMarket supercharges your online store with AI-driven pricing, inventory automation, personalized recommendations, marketing insights, and more. Try MetaMarket free today." />
      <meta name="keywords" content="AI, ecommerce, pricing, analytics, recommendations, MetaMarket, online store optimizer" />
      <meta property="og:title" content="MetaMarket | AI-Driven E-Commerce Optimizer" />
      <meta property="og:description" content="Unlock higher sales and efficiency with MetaMarket’s AI-powered tools for your online store. Try it free!" />
      <meta property="og:image" content="/mock/og-image.jpg" />
      <meta property="og:url" content="https://metamarket.ai/" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://metamarket.ai/" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "MetaMarket",
          "description": "MetaMarket AI-Driven E-Commerce Optimizer for Online Stores",
          "url": "https://metamarket.ai/",
          "publisher": {
            "@type": "Organization",
            "name": "MetaMarket",
            "url": "https://metamarket.ai/",
            "logo": {
              "@type": "ImageObject",
              "url": "/mock/logo.svg"
            }
          },
          "mainEntity": {
            "@type": "Product",
            "name": "MetaMarket Platform",
            "description": "AI-powered platform for e-commerce optimization: pricing, analytics, automation, and more."
          }
        }
      `}</script>
    </>
  );

  // --- Section IDs for navigation ---
  const sectionIds = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Demo", id: "demo" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // --- Color palette ---
  const accentGradient = "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500";
  const bgDark = "bg-[#0b1120]"; // Very dark blue
  const surfaceDark = "bg-[#171c2c]"; // Card/section background
  const borderDark = "border-[#232a41]";
  const textAccent = "text-fuchsia-400";

  // --- SVGs ---
  const LogoSVG = (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="inline mr-2">
      <circle cx="16" cy="16" r="15" fill="url(#mmg)" stroke="#fff" strokeWidth="2" />
      <defs>
        <linearGradient id="mmg" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a21caf" />
        </linearGradient>
      </defs>
    </svg>
  );

  const HamburgerSVG = (
    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  // --- Return main JSX ---
  return (
    <>
      {meta}
      {/* Sticky Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgDark} bg-opacity-95 shadow-lg`}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#home" className="flex items-center text-white font-bold text-xl tracking-tight" aria-label="MetaMarket Home">
            {LogoSVG}
            MetaMarket
          </a>
          <ul className="hidden md:flex space-x-8">
            {sectionIds.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-gray-200 hover:text-white transition-colors duration-200 font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-current={s.id === "home" ? "page" : undefined}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button className="focus:outline-none" aria-label="Open navigation menu">
              {HamburgerSVG}
            </button>
          </div>
        </nav>
      </header>

      {/* Background animated gradient blobs */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
      >
        <motion.div
          className="absolute -top-32 left-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-40"
          initial={{ scale: 1, opacity: 0.15 }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: [0.42, 0, 0.58, 1],
          }}
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #a21caf 100%)",
          }}
        />
        <motion.div
          className="absolute top-36 right-1/4 w-[420px] h-[420px] rounded-full blur-2xl opacity-30"
          initial={{ scale: 1, opacity: 0.1 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 2,
          }}
          style={{
            background: "linear-gradient(120deg, #14b8a6 0%, #6366f1 100%)",
          }}
        />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className={`relative min-h-screen flex items-center justify-center ${bgDark}`}>
          {/* Animated background overlay */}
          <motion.div
            className={`${accentGradient} absolute inset-0 opacity-30`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.18, 0.30, 0.18] }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: 'linear',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center flex flex-col gap-6 items-center">
            <motion.h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {visitorType === "shopper" ? (
                <>
                  Discover <span className={textAccent}>the Best Deals</span> Curated <br className="hidden sm:inline" /> by AI for Shoppers Like You
                </>
              ) : (
                <>
                  Supercharge Your Store <br className="hidden sm:inline" />
                  with <span className={textAccent}>AI-Driven Optimization</span>
                </>
              )}
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg md:text-xl mt-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            >
              MetaMarket unlocks higher sales & efficiency for online stores. AI-powered pricing, product recommendations, inventory automation, and real-time analytics—built for growth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a
                href="#pricing"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ring-offset-2 ring-offset-[#0b1120] scale-100 hover:scale-105 active:scale-95"
                aria-label="Start Free Trial"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-fuchsia-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ring-offset-2 ring-offset-[#0b1120] scale-100 hover:scale-105 active:scale-95"
                aria-label="See Demo"
              >
                See Demo
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`relative py-24 px-6 ${surfaceDark} border-t ${borderDark}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className={textAccent}>AI-Powered</span> Features for Smarter Selling
            </motion.h2>
            <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
              Everything you need to outperform competitors and delight customers—automated, intelligent, and tailored for your store.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              {[
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17v-2M12 7v2M19 12h-2M7 12H5M12 12a5 5 0 100-10 5 5 0 000 10z" />
                    </svg>
                  ),
                  title: "AI Pricing Suggestions",
                  desc: "Boost revenue with dynamic price recommendations updated in real time to market trends.",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 17v-4a3 3 0 116 0v4M9 21h6a2 2 0 002-2v-5a7 7 0 10-10 0v5a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Automated Inventory Alerts",
                  desc: "Never run out of stock with proactive, AI-driven notifications and auto-restock options.",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13 16h-1v-4h-1M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Personalized Recommendations",
                  desc: "Deliver the right products to the right customers with advanced AI personalization.",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 17v-6a4 4 0 014-4h8a4 4 0 014 4v6M4 17h16" />
                    </svg>
                  ),
                  title: "Marketing Insights",
                  desc: "Understand campaign performance and optimize spend with AI-driven analytics.",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11 17a4 4 0 106 0M5 13a4 4 0 106 0M17 9a4 4 0 10-6 0" />
                    </svg>
                  ),
                  title: "Sales Analytics",
                  desc: "Visualize growth, spot trends, and make data-driven decisions with real-time dashboards.",
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15 17h5l-1.405-1.405M19.595 15.595l.405-.405V7a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-2.414-2.414a1 1 0 00-1.414 0L8.293 4.707A1 1 0 017.586 5H5a2 2 0 00-2 2v8a2 2 0 002 2h2v2a2 2 0 002 2h8a2 2 0 002-2v-2h-2z" />
                    </svg>
                  ),
                  title: "Competitor Tracking",
                  desc: "Monitor rivals’ prices and inventory, and adjust your strategy in real time.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  className={`${surfaceDark} border ${borderDark} rounded-2xl p-8 shadow-xl group transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 relative`}
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(161,33,175,.14)" }}
                  transition={{ duration: 0.18, ease: [0.42, 0, 0.58, 1] }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5 + idx * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  tabIndex={0}
                  aria-label={feature.title}
                >
                  <div className="flex items-center justify-center mb-5">
                    <motion.span
                      className="bg-indigo-800 group-hover:bg-fuchsia-700 transition-colors duration-200 rounded-full p-4"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    >
                      {feature.icon}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <motion.p
                    className="text-gray-400 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section id="demo" className={`relative py-24 px-6 ${bgDark} border-t ${borderDark}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              See MetaMarket <span className={textAccent}>in Action</span>
            </motion.h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Explore a live AI-optimized product feed. Sort, filter, and experience real-time merchandising.
            </p>
            {/* Demo controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
              <select
                className="bg-[#171c2c] border border-[#232a41] rounded-lg px-5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                aria-label="Sort products"
                defaultValue="price-asc"
              >
                <option value="price-asc">Sort: Price (Low to High)</option>
                <option value="price-desc">Sort: Price (High to Low)</option>
                <option value="name-asc">Sort: Name (A-Z)</option>
                <option value="name-desc">Sort: Name (Z-A)</option>
              </select>
              <select
                className="bg-[#171c2c] border border-[#232a41] rounded-lg px-5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                aria-label="Filter products"
                defaultValue="all"
              >
                <option value="all">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessories">Accessories</option>
                <option value="Wearables">Wearables</option>
              </select>
              <button
                className="ml-0 sm:ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                aria-label="Reset filters"
              >
                Reset
              </button>
            </div>
            {/* Product Feed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {demoProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  className={`${surfaceDark} border ${borderDark} rounded-2xl overflow-hidden shadow-xl transition-all duration-200 group hover:shadow-2xl focus-within:shadow-2xl`}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(52, 211, 153, .12)" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                  tabIndex={0}
                  aria-label={prod.name}
                >
                  <div className="relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                    {!prod.inStock && (
                      <span className="absolute top-2 right-2 bg-fuchsia-700 text-white text-xs px-2 py-1 rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-white text-lg font-semibold">{prod.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-indigo-400 font-bold text-xl">${prod.price}</span>
                      <span className="text-gray-400 text-sm">{prod.category}</span>
                    </div>
                    <div className="mt-2">{ratingStars(prod.rating)}</div>
                    <button
                      className="mt-4 w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-medium py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                      disabled={!prod.inStock}
                      aria-label={prod.inStock ? "Add to cart" : "Out of stock"}
                    >
                      {prod.inStock ? "Add to Cart" : "Unavailable"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`relative py-24 px-6 ${surfaceDark} border-t ${borderDark}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Loved by Leading <span className={textAccent}>E-Commerce Brands</span>
            </motion.h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              See why innovative retailers trust MetaMarket to drive growth, efficiency, and customer delight.
            </p>
            {/* Testimonial Carousel */}
            <div className="relative max-w-3xl mx-auto">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  className={`absolute w-full left-0 top-0 transition-opacity duration-700 ${idx === currentTestimonial ? "opacity-100 relative" : "opacity-0 pointer-events-none"}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: idx === currentTestimonial ? 1 : 0, scale: idx === currentTestimonial ? 1 : 0.97 }}
                  transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                  aria-hidden={idx !== currentTestimonial}
                  aria-live={idx === currentTestimonial ? "polite" : "off"}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#22273b] bg-opacity-90 rounded-xl p-8 shadow-lg border border-[#232a41]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-fuchsia-600 shadow-md mb-4 sm:mb-0"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-white text-lg">{t.name}</span>
                        <span className="px-2 py-0.5 bg-indigo-800 text-indigo-200 text-xs rounded">
                          {t.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <img src={t.logo} alt={t.company + " logo"} className="w-8 h-8" loading="lazy" />
                        <span className="text-gray-300 text-sm">{t.company}</span>
                        {ratingStars(t.rating)}
                      </div>
                      <blockquote className="text-fuchsia-200 italic font-medium text-lg">
                        “
                        <motion.span
                          className="inline-block"
                          initial={{ backgroundColor: "transparent" }}
                          animate={{ backgroundColor: ["transparent", "#a21caf22", "transparent"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        >
                          {t.quote}
                        </motion.span>
                        ”
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Carousel controls */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    className={`w-3 h-3 rounded-full border-2 border-fuchsia-500 focus:outline-none transition-all duration-200 ${
                      idx === currentTestimonial
                        ? "bg-fuchsia-500"
                        : "bg-transparent hover:bg-fuchsia-400"
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Company logos for credibility */}
            <div className="flex flex-wrap justify-center gap-6 mt-14 opacity-80">
              <img src="/mock/shopverse.svg" alt="ShopVerse" className="h-7" loading="lazy" />
              <img src="/mock/urbangoods.svg" alt="UrbanGoods" className="h-7" loading="lazy" />
              <img src="/mock/brightmart.svg" alt="BrightMart" className="h-7" loading="lazy" />
              <span className="h-7 flex items-center text-white text-lg font-medium px-3">+12 more</span>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`relative py-24 px-6 ${bgDark} border-t ${borderDark}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Simple, <span className={textAccent}>Transparent</span> Pricing
            </motion.h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your growth stage. No contracts. Cancel anytime.
            </p>
            {/* Monthly/Yearly toggle */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center bg-[#171c2c] p-1 rounded-lg border border-[#232a41]">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-semibold focus:outline-none transition-all duration-150 ${
                    pricingToggle === "monthly"
                      ? "bg-fuchsia-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-pressed={pricingToggle === "monthly"}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-semibold focus:outline-none transition-all duration-150 ${
                    pricingToggle === "yearly"
                      ? "bg-fuchsia-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-pressed={pricingToggle === "yearly"}
                >
                  Yearly <span className="ml-1 text-xs text-fuchsia-300">(2 months free)</span>
                </button>
              </div>
            </div>
            {/* Pricing plans grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  className={`relative rounded-2xl border ${borderDark} p-8 flex flex-col bg-[#171c2c] shadow-xl transition-all duration-200 ${
                    plan.highlighted
                      ? "ring-2 ring-fuchsia-600 scale-105 z-10"
                      : "scale-100"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 + idx * 0.1, ease: [0.42, 0, 0.58, 1] }}
                  tabIndex={0}
                  aria-label={plan.name + " pricing"}
                >
                  {plan.highlighted && (
                    <motion.div
                      className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1 bg-fuchsia-700 text-white text-xs rounded-full shadow-lg font-semibold"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 14,
                        delay: 0.5,
                      }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-extrabold text-fuchsia-400">
                      ${pricingToggle === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                    <span className="ml-2 text-lg text-gray-400 font-medium">
                      /{pricingToggle === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-300 text-base">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`text-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg"
                        : "bg-[#232a41] hover:bg-fuchsia-700 hover:text-white text-gray-200 border border-fuchsia-600"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400`}
                    aria-label={`Choose ${plan.name} plan`}
                  >
                    {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`relative py-24 px-6 ${surfaceDark} border-t ${borderDark}`}>
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Frequently Asked <span className={textAccent}>Questions</span>
            </motion.h2>
            <div className="space-y-5">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.q}
                  className="rounded-xl border border-[#232a41] bg-[#19203b] group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + idx * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <button
                    className="w-full flex items-center justify-between text-left px-7 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                    aria-expanded={faqOpen[idx]}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="flex items-center gap-3 text-white text-lg font-medium">
                      <svg
                        className="w-6 h-6 text-fuchsia-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                      {faq.q}
                    </span>
                    <svg
                      className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                        faqOpen[idx] ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ${faqOpen[idx] ? "max-h-56 py-4 px-7" : "max-h-0 py-0 px-7"}`}
                    aria-hidden={!faqOpen[idx]}
                  >
                    <p className="text-gray-300 text-base">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className={`relative py-20 px-6 ${accentGradient} bg-opacity-40 border-t ${borderDark}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Ready to <span className="text-fuchsia-300">Unlock</span> Your Store's Potential?
            </motion.h2>
            <p className="text-gray-200 text-lg mb-8">
              Start your free trial, or schedule a personalized demo with our AI experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 ring-offset-2 ring-offset-[#0b1120] scale-100 hover:scale-105 active:scale-95"
                aria-label="Start Free Trial"
              >
                Start Free Trial
              </a>
              <a
                href="#contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-fuchsia-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 ring-offset-2 ring-offset-[#0b1120] scale-100 hover:scale-105 active:scale-95"
                aria-label="Schedule Demo"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Contact & Newsletter Section */}
        <section id="contact" className={`relative py-24 px-6 ${surfaceDark} border-t ${borderDark}`}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
            {/* Contact Info */}
            <div className="flex-1">
              <motion.h2
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Get in <span className={textAccent}>Touch</span>
              </motion.h2>
              <p className="text-gray-400 mb-5">
                Questions? Reach out and our team will help you get started with MetaMarket.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <svg className="inline w-5 h-5 mr-2 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4zm2 0V8a6 6 0 00-12 0v4a6 6 0 0012 0zm-4 8v-2a2 2 0 00-4 0v2" />
                  </svg>
                  Email: <a href="mailto:support@metamarket.ai" className="text-fuchsia-300 hover:underline">support@metamarket.ai</a>
                </li>
                <li>
                  <svg className="inline w-5 h-5 mr-2 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12H2" />
                  </svg>
                  Address: 123 AI Commerce Blvd, New York, NY
                </li>
                <li>
                  <svg className="inline w-5 h-5 mr-2 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 5l10 7 10-7" />
                  </svg>
                  Live Chat: Mon-Fri, 9am-6pm EST
                </li>
              </ul>
            </div>
            {/* Newsletter/Lead Capture */}
            <div className="flex-1">
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Join the MetaMarket AI Insider
              </motion.h3>
              <p className="text-gray-300 mb-8">
                Get exclusive AI e-commerce tips, product updates, and early access invites. No spam, ever.
              </p>
              <form className="flex flex-col gap-4" autoComplete="off">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  required
                  className="px-5 py-3 rounded-lg bg-[#232a41] text-white border border-fuchsia-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="you@email.com"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 ring-offset-2 ring-offset-[#0b1120] scale-100 hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 12H8m8 0H8m8 0H8" />
                  </svg>
                  Subscribe
                </button>
                {/* Status messages */}
                {newsletterStatus === "success" && (
                  <span className="text-green-400 font-medium">You're subscribed!</span>
                )}
                {newsletterStatus === "error" && (
                  <span className="text-red-400 font-medium">{newsletterError || "Please enter a valid email."}</span>
                )}
              </form>
              <p className="text-gray-500 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${bgDark} border-t ${borderDark} pt-12 pb-7 px-6`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
          <div>
            <a href="#home" className="flex items-center text-white font-bold text-xl tracking-tight mb-2" aria-label="MetaMarket Home">
              {LogoSVG}
              MetaMarket
            </a>
            <p className="text-gray-500 text-sm max-w-xs mb-3">
              AI-driven e-commerce optimizer for online stores. Smarter pricing, automation, and growth.
            </p>
            <span className="text-gray-700 text-xs">&copy; 2024 MetaMarket. All rights reserved.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-end">
            <nav aria-label="Quick links">
              <ul className="flex flex-wrap gap-6 text-gray-300 text-sm">
                {sectionIds.slice(1, sectionIds.length - 1).map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="hover:text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.23 9.23 0 01-2.83 1.08A4.52 4.52 0 0016.11 0c-2.5 0-4.51 2.01-4.51 4.5 0 .35.04.7.11 1.03C7.69 5.42 4.07 3.63 1.64.96c-.38.65-.6 1.38-.6 2.18 0 1.5.77 2.82 1.94 3.59a4.48 4.48 0 01-2.05-.56v.06c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A9.05 9.05 0 010 19.54a12.8 12.8 0 006.95 2.03c8.34 0 12.9-6.92 12.9-12.93 0-.2 0-.39-.02-.58A9.18 9.18 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-9 19H5v-9h5v9zm-2.5-10.2c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm14.5 10.2h-5v-5c0-1.2-.4-2-1.5-2s-1.8.8-1.8 2v5h-5v-9h5v1.2c.7-1.1 2-1.8 3.3-1.8 2.4 0 3.5 1.6 3.5 4.1v5.5z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.4 0-1.8.9-1.8 1.8V11h3.1l-.5 3.7h-2.6V24h5.1c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;