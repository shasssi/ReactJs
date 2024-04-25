import React from "react";

export const reduxDefData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Redux</b> &#x2192; is an open source Javascript library for managing
        and centralizing appication state.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; It helps to manage the global state &#x2192; state that is
            needed across many parts of our application.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Redux Flow &#x2192; UI - user clicks on button &#x2192; Button event
            handler will dispatch an <b>Action</b> &#x2192; the request will get
            forwarded to <b>Reducer</b> &#x2192; reducer will update the state
            of <b>Store</b> and the UI will be updated with the latest data.
          </span>
        ),
      },
    ],
  },
];

export const toolkitData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>React Toolkit (RTK)</b> &#x2192; It is a modern way of using Redux.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; RTK uses <b>immer</b> behind the scene &#x2192; we cannot
            read the state directly &#x2192; we use <b>current</b> state to
            check the value in store &#x2192;{" "}
            <b>console.log(current(state));</b>
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            &#x25CF;{" "}
            <b>
              RTK allows to either mutate the existing state or return a new
              state.
            </b>
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            &#x25CF; <b>Store</b> &#x2192; It is a big huge object that is kept
            in a central place.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            &#x25CF; <b>Slices</b> &#x2192; Huge store object can be separated
            into multiple slices. &#x2192; Basically it is a logical separator
            of data inside redux store.
          </span>
        ),
      },
      {
        id: 15,
        content: (
          <span>
            &#x25CF; <b>Action</b> &#x2192; UI event handler will dispatch an
            action. This action is a method present in the reducer.
          </span>
        ),
      },
      {
        id: 16,
        content: (
          <span>
            &#x25CF; <b>Reducer</b> &#x2192; It contains all different type of
            action where the state of the <b>Store</b> gets updated.
          </span>
        ),
      },
      {
        id: 17,
        content: (
          <span>
            &#x25CF; <b>Selector</b> &#x2192; It is used to read the data from
            store inside component.{" "}
          </span>
        ),
      },
    ],
  },
];

export const storeHeading = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Create a Store</b>
      </span>
    ),
    subContent: [],
  },
];

export const storeCode = `import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";

const appStore = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default appStore;`;

export const sliceHeading = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Create a Slice</b>
      </span>
    ),
    subContent: [],
  },
];

export const sliceCode = `import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: [],
  reducers: {
    addNavigation: (state, action) => {
      const index = state?.findIndex(
        (obj) => obj?.page === action?.payload?.page
      );
      if (index === -1) {
        state.push({
          ...action.payload,
        });
      }
    },
    deleteLastItem: (state, action) => {
      state?.length !== 0 && state.pop();
    },
  },
});

export const { addNavigation, deleteLastItem } = navigationSlice.actions;

export default navigationSlice.reducer;`;

export const useSelectorHeading = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useSelector Hook </b>is provided by "react-redux" library. This
        library helps to build a connection between Redux Store & React
        Component.
      </span>
    ),
    subContent: [],
  },
];

export const useSelectorCode = `import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./bookmark.style";
import CardMedia from "@mui/material/CardMedia";

export default function BookmarkComponent() {
  const bookMarkList = useSelector((store) => store?.navigation);
  const bookMarkRef = useRef();
  const classes = useStyles();
  const isBookmarkData = bookMarkList?.length !== 0;

  return (
    <div className={classes.container} ref={bookMarkRef}>
      {isBookmarkData &&
        bookMarkList?.map((obj) => (
          <CardMedia
            key={obj?.id}
            className={classes.image}
            image={"../../assets/images/" + obj?.image}
          />
        ))}
      {!isBookmarkData && (
        <p className={classes.noContent}>No content visited</p>
      )}
    </div>
  );
}`;
