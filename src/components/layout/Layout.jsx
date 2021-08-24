import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import User from "../user/User";
import Result from "../results/Result";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [searchResults, setSearchResults] = useState({
    userCount: "",
    nodes: [],
  });
  const [profile, setProfile] = useState("");
  return (
    <Container maxWidth="md" className="layout-container">
      <Navbar setSearchResults={setSearchResults} />
      <Route
        path="/"
        exact
        render={(props) => (
          <Result
            {...props}
            searchResults={searchResults}
            setProfile={setProfile}
          />
        )}
      />
      <Route
        path="/user"
        exact
        render={(props) => <User {...props} profile={profile} />}
      />
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default Layout;
