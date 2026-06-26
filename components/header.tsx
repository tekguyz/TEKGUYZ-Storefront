import { ThemeToggle } from "./theme-toggle";
import { HeaderScrollEffect } from "./header-scroll-effect";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { QuickOrderDrawer } from "./quick-order-drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 transition-all duration-300 border-b border-transparent data-[scrolled=true]:bg-background/85 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:border-[var(--color-border-subtle)]">
      <HeaderScrollEffect />
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            aria-label="TEKGUYZ Home" 
            className="font-display font-extrabold tracking-[0.08em] text-[clamp(1.1rem,2.5vw,1.4rem)] text-[var(--color-text)] flex items-center"
          >
            TEKGUY<span className="text-[var(--color-accent)]">Z</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="https://www.eclipsecat.com/catalog/software" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Software
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors outline-none cursor-pointer">
                Computers <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-[var(--color-base)] border border-[var(--color-border)] rounded-[var(--radius-button)] shadow-lg mt-2 p-1">
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/all-laptops" className="w-full px-2 py-1.5 block">All Laptops</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/category/catalog/laptops/accessories" className="w-full px-2 py-1.5 block">Accessories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/content/services" className="w-full px-2 py-1.5 block">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/product/BoostBoxG4" className="w-full px-2 py-1.5 block">Boost Box</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/laptops/P14s-AMDR7-1TB32GB" className="w-full px-2 py-1.5 block">ThinkPad P14s | AMD R7 Pro</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/node/17496" className="w-full px-2 py-1.5 block">ThinkPad P16s | 4K OLED | AMD R7 Pro</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/laptops/P16s-Ultra7-512GB" className="w-full px-2 py-1.5 block">ThinkPad P16s | Intel Ultra 7</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-0 transition-colors">
                  <Link href="https://www.eclipsecat.com/node/17364" className="w-full px-2 py-1.5 block">ThinkPad X1 Carbon | Intel Ultra 7</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <QuickOrderDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
