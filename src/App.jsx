import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <h1 className="text-3xl font-bold underline">
          Batman commit! Welcome everyone!
        </h1>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
