import React from "react";
import { Route, Redirect } from "react-router-dom";
import User from "../components/user/User";
import Result from "../components/results/Result";

const Routes = ({ searchResults, setProfile, profile }) => {
  return (
    <React.Fragment>
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
        render={(props) =>
          !profile.login ? (
            <Redirect to="/" />
          ) : (
            <User {...props} profile={profile} />
          )
        }
      />
    </React.Fragment>
  );
};

export default Routes;
