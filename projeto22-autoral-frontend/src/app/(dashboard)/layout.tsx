"use client";

import Navbar from "@/components/Navbar";
import { AuthContext, AuthProvider } from "../Context/AuthContext";
import { useContext } from "react";

export default function DashBoard({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  );
}
