import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Completed from './components/Completed/Completed';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Pending from './components/Pending/Pending';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoDetail from './components/TodoDetail/TodoDetail';

function App() {
  return (
    <div className='bg-color'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/pending'>
            <Pending></Pending>
          </Route>
          <Route path='/completed'>
            <Completed></Completed>
          </Route>
          <Route path='/home/:todoid'>
            <TodoDetail></TodoDetail>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
