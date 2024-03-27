import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useStyles from "./CardComponent.style";

const CardComponent = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        className={classes.cardImage}
        image={`../../../assets/images/${data?.image}`}
        title={data?.name}
      />
      <CardContent>
        {data?.name && (
          <Button variant="contained" className={classes.button}>
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
