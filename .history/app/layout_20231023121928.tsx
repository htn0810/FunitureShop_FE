import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { MainLayout } from "./_layout";
import Footer from "./_modules/footer/Footer";
import Header from "./_modules/header";
import SubLayout from "./_layout/SubLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Funiture",
  description: "This is HTN Funiture Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainLayout>
          <Header />
          <SubLayout>{children}</SubLayout>
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
