import { buildMetadata } from "@/lib/metadata";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const metadata = buildMetadata({
  title: "Contact | Schedule a MiddleOrbit Demo",
  description:
    "Talk to manpower strategists, request ROI dashboards, or trigger deployment sprints.",
  slug: "/contact",
  keywords: ["contact manpower platform", "book demo", "recruitment platform demo"]
});

export default function ContactPage() {
  return (
    <div className="page-shell py-16">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-midnight mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Get in touch with our team for any inquiries about our recruitment services
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        {/* Left - Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl text-midnight mb-6">Your Message:</h2>
          
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">For</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="for" value="employer" className="text-orbit focus:ring-orbit" />
                  <span className="text-sm text-slate-700">Employer</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="for" value="candidate" className="text-orbit focus:ring-orbit" />
                  <span className="text-sm text-slate-700">Candidate</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                placeholder="Subject of your inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                placeholder="Write your message here..."
              />
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-start">
              <div className="inline-block">
                <div className="border-2 border-slate-200 rounded-lg p-4 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="captcha"
                      className="h-6 w-6 rounded border-slate-300 text-orbit focus:ring-orbit cursor-pointer"
                    />
                    <label htmlFor="captcha" className="text-sm text-slate-700 cursor-pointer select-none">
                      I'm not a robot
                    </label>
                    <div className="flex flex-col items-center ml-4">
                      <svg className="h-8 w-8" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#4285F4" height="256" width="256"/>
                        <path d="M128 32l95.3 55v110L128 252 32.7 197V87L128 32z" fill="#3367D6"/>
                        <path d="M128 164.5c-20.2 0-36.5-16.3-36.5-36.5S107.8 91.5 128 91.5s36.5 16.3 36.5 36.5-16.3 36.5-36.5 36.5z" fill="#fff"/>
                      </svg>
                      <div className="flex flex-col text-[9px] text-slate-500 mt-1">
                        <span>reCAPTCHA</span>
                        <a href="#" className="text-blue-600 hover:underline text-[8px]">Privacy - Terms</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="rounded-full bg-midnight px-8 py-3 text-sm font-semibold text-white hover:bg-orbit hover:text-midnight transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Company Information */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl text-midnight mb-6">MiddleOrbit Pvt.Ltd.</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-orbit flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-midnight">Address:</p>
                  <p className="text-sm text-slate-600">Basundhara- 10, Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-orbit flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-midnight">Phone(office):</p>
                  <a href="tel:+97714965264" className="text-sm text-slate-600 hover:text-orbit transition">
                    +977-1-4965264, 4965983
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-orbit flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-midnight">Email:</p>
                  <div className="space-y-1">
                    <a href="mailto:info@middleorbit.com" className="block text-sm text-slate-600 hover:text-orbit transition">
                      info@middleorbit.com
                    </a>
                    <a href="mailto:gulfservicenepal@yahoo.com" className="block text-sm text-slate-600 hover:text-orbit transition">
                      gulfservicenepal@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9266283619447!2d85.34906831506179!3d27.71561908279058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a90419c3b9%3A0x38007bc0b6341e3!2sBasundhara%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

