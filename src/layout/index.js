import { Header } from "./header/"
import { Footer } from "./footer/"
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from "../history";
import { Provider } from "react-redux";
import { CPageAllNews} from '../pages/pageAllNews';
import { CPageNews} from '../pages/pageNews';
import { CPageCategory } from "../pages/pageCategory";
import { store } from "../store";
import { CPageResultSearch } from "../pages/pageSearchResult";

export const NotFound = () => <div className="Error">404</div>


export const Content = () => {
  return (
    <>
      <Provider store={store}>
      <Router history={history}>
          <Header/>
          <main>
            <Switch>
              <Route path="/" component={CPageAllNews} exact/>
              <Route path='/main/:title' component={CPageNews}/>
              <Route path="/search" component={CPageResultSearch} />
              <Route path='/category/:category' component={CPageCategory}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </Router>
        <Footer/>
      </Provider>
    </>
  )
}