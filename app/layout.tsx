import './ui/global.css';
import {saira} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(`${saira.className} antialiased`)}>{children}</body>
    </html>
  );
}
