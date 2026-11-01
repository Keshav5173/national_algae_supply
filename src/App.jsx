import { useRef } from "react";
import nasLogo from "./assets/nasLogo.png";
import { ArrowUpRight, Leaf } from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/products.jsx";
import ProductDetail from "./pages/productDetails.jsx";
import ContactUs from "./pages/contactus.jsx";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden">
        <div className="w-full h-[10vh] bg-[#E3EEE5] opacity-90 flex justify-between items-center px-10">
          <Link to="/">
            <img className="h-[9vh]" src={nasLogo} alt="Company logo" />
          </Link>

          <div className="flex items-center gap-10">
            <button
              className="group cursor-pointer flex items-center gap-8 rounded-full
              bg-[#244333] pl-7 pr-2 py-2 text-white
              shadow-[0_8px_25px_rgba(36,67,51,0.18)]
              hover:shadow-[0_10px_35px_rgba(36,67,51,0.3)]
              hover:bg-[#315B42] transition-all duration-300"
            >
              <span className="font-medium tracking-wide">About Us</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D5E8D8] text-[#244333] group-hover:rotate-[-15deg] group-hover:scale-110 transition-all duration-300">
                <Leaf size={21} />
              </span>
            </button>

            {/* Contact Button */}
            <button
              onClick={scrollToContact}
              className="group cursor-pointer flex items-center gap-8 rounded-full
              bg-[#244333] pl-7 pr-2 py-2 text-white
              shadow-[0_8px_25px_rgba(36,67,51,0.18)]
              hover:shadow-[0_10px_35px_rgba(36,67,51,0.3)]
              hover:bg-[#315B42] transition-all duration-300"
            >
              <span className="font-medium tracking-wide">Let's Connect</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D5E8D8] text-[#244333] group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={21} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full min-h-[90vh] bg-[#E3EEE5]">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>

      {/* Contact Section / Footer */}
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </>
  );
}

export default App;