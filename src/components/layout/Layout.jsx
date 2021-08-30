import { Container } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import Routes from "../../routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLayout } from "./hooks/useLayout";

const Layout = () => {
  const {
    searchResults,
    setSearchResults,
    profile,
    setProfile,
    match,
  } = useLayout();

  return (
    <Container maxWidth="md" className="layout-container">
      <Navbar
        setSearchResults={setSearchResults}
        disabled={match !== null ? match.isExact : false}
      />
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
