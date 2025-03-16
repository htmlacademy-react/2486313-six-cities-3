import { PageMain } from './main.tsx';
import { Login } from './login.tsx';
import { Layout } from './layout.tsx';
import { Page404 } from '../pages/page404.tsx';
import { Favorites } from './favorites.tsx';
import { Offer } from './offer/offer.tsx';
import { offers, AuthorizationStatus } from '../const.tsx';
import { PrivateRoute } from './private-route.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PageMain />}></Route>
          <Route path='favorites/' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path='offer/'>
            <Route path=":id" element={<Offer offers={offers} />} />
          </Route>
        </Route>
        <Route path='login/' element={<Login />}></Route>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export {App};
