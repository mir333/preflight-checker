import { Link } from "@tanstack/react-router";
import { useLocale } from './LocaleProvider';

export default function Header() {
  const { locale, setLocale } = useLocale();
  return (
    <header className="p-2 bg-white text-black border-b border-gray-200">
      <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <nav className="ml-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
          </nav>
        </div>
        <div className="flex items-center">
          <select
            value={locale}
            onChange={e => setLocale(e.target.value as 'en' | 'cs')}
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="cs">CS</option>
          </select>
        </div>
      </div>
    </header>
  );
}
