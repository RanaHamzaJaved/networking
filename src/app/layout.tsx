import { Inter } from "next/font/google";
import { QueryProviders } from "@/providers/QueryClientProvider";
import "./globals.css";
import Header from "@/components/layout/header";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProviders>
          <Header />

          {children}
        </QueryProviders>
      </body>
    </html>
  );
}
