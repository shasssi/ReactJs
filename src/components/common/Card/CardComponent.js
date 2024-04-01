import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useStyles from "./CardComponent.style";

const CardComponent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { data } = props;

  const handleClick = (componentName) => {
    navigate(`/react/${componentName}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        className={classes.cardImage}
        image={`../../../assets/images/${data?.image}`}
        title={data?.name}
      />
      <CardContent className={classes.cardContent}>
        {data?.name && (
          <Button
            variant="outlined"
            onClick={() => handleClick(data?.componentName)}
            className={classes.button}
            color="secondary"
          >
            {data?.name}
          </Button>
        )}
        <div className={classes.listContainer}>
          <List className={classes.list}>
            {Array.isArray(data?.contents) &&
              data?.contents.map((content) => (
                <ListItem key={content} className={classes.listItem}>
                  {content}
                </ListItem>
              ))}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
