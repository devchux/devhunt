import { Grid, makeStyles } from "@material-ui/core";
import Profile from "../profile/Profile";
import Tab from "../sideComponent/Tab";
import NodeList from "../nodes/NodeList";
import RepoList from "../repos/RepoList";
import { useUser } from "./hooks/useUser";
import { Autorenew } from "@material-ui/icons";

const User = ({ profile }) => {
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
    followers: NodeList,
    following: NodeList,
  };

  const { component, setComponent, data, userLoading } = useUser(profile);

  const Component = TabComponent[component];

  const classes = useStyles();

  if (userLoading) return <Autorenew />;
  return (
    <Grid container className={classes.root}>
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
