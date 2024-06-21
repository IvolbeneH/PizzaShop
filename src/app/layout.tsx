
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Pizza Shop",
  description: "",
  icons: {
    icon: ['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark" enableSystem attribute="class">
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
