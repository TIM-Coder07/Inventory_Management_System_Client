
import "./globals.css";

export const metadata = {
  title: "Inventory Manager",
  description: "Retail POS and Inventory Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
