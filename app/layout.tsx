// app/layout.tsx
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Proverbs Daily',
  description: 'Daily wisdom from the book of Proverbs',
};