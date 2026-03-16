import './global.css';
import './orion.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AppSessionProvider } from '@/modules/platform/context/app-session-provider';

export const metadata = {
  title: 'SOSO',
  description: 'SOSO Application',
};

// Inline script to apply theme class before first paint — prevents flash
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('orion-theme');
    var root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    if (t === 'dark') root.classList.add('dark-theme');
    if (t === 'light') root.classList.add('light-theme');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <AppSessionProvider>{children}</AppSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
