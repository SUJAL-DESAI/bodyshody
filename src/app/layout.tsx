// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Body Shody",
//   description: "Get Fit",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Body Shody",
  description: "Get Fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* General Metadata */}
        <title>Body Shody - Get Fit</title>
        <meta name="description" content="Achieve your fitness goals with Body Shody. Explore exercises, nutrition tips, and workout plans tailored for you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Body Shody - Get Fit" />
        <meta property="og:description" content="Achieve your fitness goals with Body Shody. Explore exercises, nutrition tips, and workout plans tailored for you!" />
        <meta property="og:image" content="https://ibb.co/SKxDx0m" /> {/* Replace with your actual image URL */}
         <meta property="og:site_name" content="Body Shody" />
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
