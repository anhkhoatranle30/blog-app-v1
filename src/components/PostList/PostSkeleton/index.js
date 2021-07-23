import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import useStyles from "./styles";

export default function PostSkeleton() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        title={<Skeleton width={100} />}
        subheader={<Skeleton width={120} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Skeleton
        width="100%"
        animation="wave"
        variant="rect"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Skeleton />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            <Skeleton width={30} />
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
