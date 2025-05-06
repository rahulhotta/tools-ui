import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Providers } from './Utils/Redux/provider';
import NavBar from "./Components/navBar/navBar";
import Loader from "./Utils/Services/Loader/Loader";
import { App as AntdApp, ConfigProvider } from 'antd';
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: "Little Tools",
  description: "Get alot of useful tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AntdApp>
            <Toaster />
            <Loader />
            <NavBar />
            
            {children}
          </AntdApp>
        </Providers>
      </body>
    </html>
  );
}
