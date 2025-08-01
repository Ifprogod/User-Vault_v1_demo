import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import các Providers
import { ToastProvider } from './hooks/use-toast';
import { LanguageProvider } from './contexts/language-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Khởi tạo QueryClient với defaultOptions để cấu hình staleTime và gcTime
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // Dữ liệu được coi là "tươi" trong 10 phút
      gcTime: 1000 * 60 * 30,   // Dữ liệu được giữ trong cache 30 phút sau khi không còn được sử dụng
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Bọc toàn bộ App bằng các Providers ở cấp cao nhất */}
    <ToastProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </LanguageProvider>
    </ToastProvider>
  </React.StrictMode>,
);
