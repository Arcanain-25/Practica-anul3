import type { Metadata } from "next";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Codex Automobilis 🔮",
  description: "Mystical catalog of arcane chariots and relics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} antialiased min-h-screen transition-colors duration-700
        bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-violet-100`}
      >
        {/* Магический орнамент можно добавить отдельным div с эффектами */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,100,255,0.15),transparent_70%)] pointer-events-none" />
        
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

