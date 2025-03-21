import "./globals.css";

export const metadata = {
  title: "RecycleHub",
  description: "Shop eco-freindly products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}