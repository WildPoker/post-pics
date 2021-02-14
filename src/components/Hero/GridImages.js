import React, { useState } from "react";
import useStyles from "./styles";
import { useAuth } from "../../contexts/Authcontext";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

const GridImages = () => {
  const classes = useStyles();
  const { docs } = useAuth();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ flexGrow: 1 }}
      >
        {docs &&
          docs.map((doc) => {
            return (
              <Grid item lg={3} md={4} xs={12} className={classes.gridRoot}>
                <div>
                  <Card className={classes.cardRoot}>
                    <CardHeader title={doc.title} />
                    <CardMedia
                      className={classes.media}
                      image={doc.url}
                      title={doc.title}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {doc.content.substring(0, 100) + " ..."}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <Button className={classes.button}>View</Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default GridImages;
