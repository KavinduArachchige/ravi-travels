import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">Sorry, we couldn’t find that page.</p>
      <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
    </div>
  );
}
