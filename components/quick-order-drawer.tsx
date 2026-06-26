"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PRODUCT, BUNDLE_ITEMS } from "@/lib/constants";
import PayPalButton from "./paypal-button";
import PayPalMessages from "./paypal-messages";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

export function QuickOrderDrawer() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="relative group text-[var(--color-text)]">
            <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-accent)] rounded-full border border-[var(--color-base)]"></span>
            <span className="sr-only">Open quick order drawer</span>
          </Button>
        }
      />
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-[var(--color-border)] bg-[var(--color-base)]">
        <div className="p-6 pb-4 border-b border-[var(--color-border-subtle)]">
          <SheetHeader>
            <SheetTitle className="text-left font-display font-bold text-xl text-[var(--color-text)]">
              Quick Order Summary
            </SheetTitle>
            <SheetDescription className="text-left text-sm text-[var(--color-text-muted)]">
              Review your student bundle before proceeding to checkout.
            </SheetDescription>
          </SheetHeader>
        </div>

        <ScrollArea className="flex-1 px-6">
          <div className="py-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-24 h-24 relative bg-white rounded-md border border-[var(--color-border-subtle)] flex-shrink-0 flex items-center justify-center p-2">
                <Image
                  src={PRODUCT.image}
                  alt={PRODUCT.name}
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-[var(--color-text)] leading-tight">{PRODUCT.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{PRODUCT.subtitle}</p>
                <p className="font-semibold text-lg text-[var(--color-text)] mt-2">{PRODUCT.priceFormatted}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[var(--color-text)] text-sm uppercase tracking-wider">What&apos;s Included</h4>
              <ul className="space-y-3">
                {BUNDLE_ITEMS.map((section) => (
                  <li key={section.id} className="text-sm">
                    <span className="font-medium text-[var(--color-text)] block mb-1">{section.category}</span>
                    <ul className="pl-0 space-y-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-[var(--color-text-muted)] flex items-start">
                          <span className="text-[var(--color-accent)] mr-2 mt-0.5">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>

        <div className="p-6 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-[var(--color-text)]">Total</span>
            <span className="font-bold text-xl text-[var(--color-text)]">{PRODUCT.priceFormatted}</span>
          </div>
          
          <div className="space-y-3">
            <PayPalMessages />
            <div className="relative z-10 w-full min-h-[55px]">
              <PayPalButton />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
