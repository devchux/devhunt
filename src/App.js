import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
