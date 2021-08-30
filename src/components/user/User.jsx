import { Grid, makeStyles } from "@material-ui/core";
import Profile from "../profile/Profile";
import Tab from "../sideComponent/Tab";
import RepoList from "../repos/RepoList";
import { useUser } from "./hooks/useUser";
import { ReactComponent } from "../../assets/images/loading.svg";
import Result from "../results/Result";

const User = ({ profile, setProfile }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: "1em",

      "& .MuiGrid-item": {
        width: "100%",
      },
    },
  });
  const TabComponent = {
    repositories: RepoList,
    followers: Result,
    following: Result,
  };

  const { component, setComponent, data, userLoading } = useUser(profile);

  const Component = TabComponent[component];

  const classes = useStyles();

  if (userLoading) return <ReactComponent className="spinner" />;
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="space-between"
      spacing={1}
    >
      {data && (
        <>
          <Grid item sm={3}>
            <Profile show={setComponent} data={data.user} />
          </Grid>
          <Grid item sm={9}>
            <Tab
              component={
                <Component
                  repositories={data.user.repositories.nodes}
                  followers={data.user.followers.nodes}
                  following={data.user.following.nodes}
                  setProfile={setProfile}
                  searchResults={{
                    nodes:
                      component === "following"
                        ? [...data.user.following.nodes]
                        : [...data.user.followers.nodes],
                  }}
                />
              }
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default User;
