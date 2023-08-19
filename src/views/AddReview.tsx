import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { getReviewProps } from "../interface/product.interface";
import { addReview } from "../constants/message";
import AddReviewPopup from "./AddReviewPopup";
import "../styles/Dashboard.scss";

const AddReview: React.FC<getReviewProps> = ({ getReview, commentNum }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [, setValue] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };
  const handleValueReceived = (value: boolean) => {
    setValue(value);
  };

  return (
    <Grid className="common--padding">
      <Grid container>
        <Grid item>
          <Button onClick={openModal}>
            {addReview.addReview}
          </Button>
        </Grid>
        <AddReviewPopup
          isOpen={isModalOpen}
          onClose={onClose}
          getValue={handleValueReceived}
          addReview={getReview}
          commentNum={commentNum}
        />
      </Grid>
    </Grid>
  );
};

export default AddReview;
