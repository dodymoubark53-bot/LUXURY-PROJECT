import { StrictMode, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { initI18n } from './i18n'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { CurrencyProvider } from './context/CurrencyContext'
import { ThemeProvider } from './context/ThemeContext'

function Root() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="text-xl font-semibold text-amber-600">Loading...</div>
      </div>
    );
  }

  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <CurrencyProvider>
            <ThemeProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </ThemeProvider>
          </CurrencyProvider>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
