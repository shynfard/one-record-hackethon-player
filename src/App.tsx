// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// ----------------------------------------------------------------------

export default function App() {
  const [notification, setNotification] = useState({ title: '', body: '' });

  return (
    <ThemeProvider>
      <Toaster />
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
