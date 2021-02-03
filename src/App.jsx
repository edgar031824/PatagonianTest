import Header from './components/header';
import Info from './components/info';
import Table from './components/table';
import Grid from './components/grid';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImagesProvider from './context/imagesContext';

function App() {
  return (
    <Router>
      <ImagesProvider>
        <Header></Header>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route exact path="/images" component={Grid} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </ImagesProvider>
    </Router>
  );
}

export default App;
