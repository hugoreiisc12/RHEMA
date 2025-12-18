import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MainLayout } from "@/components/ui/MainLayout";

const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Filmmaking = lazy(() => import("@/pages/servicos/Filmmaking"));
const Fotografia = lazy(() => import("@/pages/servicos/Fotografia"));
const Edicao = lazy(() => import("@/pages/servicos/Edicao"));
const Marketing = lazy(() => import("@/pages/servicos/Marketing"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const PortfolioFilmmaking = lazy(() => import("@/pages/portfolio/Filmmaking"));
const PortfolioFotografia = lazy(() => import("@/pages/portfolio/Fotografia"));
const PortfolioEdicao = lazy(() => import("@/pages/portfolio/Edicao"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/filmmaking" element={<PortfolioFilmmaking />} />
              <Route path="/portfolio/fotografia" element={<PortfolioFotografia />} />
              <Route path="/portfolio/edicao" element={<PortfolioEdicao />} />
              <Route path="/servicos/filmmaking" element={<Filmmaking />} />
              <Route path="/servicos/fotografia" element={<Fotografia />} />
              <Route path="/servicos/edicao" element={<Edicao />} />
              <Route path="/servicos/marketing" element={<Marketing />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
