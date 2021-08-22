import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import FolderIcon from "@material-ui/icons/Folder";

const Repo = (props) => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      '&:hover': {
        background: 'rgba(0,0,0,0.1)'
      },
      '& .MuiListItem-gutters': {
        paddingLeft: '10px'
      }
    },
    inline: {
      display: 'inline',
    },
  });

  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Single-line item" secondary="Secondary text" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="star">
          <Star />
          <span style={{ fontSize: "14px", marginLeft: "0.2em" }}>255</span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Repo;
