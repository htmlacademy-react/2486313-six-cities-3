import { PageMain } from './main.tsx';
import { Login } from './login.tsx';
import { Layout } from './layout.tsx';
import { Page404 } from '../pages/page404.tsx';
import { Favorites } from './favorites.tsx';
import { OfferCard } from './offer/offer-card.tsx';
import { AuthorizationStatus } from '../const/const.ts';
import { PrivateRoute } from './private-route.tsx';
import { OfferProps } from '../types.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App({offers} : OfferProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PageMain offers={offers} />}></Route>
          <Route path='favorites/' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
          />
          <Route path='offer/'>
            <Route path=":id" element={<OfferCard offers={offers} />} />
          </Route>
        </Route>
        <Route path='login/' element={<Login />}></Route>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export {App};
