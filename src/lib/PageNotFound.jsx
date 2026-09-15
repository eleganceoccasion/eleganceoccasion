import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 p-8 text-center text-slate-900">
      <div>
        <p className="text-sm tracking-widest">ELEGANCE OCCASION · 404</p>
        <h1 className="mt-6 text-4xl">Page not found</h1>
        <p className="mt-4">Let’s help you find your next occasion.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-slate-900 px-8 py-3 text-white">Return home</Link>
      </div>
    </main>
  );
}
