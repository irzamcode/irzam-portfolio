"use client";

import { useEffect, useState } from "react";

export function Toast({ message, show }: { message: string; show: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 animate-fade-in"
      role="alert"
      aria-live="polite"
    >
      <div className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg">
        {message}
      </div>
    </div>
  );
}

