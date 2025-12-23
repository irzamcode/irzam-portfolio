"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Sections from "./_components/Sections";
import ReserveModal from "./_components/ReserveModal";

export default function NoirAuraPage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  const openReserve = () => setReserveOpen(true);
  const closeReserve = () => setReserveOpen(false);

  return (
    <>
      <Header onReserve={openReserve} />
      <Hero onReserve={openReserve} />
      <Sections onReserve={openReserve} />

      <ReserveModal open={reserveOpen} onClose={closeReserve} />
    </>
  );
}