"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

import ToasterContext from "../context/ToastContext";
import { AuthProvider } from "../context/AuthContext";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.variable}`}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider
              enableSystem={false}
              attribute="class"
              defaultTheme="light"
            >
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
