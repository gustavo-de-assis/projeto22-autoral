import Navbar from "@/components/Navbar";
import { AuthProvider } from "../Context/AuthContext";
import Image from "next/image";

export default function DashBoard({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  );
}
