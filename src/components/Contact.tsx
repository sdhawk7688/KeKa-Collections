import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <span className="text-gold-500 text-xs font-medium tracking-[0.3em] uppercase">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-600 mt-3 mb-5">
            Let's Find Your Perfect Drape
          </h2>
          <p className="text-forest-700/70 leading-relaxed mb-8 max-w-md">
            Have a question about a saree or kurti? Looking for a custom order or bridal consultation? We'd love to hear from you.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest-500/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-forest-500" />
              </div>
              <div>
                <div className="text-xs text-forest-700/50 tracking-wide uppercase">Email</div>
                <div className="text-forest-600 font-medium">hello@kekacollections.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest-500/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-forest-500" />
              </div>
              <div>
                <div className="text-xs text-forest-700/50 tracking-wide uppercase">Phone</div>
                <div className="text-forest-600 font-medium">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest-500/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-forest-500" />
              </div>
              <div>
                <div className="text-xs text-forest-700/50 tracking-wide uppercase">Visit Us</div>
                <div className="text-forest-600 font-medium">Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-cream-200 border border-gold-200/60 p-8">
          {sent && (
            <div className="mb-5 flex items-center gap-2 text-forest-500 bg-forest-500/10 px-4 py-3 rounded-sm">
              <CheckCircle2 size={18} />
              <span className="text-sm font-medium">Thank you! We'll be in touch soon.</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-forest-700/60 tracking-wide uppercase mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-cream-100 border border-gold-200/50 px-4 py-3 text-forest-600 text-sm focus:outline-none focus:border-forest-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-forest-700/60 tracking-wide uppercase mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-cream-100 border border-gold-200/50 px-4 py-3 text-forest-600 text-sm focus:outline-none focus:border-forest-400 transition-colors"
                  placeholder="Your phone"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-forest-700/60 tracking-wide uppercase mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-cream-100 border border-gold-200/50 px-4 py-3 text-forest-600 text-sm focus:outline-none focus:border-forest-400 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-forest-700/60 tracking-wide uppercase mb-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-cream-100 border border-gold-200/50 px-4 py-3 text-forest-600 text-sm focus:outline-none focus:border-forest-400 transition-colors resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-forest-600 text-cream-100 py-3.5 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-forest-700 transition-colors rounded-sm"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
