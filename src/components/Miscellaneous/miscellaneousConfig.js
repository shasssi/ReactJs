import React from "react";

export const hocCode = `import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const dialogModalHOC = (Component) => {
  const DialogModalHOC = () => {
    const [modalData, setModalData] = useState({});

    const handleClose = (e, r) => {
      !["backdropClick", "escapeKeyDown"].includes(r) &&
        setModalData({ open: false, header: "", content: "" });
    };

    const openDialogModal = (data) => {
      setModalData(data);
    };

    return (
      <Fragment>
        <Component openDialogModal={openDialogModal} />
        {modalData?.open && (
          <Modal
            open={modalData.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
          >
            <Box>
              <Typography id="modal-modal-title">
                {modalData?.header}
              </Typography>
              <Typography
                id="modal-modal-description"
              >
                {modalData?.content}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                >
                  Ok
                </Button>
              </div>
            </Box>
          </Modal>
        )}
      </Fragment>
    );
  };
  return DialogModalHOC;
};

export default dialogModalHOC;`;

export const componentCode = `import React from "react";
import Logout from "@mui/icons-material/Logout";
import dialogModalHOC from "../../common/HOC/openDialogModal";
import { LOGOUT_CONTENT_TEXT, LOGOUT_HEADER_TEXT } from "../constant";

function HeaderComponent(props) {
  const { openDialogModal } = props;

  const handleLogout = () => {
    openDialogModal({
      open: true,
      header: LOGOUT_HEADER_TEXT,
      content: LOGOUT_CONTENT_TEXT,
    });
  };

  return (
    <div>
      <Logout onClick={handleLogout} />
    </div>
  );
}

export default dialogModalHOC(HeaderComponent);`;

export const hocData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>HOC</b> &#x2192; It is a function that takes a component as an
        argument and returns a new component.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            It adds some extra functonalities to the component and returns it.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            &#x25CF; Below code &#x2192; we created a HOC which attaches the
            dialog modal popup functionalities to the component which we pass as
            an argument.
          </span>
        ),
      },
    ],
  },
];

export const memoData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>React Memo</b> &#x2192; It helps to prevent the unnecessary
        re-rendering of the component even if the props are not changed.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: <span>&#x25CF; It can improve performance.</span>,
      },
      {
        id: 12,
        content: (
          <span>
            &#x25CF; Below code &#x2192; Here in parent component &#x2192; if
            the Increase count button is clicked &#x2192; the count state gets
            updated &#x2192; then parent component will get re-rendered.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            Here if we don't use <b>React memo</b> the child component will also
            gets re-rendered even if the props used in child are not changed.
          </span>
        ),
      },
    ],
  },
];
