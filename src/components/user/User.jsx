import { Grid, makeStyles } from "@material-ui/core";
import Profile from "../profile/Profile";
import Tab from "../sideComponent/Tab";
import NodeList from "../nodes/NodeList";
import RepoList from "../repos/RepoList";
import { useUser } from "./hooks/useUser";

const User = () => {
  const useStyles = makeStyles({
    root: {
      marginTop: "1em",

      "& .MuiGrid-item": {
        width: "100%",
      },
    },
  });
  const TabComponent = {
    "repo-list": RepoList,
    followers: NodeList,
    following: NodeList,
  };

  const { component, setComponent } = useUser();

  const Component = TabComponent[component];

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={3}>
        <Profile show={setComponent} />
      </Grid>
      <Grid item sm={9}>
        <Tab component={<Component />} />
      </Grid>
    </Grid>
  );
};

export default User;
