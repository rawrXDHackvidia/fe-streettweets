"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Search,
  Send,
  PenToolIcon as Tool,
  Check,
  Edit,
} from "lucide-react";

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

export default function Track() {
  const [reportId, setReportId] = useState("");
  const [isTracking, setIsTracking] = useState(true); // Set to true to show the tracking info by default

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (reportId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
              <Link
                href="/find-id"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                Find ID
              </Link>
              <Link href="/track" className="border-b-2 border-white">
                Track
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Track Your Report Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">
              Track Your Report
            </h2>

            {/* Track Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <form onSubmit={handleTrack} className="flex">
                <input
                  type="text"
                  placeholder="Enter Report ID"
                  value={reportId}
                  onChange={(e) => setReportId(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors"
                >
                  Track
                </button>
              </form>
            </div>

            {/* Report Status */}
            {isTracking && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Report Status</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                    ID: #12345
                  </span>
                </div>

                {/* Progress Steps */}
                <div className="space-y-6 mb-8">
                  {/* Step 1 */}
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full p-2 mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-green-500 text-sm">
                      Report Received
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full p-2 mr-4">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-green-500 text-sm">
                      Validation
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center">
                    <div className="bg-gray-300 rounded-full p-2 mr-4">
                      <Send className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-500 text-sm">
                      Sent to Authority
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center">
                    <div className="bg-gray-300 rounded-full p-2 mr-4">
                      <Tool className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-500 text-sm">
                      In Progress
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-center">
                    <div className="bg-gray-300 rounded-full p-2 mr-4">
                      <Check className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-500 text-sm">Completed</div>
                  </div>
                </div>

                {/* Bottom Sections */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Report Details */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Report Details</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Location:</span> Jalan
                        Sudirman No. 123
                      </p>
                      <p>
                        <span className="text-gray-600">Submitted:</span>{" "}
                        January 15, 2025
                      </p>
                    </div>
                    <button className="flex items-center text-blue-600 mt-3 text-sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Update Information
                    </button>
                  </div>

                  {/* Can't find your Report ID? */}
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-start">
                      <Search className="h-5 w-5 text-gray-600 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          Can&apos;t find your Report ID?
                        </h4>
                        <p className="text-sm text-gray-600">
                          Don&apos;t worry —{" "}
                          <Link
                            href="/find-id"
                            className="text-blue-600 hover:underline"
                          >
                            find it here
                          </Link>{" "}
                          to look it up now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
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
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
            <p>©2025 All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
