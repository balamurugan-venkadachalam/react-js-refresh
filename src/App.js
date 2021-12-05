import {
  Route, Switch
} from 'react-router-dom';
import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import {useContext} from "react";


function App() {
  const favorites = useContext([]);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupPage/>
        </Route>
        <Route path='/new-meetup' >
          <NewMeetupPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
