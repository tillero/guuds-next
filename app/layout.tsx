import "./globals.css";
import Header from "./(Header)/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head />
      <body className="lg:container lg:mx-auto xl:px-28 lg:px-10 bg-white-background overflow-x-clip">
        <Header />
        {children}
      </body>
    </html>
  );
}
