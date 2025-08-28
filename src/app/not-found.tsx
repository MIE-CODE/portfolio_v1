import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex h-screen items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-lg">Oops! This page could not be found.</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
