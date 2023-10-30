import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.scss";
import { MainLayout } from "./_layout";
import Footer from "./_modules/footer/Footer";
import Header from "./_modules/header";
import SubLayout from "./_layout/SubLayout";
import AOSInit from "./_utils/aos";
import ToastProvider from "./_utils/toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const josefin = Josefin_Sans({
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
      <AOSInit />
      <body className={josefin.className}>
        <ToastProvider>
          <MainLayout>
            <Header />
            <SubLayout>{children}</SubLayout>
            <Footer />
          </MainLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
