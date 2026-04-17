import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

export const metadata = {
  title: 'Residential and Commercial Cleaning Service in Richmond, VA | Roots Cleaning Solutions',
  description: 'We provide home cleaning services, commercial and deep cleaning services in Richmond, VA and surrounding areas.',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Roots Cleaning Solutions',
    description: 'We provide home cleaning services, commercial and deep cleaning services in Richmond, VA and surrounding areas.',
    url: 'https://rootscleaningservices.com/',
    siteName: 'Roots Cleaning Solutions',
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className="modern-theme">
        <Navbar />
        {children}
        <Footer />
        {/* Standard HTML Script Tags for 100% native execution (bypassing SPA hydration bugs) */}
        <script src="/js/main.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RMHXC2D1ZX');
          `
        }}></script>
        <script src="https://widgets.leadconnectorhq.com/loader.js" defer data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="694a111df258cf84ec1599ad"></script>
      </body>
    </html>
  );
}
