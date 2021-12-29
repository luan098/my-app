import { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PreLoader from './components/PreLoader/PreLoader';

const Route1 = lazy(() => import('./Routes/Route1'));
const Route2 = lazy(() => import('./Routes/Route2'));

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='route1' element={<Route1 />} />
        <Route path='route2' element={<Route2 />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  rootElement
);
