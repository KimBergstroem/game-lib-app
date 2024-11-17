import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/pages/Layout";
import GameDetail from "@/components/GameDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    // For React Router v7 warnings in console
    // https://reactrouter.com/en/6.28.0/upgrading/future#v7_starttransition
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
