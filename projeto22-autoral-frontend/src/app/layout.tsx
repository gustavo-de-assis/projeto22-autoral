import "./globals.css";

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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
