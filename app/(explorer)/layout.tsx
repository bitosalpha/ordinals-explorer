"use client";

import React from 'react';
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


// Define the RootLayoutProps type with corrected properties
type RootLayoutProps = {
  children: React.ReactNode;
  dehydratedState?: string;
  onPersistState?: (dehydratedState: string) => void;
  onSignOut?: () => void;
};

// Define onPersistState function
const onPersistState = (dehydratedState: string) => {
  // Implement your logic here
};

// Define onSignOut function
const onSignOut = () => {
  // Implement your sign-out logic here
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#CFC9C2" />
        {process.env.ENABLE_CSP && (
          <meta
            httpEquiv="Content-Security-Policy"
            content="frame-src https://*.hiro.so https://*.vercel.app http://localhost:*;"
          />
        )}
      </head>

      <body className="flex min-h-screen flex-col justify-between">
        <Toaster position="top-center" reverseOrder={false} />
        <>
          {/* Content */}
          <Header onPersistState={onPersistState} onSignOut={onSignOut} />
          {children}
          <Footer />
        </>
        <>
          {/* Analytics */}
          <Script id="google-analytics" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFK4WN9');`}
          </Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PFK4WN9"
              style={{ display: "none", visibility: "hidden" }}
              height="0"
              width="0"
            />
          </noscript>
        </>
      </body>
    </html>
  );
}
