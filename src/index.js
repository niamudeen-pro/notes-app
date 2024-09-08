import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles.css';

const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         refetch: 1,
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <QueryClientProvider client={client}>
         <Provider store={store}>
            <App />
         </Provider>
      </QueryClientProvider>
   </React.StrictMode>,
);
