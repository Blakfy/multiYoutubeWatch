import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#212121]" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
