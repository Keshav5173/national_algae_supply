import { useEffect, useRef, useState } from "react";
import nasLogo from "./assets/nasLogo.png";
import { ArrowUpRight, Leaf, Menu, X } from "lucide-react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Products from "./pages/products.jsx";
import ProductDetail from "./pages/productDetails.jsx";
import ContactUs from "./pages/contactus.jsx";

// Desktop pill button style (shown from md / 768px and up)
const pillButton = `group cursor-pointer flex items-center gap-8 rounded-full
  bg-[#244333] pl-7 pr-2 py-2 text-white whitespace-nowrap
  shadow-[0_8px_25px_rgba(36,67,51,0.18)]
  hover:shadow-[0_10px_35px_rgba(36,67,51,0.3)]
  hover:bg-[#315B42] transition-all duration-300`;

const pillIcon =
  "flex h-11 w-11 items-center justify-center rounded-full bg-[#D5E8D8] text-[#244333] transition-all duration-300";

// Mobile menu item style
const mobileItem = `flex w-full items-center justify-between rounded-full
  bg-[#244333] pl-6 pr-2 py-2 text-white font-medium tracking-wide
  hover:bg-[#315B42] transition-colors duration-300`;

const mobileIcon =
  "flex h-10 w-10 items-center justify-center rounded-full bg-[#D5E8D8] text-[#244333]";

function App() {
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Contact section is hidden on the product details page
  const isProductDetailPage = location.pathname.startsWith("/product/");

  const scrollToContactSection = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // "Let's Connect": scroll if the contact section is on screen,
  // otherwise go to the home page first and scroll once it has loaded.
  const scrollToContact = () => {
    setMenuOpen(false);
    if (isProductDetailPage) {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      scrollToContactSection();
    }
  };

  // After navigating back to home from a product page, scroll to contact
  useEffect(() => {
    if (location.state?.scrollToContact && !isProductDetailPage) {
      scrollToContactSection();
      // clear the flag so a refresh doesn't scroll again
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, isProductDetailPage]);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="relative z-50 w-full">
          <div className="w-full h-16 md:h-[10vh] bg-[#E3EEE5] opacity-90 flex justify-between items-center gap-3 px-4 md:px-10">
            <Link to="/" className="min-w-0" onClick={() => setMenuOpen(false)}>
              <img
                className="h-11 md:h-[9vh] w-auto max-w-[60vw] object-contain"
                src={nasLogo}
                alt="Company logo"
              />
            </Link>

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-10">
              <button className={pillButton}>
                <span className="font-medium tracking-wide">About Us</span>
                <span
                  className={`${pillIcon} group-hover:rotate-[-15deg] group-hover:scale-110`}
                >
                  <Leaf size={21} />
                </span>
              </button>

              <button onClick={scrollToContact} className={pillButton}>
                <span className="font-medium tracking-wide">Let's Connect</span>
                <span className={`${pillIcon} group-hover:rotate-45`}>
                  <ArrowUpRight size={21} />
                </span>
              </button>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#244333] text-white hover:bg-[#315B42] transition-colors duration-300"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <nav
            id="mobile-menu"
            className={`md:hidden absolute left-0 right-0 top-full bg-[#E3EEE5] shadow-[0_12px_25px_rgba(36,67,51,0.15)]
              overflow-hidden transition-all duration-300 ease-in-out
              ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              <button className={mobileItem} onClick={() => setMenuOpen(false)}>
                <span>About Us</span>
                <span className={mobileIcon}>
                  <Leaf size={20} />
                </span>
              </button>

              <button className={mobileItem} onClick={scrollToContact}>
                <span>Let's Connect</span>
                <span className={mobileIcon}>
                  <ArrowUpRight size={20} />
                </span>
              </button>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <div className="w-full min-h-[calc(100vh-64px)] md:min-h-[90vh] bg-[#E3EEE5]">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>

      {/* Contact Section / Footer (hidden on product details page) */}
      {!isProductDetailPage && (
        <div ref={contactRef}>
          <ContactUs />
        </div>
      )}
    </>
  );
}

export default App;