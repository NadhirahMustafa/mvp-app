import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "react-modal";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../reducers/rootReducer";
import { Grid, TextField, Button } from "@mui/material";
import { addReviewApi } from "../services/Api.services";
import { ReviewPopupProps, commentsDataInterface } from "../interface/product.interface";
import { common, addReviewPopup } from "../constants/message";
import { router } from "../constants/constants";
import "../styles/Dashboard.scss";

Modal.setAppElement("#root");

const AddReviewPopup: React.FC<ReviewPopupProps> = ({
  isOpen,
  onClose,
  getValue,
  addReview,
  currentUser
}) => {
  const [inputReview, setInputReview] = useState("");
  const handleCancelButton = () => {
    onClose();
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleAddReview = async () => {
    try {
      let res = await addReviewApi(inputReview, currentUser.id);
      let userRes: commentsDataInterface = {
        id: res.id,
        body: res.body,
        postId: 3,
        user: {
          id: res.user.id,
          username: res.user.username,
        },
      };
      addReview(userRes);
      alert(addReviewPopup.alertMessage);
      navigate(router.DETAILS);
      onClose();
    } catch (error) {
      alert(addReviewPopup.errorMessage);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={common.popupLabel}
      className="common--modal-width"
    >
      <Grid className="common--padding">
        <Grid>
          <Grid className="common--modal-title">
            {addReviewPopup.reviewMessage}
          </Grid>
          <Grid className="common--form">
            <Grid >
              {addReviewPopup.writeReview}
            </Grid>
            <Grid>
              <TextField
                type="textarea"
                value={inputReview}
                onChange={(e) => setInputReview(e.target.value)}
                placeholder={addReviewPopup.reviewPlaceholder}
                size="small"
                multiline
                className="addReviewPopup--textfield"
              />
            </Grid>
          </Grid>

          <Grid container className="common--modal-button">
            <Grid item>
              <Button onClick={handleAddReview}>{addReviewPopup.submit}</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleCancelButton}>
                {addReviewPopup.cancel}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.currentUser.user,
});

export default connect(mapStateToProps)(AddReviewPopup);
