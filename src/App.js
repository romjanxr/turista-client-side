import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddTourPackage from './components/AddTourPackage/AddTourPackage';
import TourPackage from './components/TourPackage/TourPackage';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/tour-packages">
            <TourPackage />
          </Route>
          <PrivateRoute path="/tour-packages/:id">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manage-all-orders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/add-package">
            <AddTourPackage />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
