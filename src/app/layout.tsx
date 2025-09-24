"use client";
import CursorBall from "@/components/common/cursorBall";
import "@/src/app/globals.css";
import { Manrope, Saira } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});
const saira = Saira({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-saira",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sanityId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nj1kut2q";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Finfutech Solution Private Limited",
    url: "https://jumpp.finance/",
    logo: `https://cdn.sanity.io/images/${sanityId}/production/2a989f36a38806ccc755c9c8f578e200a8f5f905-89x51.svg`,
    sameAs: [
      "https://x.com/letsjumpp",
      "https://www.instagram.com/lets.jumpp/",
      "https://www.youtube.com/@Jumpp.Finance",
      "https://www.linkedin.com/company/jumpp-finance",
    ],
  };

  return (
    <html lang="en">
      <head>
        <title>
          Discover Daily Savings App Jumpp To Kickstart Your Savings
        </title>

        <meta
          name="description"
          content="JUMPP is a daily savings app with AI-powered insights and personalized budgets. Hop on for smart money management and leap towards better savings & investments."
        />

        <meta
          property="og:title"
          content="Discover Daily Savings App Jumpp To Kickstart Your Savings"
        />
        <meta
          property="og:description"
          content="JUMPP is a daily savings app with AI-powered insights and personalized budgets. Hop on for smart money management and leap towards better savings & investments."
        />

        <meta
          name="twitter:title"
          content="Discover Daily Savings App Jumpp To Kickstart Your Savings"
        />
        <meta
          name="twitter:description"
          content="JUMPP is a daily savings app with AI-powered insights and personalized budgets. Hop on for smart money management and leap towards better savings & investments."
        />

        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJ68TVP7');`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={`${manrope.variable} ${saira.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJ68TVP7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div>{children}</div>
        <CursorBall />
        <ToastContainer />
      </body>
    </html>
  );
}
