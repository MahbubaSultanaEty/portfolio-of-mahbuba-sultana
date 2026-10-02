import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { profile } from "../data/profile";

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailBody = `
Name: ${name}

Email: ${email}

Message:
${message}
`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* HEADER */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:mb-4 sm:text-xs sm:tracking-[0.35em]">
          Contact
        </p>

        <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Let's connect and{" "}
          <span className="text-emerald-400">create something.</span>
        </h2>
      </div>

      {/* CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#071A1F] sm:rounded-[2rem] lg:grid-cols-2"
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="min-w-0 border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Let's Connect
          </h3>

          <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">
            Have a project idea or want to collaborate? Feel free to reach out.
            I would love to hear from you.
          </p>

          <div className="mt-7 space-y-6 sm:mt-10 sm:space-y-7">
            {/* EMAIL */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 sm:h-12 sm:w-12">
                <Mail
                  size={18}
                  className="text-emerald-400 sm:h-5 sm:w-5"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  Email
                </p>

                <div className="mt-1 flex min-w-0 items-center gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="min-w-0 flex-1 truncate text-xs text-white transition hover:text-emerald-300 sm:text-sm"
                  >
                    {profile.email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email"
                    className="shrink-0 text-gray-400 transition hover:text-white"
                  >
                    {copied ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 sm:h-12 sm:w-12">
                <Phone size={18} className="text-cyan-400 sm:h-5 sm:w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  Phone
                </p>

                <p className="mt-1 break-all text-xs text-white sm:text-sm">
                  {profile.phone}
                </p>
              </div>
            </div>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/88${profile.phone}`}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center gap-3 text-white transition hover:text-emerald-300 sm:gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 sm:h-12 sm:w-12">
                <MessageCircle
                  size={18}
                  className="text-emerald-400 sm:h-5 sm:w-5"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  WhatsApp
                </p>

                <p className="mt-1 text-xs sm:text-sm">
                  Start a conversation
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="min-w-0 p-5 sm:p-8 lg:p-10 xl:p-12">
          <h3 className="mb-6 text-xl font-bold text-white sm:mb-8 sm:text-2xl">
            Send a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="min-w-0 space-y-4 sm:space-y-5"
          >
            {/* NAME + EMAIL */}
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="block min-w-0 w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 sm:px-4 sm:py-3.5"
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="block min-w-0 w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 sm:px-4 sm:py-3.5"
              />
            </div>

            {/* SUBJECT */}
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="block min-w-0 w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 sm:px-4 sm:py-3.5"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              className="block min-w-0 w-full max-w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 sm:px-4 sm:py-3.5"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-[#062015] transition hover:bg-emerald-300 sm:py-3.5"
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;

