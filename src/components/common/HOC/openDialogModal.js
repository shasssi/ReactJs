import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useStyles from "./openDialogModal.style";
import Button from "@mui/material/Button";

const dialogModalHOC = (Component) => {
  const DialogModalHOC = () => {
    const [modalData, setModalData] = useState({});
    const classes = useStyles();

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
            <Box className={classes.modalContainer}>
              <Typography id="modal-modal-title" className={classes.header}>
                {modalData?.header}
              </Typography>
              <Typography
                id="modal-modal-description"
                className={classes.content}
              >
                {modalData?.content}
              </Typography>
              <div className={classes.footer}>
                <Button
                  className={classes.cancelButton}
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className={classes.button}
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

export default dialogModalHOC;
