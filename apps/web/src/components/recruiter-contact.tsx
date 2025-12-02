import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export function RecruiterContact() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
              alt="Professional Recruiter"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-600 mb-2">For Recruiters</p>
            <h2 className="font-display text-4xl text-midnight mb-4">
              If you are Recruiter please give us call
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Call us directly</p>
                <a 
                  href="tel:+9779801090469" 
                  className="text-xl font-semibold text-midnight hover:text-orbit transition flex items-center gap-2"
                >
                  +977 9801090469
                  <span className="inline-flex gap-1">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.155 13.893c.716-.435 1.275-1.116 1.614-1.964.339-.849.427-1.82.252-2.803-.347-1.967-1.547-3.51-3.417-4.39-1.87-.879-4.086-.972-6.316-.27-1.35.425-2.566 1.178-3.547 2.194-.653.677-1.194 1.457-1.596 2.304l-.013.028c.01 0 .02-.002.03-.004l.013-.003c.284-.059.549-.093.806-.109.258-.016.514-.015.769.001l.255.015c.014 0 .027-.002.041-.006.304-1.294.882-2.466 1.73-3.439.848-.972 1.948-1.726 3.223-2.197 1.914-.708 3.79-.643 5.34.184 1.55.827 2.515 2.1 2.795 3.623.142.774.095 1.557-.136 2.27-.231.713-.631 1.35-1.156 1.843-.525.493-1.174.83-1.876 1.005-.703.175-1.452.187-2.172.036-.719-.151-1.404-.475-1.983-.942-.58-.467-1.042-1.073-1.346-1.758-.304-.685-.442-1.443-.401-2.202.041-.758.229-1.51.546-2.186.317-.677.769-1.266 1.313-1.71.543-.444 1.175-.748 1.838-.887.662-.138 1.355-.108 2.013.086.659.195 1.276.534 1.791 1.002.515.468.918 1.062 1.174 1.742.256.68.365 1.435.316 2.193-.049.758-.256 1.518-.607 2.208-.35.69-.849 1.303-1.451 1.776-.602.473-1.307.801-2.054.953-.747.151-1.535.126-2.292-.073-.757-.199-1.469-.565-2.074-1.064-.605-.499-1.094-1.125-1.426-1.82-.332-.695-.507-1.453-.51-2.212-.003-.758.162-1.521.481-2.217.319-.696.789-1.319 1.369-1.814.58-.495 1.266-.855 1.999-1.047.733-.192 1.508-.215 2.258-.07.75.145 1.467.449 2.094.892.627.444 1.159 1.022 1.553 1.685.394.662.646 1.398.734 2.15.088.752.013 1.512-.217 2.218-.23.707-.63 1.354-1.158 1.89-.528.537-1.177.96-1.896 1.233-.719.273-1.506.391-2.294.345-.788-.046-1.571-.239-2.285-.57-.714-.33-1.353-.8-1.87-1.379-.517-.58-.911-1.263-1.154-1.997-.243-.734-.335-1.515-.269-2.28.066-.765.283-1.507.632-2.166.349-.659.834-1.227 1.416-1.658.582-.43 1.254-.726 1.959-.865.705-.138 1.435-.12 2.13.054.695.174 1.35.5 1.911.96.561.46 1.023 1.047 1.35 1.72.327.672.517 1.418.555 2.174.038.756-.087 1.514-.366 2.212-.279.698-.715 1.328-1.268 1.843-.553.515-1.222.916-1.953 1.17-.731.254-1.523.358-2.307.3-.784-.057-1.553-.268-2.25-.619-.697-.35-1.316-.842-1.808-1.438-.492-.595-.855-1.288-1.065-2.034-.21-.746-.267-1.541-.166-2.32.101-.779.354-1.534.739-2.21.385-.675.905-1.266 1.519-1.73.614-.464 1.322-.794 2.07-0.964.748-.17 1.532-.183 2.292-.037.76.146 1.489.451 2.13.897.641.446 1.19 1.027 1.606 1.7.416.672.697 1.427.824 2.206.127.779.099 1.573-.081 2.332-.18.759-.514 1.478-.975 2.107-.461.63-1.048 1.159-1.718 1.551-.67.392-1.42.641-2.194.729-.774.088-1.568.016-2.317-.207-.749-.223-1.446-.603-2.043-1.113-.597-.51-1.093-1.145-1.452-1.863-.359-.718-.576-1.51-.634-2.317-.058-.807.065-1.622.36-2.385.295-.763.754-1.467 1.342-2.063.588-.596 1.306-1.077 2.1-1.412.794-.335 1.66-.522 2.534-.548.874-.026 1.75.102 2.574.374.824.272 1.59.696 2.249 1.245.659.549 1.207 1.22 1.607 1.972.4.751.648 1.574.727 2.416.079.842.008 1.7-.208 2.514-.216.814-.586 1.576-1.084 2.24-.498.664-1.127 1.225-1.844 1.652-.717.426-1.519.713-2.354.837-.835.124-1.698.086-2.528-.109-.83-.195-1.62-.555-2.32-1.058-.7-.503-1.303-1.148-1.771-1.895-.468-.747-.797-1.587-.965-2.468-.168-.881-.175-1.794-.021-2.678.154-.884.474-1.731.939-2.487.465-.756 1.073-1.419 1.787-1.948.714-.529 1.53-.918 2.399-1.144.869-.226 1.784-.289 2.682-.186.898.103 1.77.378 2.562.807.792.43 1.498.015 2.088 1.709.59 1.694.959 1.78 1.2 2.85.241 1.07.334 2.152.273 3.222-.061 1.07-.28 2.121-.642 3.098-.362.977-.873 1.872-1.503 2.639-.63.767-1.38 1.4-2.21 1.865-.83.465-1.738.756-2.67.856-.932.1-1.883.007-2.794-.273-.911-.28-1.775-.738-2.541-1.347-.766-.609-1.428-1.369-1.946-2.234-.518-.865-.887-1.827-1.085-2.833-.198-1.006-.225-2.048-.079-3.064.146-1.016.455-2.001.908-2.906.453-.905 1.049-1.72 1.751-2.406.702-.686 1.509-1.236 2.378-1.622.869-.386 1.798-.604 2.737-.643.939-.039 1.883.097 2.778.401.895.304 1.734.778 2.469 1.394.735.616 1.361 1.374 1.844 2.235.483.861.819 1.816.99 2.81.171.994.176 2.02.014 3.011-.162.991-.494 1.941-.975 2.8-.481.859-1.111 1.62-1.853 2.244-.742.624-1.594 1.104-2.508 1.415-.914.311-1.887.449-2.86.406-.973-.043-1.939-.249-2.841-.607-.902-.358-1.732-.868-2.443-1.502-.711-.634-1.297-1.39-1.726-2.227-.429-.837-.697-1.747-.789-2.682-.092-.935-.009-1.886.245-2.797.254-.911.682-1.774 1.259-2.541.577-.767 1.301-1.428 2.133-1.948.832-.52 1.768-.894 2.755-1.099.987-.205 2.019-.239 3.034-.1 1.015.139 2.005.458 2.915.939.91.481 1.73 1.124 2.418 1.892.688.768 1.239 1.66 1.623 2.626.384.966.598 1.997.63 3.039.032 1.042-.117 2.086-.437 3.074-.32.988-.81 1.911-1.443 2.723-.633.812-1.408 1.506-2.283 2.047z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.5 19h-1v-8h1v8zm-.5-9.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-600">Skype</p>
                <p className="text-xl font-semibold text-midnight">agency.nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-midnight flex items-center justify-center">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Email us</p>
                <div className="space-y-1">
                  <a href="mailto:info@middleorbit.com" className="block text-sm font-medium text-midnight hover:text-orbit transition">
                    info@middleorbit.com
                  </a>
                  <a href="mailto:gulfservicenepal@yahoo.com" className="block text-sm font-medium text-midnight hover:text-orbit transition">
                    gulfservicenepal@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm text-slate-600 mb-3 font-semibold">Contact Form</p>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-orbit focus:outline-none focus:ring-2 focus:ring-orbit/20"
              />
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-700">For:</span>
                <label className="flex items-center gap-2">
                  <input type="radio" name="for" value="employer" className="text-orbit" />
                  <span className="text-sm">Employer</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="for" value="candidate" className="text-orbit" />
                  <span className="text-sm">Candidate</span>
                </label>
              </div>
              
              {/* reCAPTCHA */}
              <div className="flex justify-start">
                <div className="inline-block">
                  <div className="border-2 border-slate-200 rounded-lg p-3 bg-slate-50">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="recruiter-captcha"
                        className="h-5 w-5 rounded border-slate-300 text-orbit focus:ring-orbit cursor-pointer"
                      />
                      <label htmlFor="recruiter-captcha" className="text-xs text-slate-700 cursor-pointer select-none">
                        I'm not a robot
                      </label>
                      <div className="flex flex-col items-center ml-2">
                        <svg className="h-6 w-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <rect fill="#4285F4" height="256" width="256"/>
                          <path d="M128 32l95.3 55v110L128 252 32.7 197V87L128 32z" fill="#3367D6"/>
                          <path d="M128 164.5c-20.2 0-36.5-16.3-36.5-36.5S107.8 91.5 128 91.5s36.5 16.3 36.5 36.5-16.3 36.5-36.5 36.5z" fill="#fff"/>
                        </svg>
                        <div className="flex flex-col text-[8px] text-slate-500 mt-0.5">
                          <span className="text-[7px]">reCAPTCHA</span>
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
        </div>
      </div>
    </section>
  );
}
