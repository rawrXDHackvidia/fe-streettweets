import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
                <Link href="/find-id" className="border-b-2 border-blue-500">
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
    </>
  );
}
