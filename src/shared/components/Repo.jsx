import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import '../css/repo.scss'

const Repo = ({ name, url, stargazerCount, description }) => {
  return (
    <a href={url} className='repo-wrapper'>
      <ListItem>
        <ListItemText primary={name} secondary={description} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="star">
            <Star />
            <span style={{ fontSize: "14px", marginLeft: "0.2em" }}>
              {stargazerCount}
            </span>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </a>
  );
};

export default Repo;
