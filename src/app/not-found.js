import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-5xl font-bold text-fuchsia-900">404</h1>
      <p className="text-3xl font-bold mt-4 text-fuchsia-900">Page Not Found</p>

      <Link
        href="/"
        className="mt-9 px-4 py-2 bg-fuchsia-900 text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}