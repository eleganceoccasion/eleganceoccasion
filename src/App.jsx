import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import { EnquiryProvider } from '@/components/site/EnquiryProvider';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Gallery from '@/pages/Gallery';
import Corporate from '@/pages/Corporate';
import Weddings from '@/pages/Weddings';
import Contact from '@/pages/Contact';
// Add page imports here

const PublicApp = () => {
  return (
    <EnquiryProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </EnquiryProvider>
  );
};


function App() {

  return (
    <>
        <Router>
          <ScrollToTop />
          <PublicApp />
        </Router>
        <Toaster />
    </>
  )
}

export default App
