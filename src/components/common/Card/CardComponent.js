import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import useStyles from "./CardComponent.style";

const CardComponent = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        className={classes.cardImage}
        image={`/images/${data?.image}`}
        title="react-topics"
      />
      <CardContent>
        <Button variant="contained">{data?.name}</Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
