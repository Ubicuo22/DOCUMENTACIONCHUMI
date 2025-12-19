import { Menu, Moon, Sun, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
  breadcrumbs: { title: string; href?: string }[];
}

export function Header({ onMenuClick, breadcrumbs }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/logo-ubicuo.png" 
              alt="CHUMI Logo" 
              className="h-8 w-8 dark:hidden" 
            />
            <img 
              src="/logo-ubicuo-negativo.png" 
              alt="CHUMI Logo Dark" 
              className="h-8 w-8 hidden dark:block" 
            />
            <div className="flex flex-col items-start">
              <span className="hidden sm:block font-black text-lg text-gray-900 dark:text-white tracking-tight">CHUMI</span>
              <span className="hidden sm:block text-xs text-orange-600 dark:text-orange-400 font-semibold leading-tight">
                <div>Cloud Hybrid Unified</div>
                <div>Management Infrastructure</div>
              </span>
            </div>
          </a>
        </div>

        {/* Breadcrumbs - Centro */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center mx-8">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
              {breadcrumb.href ? (
                <a href={breadcrumb.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition">
                  {breadcrumb.title}
                </a>
              ) : (
                <span className="text-sm text-gray-900 dark:text-white font-medium">
                  {breadcrumb.title}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Search and Theme Toggle */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition hidden sm:block">
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-600" />
            ) : (
              <Sun className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}