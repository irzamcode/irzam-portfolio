// app/nail-milky/layout.tsx
import "./nail-milky.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MILKY GLASS NAIL（Demo）",
  description: "Milky × Glass / Nail salon landing page demo",
};

export default function NailMilkyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}