import React from "react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">🚧 We’re Building</h1>
        <p className="text-gray-500">
          Our <span className="font-medium text-gray-700">Login</span> and <span className="font-medium text-gray-700">Signup</span> pages are under construction.
        </p>
        <p className="text-gray-400 text-sm">They’ll be live very soon.</p>

        <div className="flex gap-4 justify-center pt-4">
          <Link href="/login">
            <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              Go to Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
              Go to Signup
            </button>
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-gray-400 text-xs">
        © {new Date().getFullYear()} — Building something awesome ✨
      </footer>
    </div>
  )
}

export default Page
