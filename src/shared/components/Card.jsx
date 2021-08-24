import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  media: {
    height: 140,
  },
});

export default function UserCard({ imageUrl, bio, name, login, profile }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name || login}
          </Typography>
          <Typography gutterBottom variant="caption" component="p">
            {login}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link onClick={() => profile(login)} to='/user'>Learn More</Link>
      </CardActions>
    </Card>
  );
}