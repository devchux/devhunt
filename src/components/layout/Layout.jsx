import { Container } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Routes from "../../routes/Routes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [searchResults, setSearchResults] = useState({
    userCount: "",
    nodes: [],
  });
  const [profile, setProfile] = useState({
    login: '',
    repositories: 0,
    followers: 0,
    following: 0,
  });
  return (
    <Container maxWidth="md" className="layout-container">
      <Navbar setSearchResults={setSearchResults} />
      <Routes
        searchResults={searchResults}
        setProfile={setProfile}
        profile={profile}
      />
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default Layout;
