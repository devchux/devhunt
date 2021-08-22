import { Route } from 'react-router-dom';
import { Container } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import User from '../user/User';
import Result from '../results/Result';

const Layout = () => {
  return (
    <Container maxWidth="md" className="layout-container">
      <Navbar />
      <Route path='/' exact component={Result}  />
      <Route path='/user/:username' exact component={User}  />
    </Container>
  );
}

export default Layout;