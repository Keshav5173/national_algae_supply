import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

// ---- EmailJS: create these in YOUR EmailJS dashboard (see setup notes) ----
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log("EmailJS Service ID:", EMAILJS_SERVICE_ID);
console.log("EmailJS Template ID:", EMAILJS_TEMPLATE_ID);
console.log("EmailJS Public Key:", EMAILJS_PUBLIC_KEY);

// ---- Business details shown in the footer ----
const EMAIL = "nationalalgaesupply@gmail.com";
const PHONE = "+91 9530290504"; 
const PHONE_LINK = "+919530290504"; 
const WHATSAPP = "919530290504"; 


const labelClass = "mb-2 block text-sm font-semibold text-[#244333]";
const inputClass =
  "w-full rounded-xl border border-[#244333]/15 bg-white/70 px-4 py-3 text-[#244333] placeholder:text-[#244333]/40 outline-none transition-colors focus:border-[#244333] focus:bg-white focus:ring-4 focus:ring-[#244333]/10";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error")
      });
  };

  const rows = [
    { label: "phone", value: PHONE, href: `tel:${PHONE_LINK}` },
    {
      label: "whatsapp",
      value: "Chat with us",
      href: `https://wa.me/${WHATSAPP}`,
      external: true,
    },
    
  ];

  return (
    <footer id="contact" className="relative w-full scroll-mt-4 bg-[#E3EEE5] pt-10">
      {/* drifting wave edge: ties the footer to the water theme */}
      <div className="absolute inset-x-0 top-0 h-6 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 400 24"
          preserveAspectRatio="none"
          className="h-full w-[200%] animate-drift fill-[#244333] motion-reduce:animate-none"
        >
          <path d="M0 12 C50 0 100 24 150 12 S250 0 300 12 S350 24 400 12 V24 H0 Z" />
        </svg>
      </div>

      <div className="relative w-full bg-[#244333] pb-16 pt-6 text-[#E3EEE5] lg:pb-10">
        {/* Top row: "Get in touch" + reply status */}
        <div className="flex w-full justify-between gap-4 px-6 pt-8 lg:px-20">
          <h2 className="text-[#E3EEE5]/60">Get in touch</h2>

          <div className="flex flex-col items-end">
            <p className="text-[#E3EEE5]/60">Contact us</p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-[10px] w-[10px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6FCF97] opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-[#6FCF97]" />
              </span>
              <p className="text-[#6FCF97]">we reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-4 px-6 lg:px-20">
          <p className="font-display text-[2rem] font-semibold leading-tight lg:text-[3.2rem]">
            Can't find the algae you need?
          </p>
          <p className="mt-3 max-w-2xl text-[#E3EEE5]/70 lg:text-lg">
            If your desired product is not listed, or you have any other query,
            please contact us. We are happy to help.
          </p>
        </div>

        <div className="mx-auto mt-8 h-px w-[90vw] bg-[#E3EEE5]/25" />

        {/* Bottom row: info column + form column */}
        <div className="mt-14 flex w-full flex-col justify-between gap-12 px-6 lg:mt-16 lg:flex-row lg:gap-0 lg:px-24">
          {/* info */}
          <div>
            <div>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block origin-left break-all text-lg text-[#E3EEE5]/80 transition-all duration-300 hover:scale-105 hover:text-[#6FCF97] sm:text-xl lg:text-[1.8rem]"
              >
                {EMAIL} &rarr;
              </a>
              <hr className="w-full border-dashed border-[#E3EEE5]/50 lg:w-[40vw]" />
            </div>

            <div className="mt-10 flex w-full flex-col gap-2">
              {rows.map((r) => (
                <div key={r.label} className="flex gap-5">
                  <p className="w-24 shrink-0 text-[#E3EEE5]/60">{r.label}</p>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-[#6FCF97] hover:underline"
                    >
                      {r.value}
                    </a>
                  ) : (
                    <p>{r.value}</p>
                  )}
                </div>
              ))}
              <div className="flex gap-5">
                <p className="w-24 shrink-0 text-[#E3EEE5]/60">status</p>
                <p className="text-[#6FCF97]">accepting orders</p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="w-full lg:w-[40vw]">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl rounded-[28px] bg-[#E8E4D5] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] lg:p-8"
            >
              <div className="mb-6">
                <label htmlFor="footer-name" className={labelClass}>
                  Name <span className="text-[#2E7D54]">*</span>
                </label>
                <input
                  id="footer-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="footer-email" className={labelClass}>
                  Email <span className="text-[#2E7D54]">*</span>
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="mb-8">
                <label htmlFor="footer-message" className={labelClass}>
                  Message <span className="text-[#2E7D54]">*</span>
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Which algae are you looking for, or what would you like to ask?"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-[#244333]/50">We never share your email</p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#244333] py-2 pl-6 pr-2 font-medium text-white shadow-[0_8px_25px_rgba(36,67,51,0.18)] transition-all duration-300 hover:bg-[#315B42] hover:shadow-[0_10px_35px_rgba(36,67,51,0.3)] active:scale-[.97] disabled:cursor-wait disabled:opacity-60"
                >
                  <span>{status === "sending" ? "Sending..." : "Send message"}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D5E8D8] text-[#244333]">
                    {status === "sending" ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#244333]/30 border-t-[#244333] motion-reduce:animate-none" />
                    ) : (
                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </span>
                </button>
              </div>

              {status === "sent" && (
                <p role="status" className="mt-4 text-sm font-semibold text-[#2E7D54]">
                  Message sent. We will reply to your email soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mt-4 text-sm text-red-700">
                  Something went wrong. Please try again, or email us at {EMAIL}.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* bottom credits */}
        <div className="mt-14 flex flex-col gap-2 px-6 text-sm text-[#E3EEE5]/60 lg:flex-row lg:justify-between lg:px-20">
          <p>© {new Date().getFullYear()} National Algae Supply</p>
          
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;