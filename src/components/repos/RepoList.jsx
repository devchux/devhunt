import { List } from "@material-ui/core";
import { nanoid } from "nanoid";
import Repo from "../../shared/components/Repo";

const RepoList = ({ repositories }) => {
  return (
    <List>
      {repositories.length > 0 ? (
        repositories.reverse().map(({ name, url, stargazerCount, description }) => (
          <Repo
            key={nanoid()}
            name={name}
            url={url}
            stargazerCount={stargazerCount}
            description={description}
          />
        ))
      ) : (
        <center>No repositories found.</center>
      )}
    </List>
  );
};

export default RepoList;
