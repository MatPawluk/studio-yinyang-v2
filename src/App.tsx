import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import BazaWiedzy from "./pages/BazaWiedzy";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import ServiceDetail from "./pages/ServiceDetail";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/uslugi/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/uslugi/:serviceSlug/:subServiceSlug" element={<ServiceDetail />} />
            <Route path="/baza-wiedzy" element={<BazaWiedzy />} />
            <Route path="/baza-wiedzy/:articleSlug" element={<ArticleDetail />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Global SVG Filters for Liquid Glass effects */}
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <filter id="liquid-filter">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.005" 
                numOctaves="1" 
                result="noise" 
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="8" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
          </defs>
        </svg>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
