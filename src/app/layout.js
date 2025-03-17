import './globals.css';

export const metadata = {
  title: 'Tic Tac Toe Game',
  description: 'A simple Tic Tac Toe game built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}