import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Suspense, lazy } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";

// Lazy load pages for better bundle chunking
const Index = lazy(() => import("./pages/Index"));
const Uslugi = lazy(() => import("./pages/Uslugi"));
const BazaWiedzy = lazy(() => import("./pages/BazaWiedzy"));
const ONas = lazy(() => import("./pages/ONas"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={
              <div className="min-h-screen bg-[#050608] flex items-center justify-center">
                <LoadingSpinner size={48} />
              </div>
            }>
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
            </Suspense>
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
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
