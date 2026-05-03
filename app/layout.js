import "./globals.css";

export const metadata = {
  title: "Adnan Sheikh — Full Stack Dev Portfolio",
  description: "Lab assignments, source code & live demos for Full Stack Web Development",
  metadataBase: new URL("https://adnansheikh.com"),
  openGraph: {
    title: "Adnan Sheikh — Full Stack Dev Portfolio",
    description: "Practical implementations of HTML, CSS, JS, PHP, React",
    url: "https://adnansheikh.com",
    siteName: "Adnan Sheikh",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white/90 antialiased">{children}</body>
    </html>
  );
}