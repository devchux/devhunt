import { List } from "@material-ui/core";
import Repo from "../../shared/components/Repo";

const RepoList = ({ repositories }) => {
  return (
    <List>
      {repositories.length > 0 ? (
        repositories.map(({ name, url, stargazerCount, description }) => (
          <Repo name={name} url={url} stargazerCount={stargazerCount} description={name} />
        ))
      ) : (
        <center>No repositories found.</center>
      )}
    </List>
  );
};

export default RepoList;
