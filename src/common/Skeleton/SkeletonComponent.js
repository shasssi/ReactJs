import React, { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import useStyles from "./Skeleton.style";

export default function Variants() {
  const classes = useStyles();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  
  return (
    <Grid container className={classes.skeletonContainer}>
      <Stack spacing={1} className={classes.stack}>
        <Skeleton variant="text" className={classes.heading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="rounded" className={classes.rondedRectangle} />
      </Stack>
      <Stack spacing={1} className={classes.stack}>
        <Skeleton variant="text" className={classes.heading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="rounded" className={classes.rondedRectangle} />
      </Stack>
      <Stack spacing={1} className={classes.stack}>
        <Skeleton variant="text" className={classes.heading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="rounded" className={classes.rondedRectangle} />
      </Stack>
      <Stack spacing={1} className={classes.stack}>
        <Skeleton variant="text" className={classes.heading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="text" className={classes.subHeading} />
        <Skeleton variant="rounded" className={classes.rondedRectangle} />
      </Stack>
    </Grid>
  );
}
