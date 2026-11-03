import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { getProduct } from "../products/products.js";

const WHATSAPP_NUMBER = "919530290504";

const fmt = (n) => n.toLocaleString("en-IN", { maximumFractionDigits: 2 });

function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");

  if (!product) {
    return (
      <div className="px-6 py-20 text-center font-sans text-[#244333]">
        <h1 className="font-display text-3xl font-semibold">We couldn't find that product</h1>
        <p className="mt-2 opacity-70">The link may be old or mistyped.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#244333] px-6 py-3 font-semibold text-white hover:bg-[#315B42]"
        >
          <ArrowLeft size={16} /> Back to products
        </Link>
      </div>
    );
  }

  const count = product.images.length;
  const go = (d) => setActive((i) => (i + d + count) % count);
  const total = fmt(product.price * qty);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin(
      `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`
    );
  };

  // Opens WhatsApp with the order message already typed
  const handleBuy = () => {
    const message = [
      "Hi! I'd like to order this:",
      "",
      `*Product:* ${product.name}`,
      ...product.details.map((d) => `${d.label}: ${d.value}`),
      "",
      `*Quantity:* ${qty}`,
      `*Price per pack:* ₹${fmt(product.price)}`,
      `*Total:* ₹${total}`,
      "",
      `Product link: ${window.location.href}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buyButton = (extra = "") => (
    <button
      type="button"
      onClick={handleBuy}
      className={`group/btn relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#244333] px-8 py-4 font-semibold text-white shadow-[0_8px_25px_rgba(36,67,51,0.25)] transition duration-300 hover:shadow-[0_12px_32px_rgba(36,67,51,0.35)] active:scale-[.97] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#6FCF97] ${extra}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#256B46] to-[#2E7D54] transition-transform duration-500 ease-out group-hover/btn:translate-x-0 motion-reduce:transition-none"
      />
      <span className="relative">Buy now · ₹{total}</span>
      <ArrowRight
        size={18}
        className="relative transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
      />
    </button>
  );

  return (
    <main className="mx-auto max-w-6xl px-5 pb-28 pt-6 font-sans text-[#244333] md:pb-12 md:pt-8">
      {/* breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <Link to="/" className="inline-flex items-center gap-1.5 font-semibold hover:underline">
          <ArrowLeft size={15} /> Products
        </Link>
        <span className="opacity-40">/</span>
        <span className="opacity-70">{product.name}</span>
      </nav>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-2 lg:gap-10">
        {/* ---------- gallery (sticks while the info scrolls) ---------- */}
        <div className="md:sticky md:top-6">
          <div className="rounded-[28px] bg-[#E8E4D5] p-3">
            <div
              className="group relative aspect-square overflow-hidden rounded-[20px] bg-[#5FB79A]"
              onMouseMove={handleMove}
            >
              {/* zoom wrapper */}
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out md:group-hover:scale-125 motion-reduce:transition-none"
                style={{ transformOrigin: origin }}
              >
                {product.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${product.name} photo ${i + 1} of ${count}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-[#244333] shadow-md backdrop-blur transition hover:bg-white active:scale-90"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-[#244333] shadow-md backdrop-blur transition hover:bg-white active:scale-90"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-full bg-[#244333]/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {active + 1} / {count}
                  </span>
                </>
              )}
            </div>

            {/* thumbnails */}
            {count > 1 && (
              <div className="mt-3 flex gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1}`}
                    aria-current={i === active}
                    className={`h-[72px] w-[72px] cursor-pointer overflow-hidden rounded-2xl ring-2 ring-offset-2 ring-offset-[#E8E4D5] transition ${
                      i === active
                        ? "ring-[#244333]"
                        : "ring-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ---------- info ---------- */}
        <div className="rounded-[28px] bg-[#E8E4D5] p-6 md:p-8">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-[44px]">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl font-semibold">
              <span className="mr-0.5 text-2xl opacity-70">₹</span>
              {fmt(product.price)}
            </p>
            <span className="text-sm opacity-60">per pack</span>
          </div>

          <p className="mt-5 max-w-prose text-[17px] leading-relaxed opacity-90">
            {product.description}
          </p>

          {/* quick facts */}
          <dl className="mt-7 grid grid-cols-2 gap-3">
            {product.details.map((d) => (
              <div key={d.label} className="rounded-2xl bg-white/55 px-4 py-3">
                <dt className="text-xs opacity-60">{d.label}</dt>
                <dd className="mt-0.5 font-semibold">{d.value}</dd>
              </div>
            ))}
          </dl>

          

          {/* quantity + buy (desktop) */}
          <div className="mt-9 border-t border-[#244333]/10 pt-7">
            <div className="flex flex-wrap items-center gap-4">
              <div
                className="flex items-center rounded-full bg-white/60 p-1"
                role="group"
                aria-label="Quantity"
              >
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty === 1}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition hover:bg-[#244333]/10 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Minus size={18} />
                </button>
                <span className="w-10 text-center text-lg font-semibold" aria-live="polite">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  disabled={qty === 10}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition hover:bg-[#244333]/10 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Plus size={18} />
                </button>
              </div>

              {buyButton("hidden md:inline-flex flex-1")}
            </div>
          </div>
        </div>
      </div>

      {/* sticky buy bar (mobile only) */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[#244333]/10 bg-[#E3EEE5]/95 p-3 backdrop-blur md:hidden">
        {buyButton("w-full")}
      </div>
    </main>
  );
}

export default ProductDetail;