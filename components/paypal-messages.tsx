"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { PAYPAL, PRODUCT } from "@/lib/constants";

export default function PayPalMessages() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    const checkSDK = setInterval(() => {
      if (window.paypalSDK) {
        clearInterval(checkSDK);
        try {
          window.paypalSDK.Messages({
            amount: PRODUCT.price,
            currency: PAYPAL.currency,
            style: { 
              layout: "text",
              text: {
                color: isDark ? "white" : "black",
              }
            },
          }).render(container);
        } catch {
          // SDK may not have Messages component in all sandbox configs — fail silently
        }
      }
    }, 150);

    return () => clearInterval(checkSDK);
  }, [mounted, isDark]);

  if (!mounted) return <div style={{ minHeight: "20px", marginBottom: "1rem" }} />;

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "20px",
        textAlign: "center",
        fontSize: "0.875rem",
        color: isDark ? "#ffffff" : "#000000",
        marginBottom: "1rem",
      }}
    />
  );
}


