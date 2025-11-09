import LanguageSelector from '@/components/common/LanguageSelector';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({isScrolled}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuOptions = [
    { id: 1, path: '/', name: 'Home' },
    { id: 3, path: '/support', name: 'Support' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className={`inline-flex items-center justify-center rounded-md p-2 ${isScrolled ? 'text-primary' : 'text-white'} hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false`}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="block h-6 w-6" aria-hidden="true" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-heading">Menu</h2>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 py-6 space-y-4">
              {menuOptions?.map((menu) => (
                <Link
                  key={menu?.id}
                  to={menu?.path}
                  onClick={handleLinkClick}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                    {
                      'text-primary bg-primary/10':
                        menu?.path === location?.pathname,
                      'text-gray-700 hover:text-primary hover:bg-gray-50':
                        menu?.path !== location?.pathname,
                    }
                  )}
                >
                  {menu?.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="py-4 border-t border-gray-200">
              <div className="px-3">
                <LanguageSelector triggerClassName="text-gray-700 hover:text-primary" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="py-4 border-t border-gray-200 space-y-3">
              <div className="px-3">
                <Link
                  to="/auth/sign-in"
                  onClick={handleLinkClick}
                  className="w-full cursor-pointer py-[12px] rounded-[40px] capitalize text-base font-bold text-primary px-5 text-center bg-transparent border-[2px] border-primary duration-200 ease-in-out hover:bg-primary hover:text-white inline-block"
                >
                  Log In
                </Link>
              </div>
              <div className="px-3">
                <Link
                  to="/auth/sign-up?for-business"
                  onClick={handleLinkClick}
                  className="w-full cursor-pointer py-[12px] rounded-[40px] capitalize text-base font-bold text-white px-5 text-center bg-primary border-[2px] border-primary duration-200 ease-in-out hover:bg-primary/90 inline-block"
                >
                  Register Your Business
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
