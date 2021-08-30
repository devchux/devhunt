import { useRouteMatch } from "react-router-dom";
import { useState } from "react";

export const useLayout = () => {
  const [searchResults, setSearchResults] = useState({
    userCount: "",
    nodes: [],
  });
  const [profile, setProfile] = useState({
    login: "",
    repositories: 0,
    followers: 0,
    following: 0,
  });
  let match = useRouteMatch("/user");
  return {
    searchResults,
    setSearchResults,
    profile,
    setProfile,
    match,
  };
};
