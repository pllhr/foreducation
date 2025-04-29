
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6f698369-59b4-4ab2-a7b4-9b41611ab876.png" 
            alt="For Education Logo" 
            className="h-8 hover:opacity-80 transition-opacity"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Catalog</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 min-w-[220px]">
                  <ul className="grid gap-1">
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Programming</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Data Science</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Web Development</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Machine Learning</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 min-w-[220px]">
                  <ul className="grid gap-1">
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Tutorials</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Documentation</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Blog</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Community</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 min-w-[220px]">
                  <ul className="grid gap-1">
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Forums</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Discord</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Events</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">Pricing</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 min-w-[220px]">
                  <ul className="grid gap-1">
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Plans</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Enterprise</li>
                    <li className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">Students</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-4 py-2 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  Career Center
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-4 py-2 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  For Business
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="absolute right-0 top-0 flex items-center bg-white rounded-md border border-gray-200 shadow-sm">
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="w-64 p-2 rounded-l-md focus:outline-none"
                  autoFocus
                />
                <button 
                  onClick={() => setSearchOpen(false)} 
                  className="p-2 rounded-r-md hover:bg-gray-50"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ) : (
              <Search 
                className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer transition-colors" 
                onClick={() => setSearchOpen(true)}
              />
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? 
                <X className="h-6 w-6 text-gray-700" /> : 
                <Menu className="h-6 w-6 text-gray-700" />
              }
            </button>
          </div>
          
          {/* Sign Up button */}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 transition-all shadow-sm hidden md:flex"
          >
            Sign Up
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 animate-fade-in">
          <div className="space-y-3">
            <div>
              <button className="flex items-center justify-between w-full py-2 text-left">
                <span className="font-medium">Catalog</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-between w-full py-2 text-left">
                <span className="font-medium">Resources</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-between w-full py-2 text-left">
                <span className="font-medium">Community</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
            <div>
              <button className="flex items-center justify-between w-full py-2 text-left">
                <span className="font-medium">Pricing</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="py-2">Career Center</div>
            <div className="py-2">For Business</div>
            <Button className="w-full mt-4">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
