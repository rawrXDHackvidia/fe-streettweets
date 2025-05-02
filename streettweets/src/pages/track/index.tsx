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
import Image from "next/image";

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
      <header className="bg-gradient-to-r text-blue-500 border-b-2">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                width={200}
                height={200}
                src={"/assets/logo-street.png"}
                alt={""}
                className="w-10 h-10"
              />
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
              <Link href="/track" className="border-b-2 border-blue-500">
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

      <footer className="bg-[#1566C3] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Street Tweets</h2>
              <p className="text-sm mt-1">
                Empowering Cities with Smarter Road Maintenance
              </p>
            </div>
            <div>
              <p>
                &copy; {new Date().getFullYear()} Street Tweets. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
