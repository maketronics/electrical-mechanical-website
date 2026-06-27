import "./globals.css";

export const metadata = {
  icons: {
    icon: "/feviconlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}