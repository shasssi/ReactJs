import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useStyles from "./CardComponent.style";
import { addNavigation } from "../../redux/slice/navigationSlice";

const CardComponent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollPosition = useSelector((store) => store?.scroll);
  const { data } = props;

  useEffect(() => {
    window.scroll(scrollPosition?.x, scrollPosition?.y);
  }, []);

  const handleClick = (item) => {
    navigate(`/react/${item?.componentName}`);
    dispatch(
      addNavigation({
        page: item?.componentName,
        image: item?.image,
        id: item?.id,
      })
    );
  };

  return (
    <Card className={classes.cardContainer} onClick={() => handleClick(data)}>
      <CardMedia
        className={classes.cardImage}
        image={`../../../assets/images/${data?.image}`}
        title={data?.name}
      />
      <CardContent className={classes.cardContent}>
        {data?.name && (
          <Button
            variant="outlined"
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
