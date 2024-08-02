"use client";
import type { Metadata } from "next";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "@/lib/redux/slices/authSlice";
import { useAuth } from "@/hooks/useAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const rehydrateStore = () => {
    const auth = JSON.parse(localStorage.getItem("auth")!);
    if (auth) {
      dispatch(setAuth(auth));
    }
  };
  useEffect(() => {
    rehydrateStore();
  }, []);
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
