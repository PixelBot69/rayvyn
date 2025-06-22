"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type DropdownItem = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [resourcesOpen, setResourcesOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages", }
    , { href: "/work", label: "Work", },

    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string): boolean => pathname === path;
  const isActiveSection = (path: string): boolean => pathname.startsWith(path) && path !== "/";
  
  const toggleDropdown = (dropdown: string): void => {
    if (dropdown === "services") {
      setServicesOpen(!servicesOpen);
      if (resourcesOpen) setResourcesOpen(false);
    } else if (dropdown === "resources") {
      setResourcesOpen(!resourcesOpen);
      if (servicesOpen) setServicesOpen(false);
    }
  };

  return (
    <header className="w-full bg-black border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex h-20 items-center justify-between w-full">
  {/* Logo */}
<div className="flex items-center">
  <Link href="/" className="flex items-center mb-4">
    <img src="/13.png" alt="Rayvyn AI Logo" className="h-12 w-auto mr-2" />
    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent font-sans">
      Rayvyn<span className="ml-1 font-light">AI</span>
    </span>
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => 
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    onClick={() => toggleDropdown(link.label.toLowerCase())}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      isActiveSection(link.href) 
                        ? "bg-white text-gray-900" 
                        : "bg-transparent text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  <div className={`absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-black border border-gray-800 overflow-hidden transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible`}>
                    <div className="py-1">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === item.href 
                              ? "text-blue-400" 
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md ${
                    isActive(link.href) 
                      ? "bg-white text-gray-900" 
                      : "bg-transparent text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer">
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6">
              Book Now
            </Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 bg-black border-gray-800">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                      Rayvyn AI
                    </span>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                      <X size={24} />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <div key={link.href}>
                        {link.hasDropdown ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(link.label.toLowerCase())}
                              className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2"
                            >
                              <span>{link.label}</span>
                              <ChevronDown size={16} className={`transition-transform ${
                                (link.label === "Services" && servicesOpen) || 
                                (link.label === "Resources" && resourcesOpen) 
                                  ? "rotate-180" : ""
                              }`} />
                            </button>
                            
                            <div className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-200 ${
                              (link.label === "Services" && servicesOpen) || 
                              (link.label === "Resources" && resourcesOpen) 
                                ? "max-h-48 opacity-100" 
                                : "max-h-0 opacity-0"
                            }`}>
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`block py-2 ${
                                    pathname === item.href 
                                      ? "text-blue-400" 
                                      : "text-gray-400 hover:text-white"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link 
                            href={link.href}
                            className={`block py-2 ${
                              isActive(link.href) 
                                ? "text-blue-400" 
                                : "text-gray-300 hover:text-white"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                  
                  <div className="mt-auto pt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md">
                      Start for free
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;