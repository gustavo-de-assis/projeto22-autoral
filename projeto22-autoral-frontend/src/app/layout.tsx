import "./globals.css";
import { Rajdhani } from "next/font/google";
import { AuthProvider } from "./Context/AuthContext";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tetelestyle",
  description: "Seu site de moda cristã",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={rajdhani.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
