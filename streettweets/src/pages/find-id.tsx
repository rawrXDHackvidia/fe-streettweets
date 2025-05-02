import Link from "next/link";
import Head from "next/head";

const LiveMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0670959784984!2d-73.98576578456585!3d40.74844044005727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd14e118050c02303!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1677578442002!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default function FindId() {
  return (
    <>
      <Head>
        <title>Find ID - Street Tweets</title>
        <meta
          name="description"
          content="Find your report ID on Street Tweets"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-gradient-to-r from-sky-400 to-blue-500 text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  <span className="font-light">Street</span> Tweets
                </h1>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
                  About
                </Link>
                <Link
                  href="/dashboard"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
                  Dashboard
                </Link>
                <Link
                  href="/report"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
                  Report
                </Link>
                <Link href="/find-id" className="border-b-2 border-white">
                  Find ID
                </Link>
                <Link
                  href="/track"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
                  Track
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-12">
                Find Your Report ID
              </h1>

              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Your X Username"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Find
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                  Recent Report Updates
                </h2>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                      New Report
                    </span>
                    <span className="font-medium">ID #13891723</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Submitted by{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      @sarah_dev
                    </Link>{" "}
                    <span className="text-gray-400 text-xs">2 minutes ago</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                      New Report
                    </span>
                    <span className="font-medium">ID #13898723</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Submitted by{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      @millersay
                    </Link>{" "}
                    <span className="text-gray-400 text-xs">
                      10 minutes ago
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                      New Report
                    </span>
                    <span className="font-medium">ID #13891723</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Submitted by{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      @vinushaaaa
                    </Link>{" "}
                    <span className="text-gray-400 text-xs">
                      11 minutes ago
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                      New Report
                    </span>
                    <span className="font-medium">ID #13891723</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Submitted by{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      @JojoBizzare
                    </Link>{" "}
                    <span className="text-gray-400 text-xs">
                      22 minutes ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Street Tweets</h3>
                <p className="text-sm opacity-80 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  risus feugiat lectus risus sed ullamcorper. Auctor semper
                  fermentum volutpat integer vel. In rhoncus elementum nunc,
                  malesuada mi sed. Nibh est sit lobortis id tempor.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Address</h3>
                <div className="bg-white/10 rounded-lg overflow-hidden h-40">
                  <LiveMap />
                </div>
              </div>
            </div>
            <div className="border-t border-blue-500 mt-8 pt-8 text-center text-sm opacity-80">
              <p>©{new Date().getFullYear()} All Right Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
