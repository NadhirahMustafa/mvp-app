import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { RootState } from "../reducers/rootReducer";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { getComments } from "../services/Api.services";
import {
  commentResultInterface,
  commentsDataInterface,
  LoginProps,
} from "../interface/product.interface";
import { detailsProduct, common, landing } from "../constants/message";
import { currency, router } from "../constants/constants";
import Login from "./Login";
import AddReview from "./AddReview";
import "../styles/Dashboard.scss";

const ProductDetailsPage: React.FC<LoginProps> = ({ isLoggedIn, selectedData, currentUser }) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState<commentResultInterface>({
    comments: [],
    limit: 0,
    skip: 0,
    total: 0,
  });
  const fetchComments = async () => {
    let res = await getComments();
    if (res) {
      setComments(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const getReview = (x: commentsDataInterface) => {
    comments.comments.unshift(x);
  };

  const handleBack = () => {
    navigate(router.HOME);
  };

  const renderTopButton = (
    <Grid container className="details--justify">
      <Button onClick={handleBack}>{detailsProduct.back}</Button>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <AddReview commentNum={comments.total} getReview={getReview} />
      )}
    </Grid>
  );

  const renderProductDetails = (
    <Grid container className="details--padding-top">
      <Grid
        item
        xs={6}
        className="details--justify details--space-around details--left-items"
      >
        {selectedData.images.map((i: string, imgIndex: number) => (
          <img
            className="common--fade-in details--image"
            src={i}
            width={100}
            key={imgIndex}
            alt={`${common.imageAlt} + ${selectedData.title}`}
          />
        ))}
      </Grid>

      <Grid item xs={6} className="details--padding-left">
        <Grid>
          <Grid className="details--emphasize">
            {selectedData.title}
          </Grid>
          <Grid className="details--detail-text">
            {selectedData.description}
          </Grid>
          <Grid container>
            <Grid item className="details--emphasize details--padding-right">
              {`${currency.MY}
                ${(
                  (selectedData.price *
                    (100 - selectedData.discountPercentage)) /
                  100
                ).toFixed(2)}`}
            </Grid>
            <Grid
              item
              className="details--detail-text details--strikethrough details--padding-right"
            >
              {`${currency.MY}
                ${selectedData.price}`}
            </Grid>
            <Grid item className="details--detail-text details--discount-font">
              {selectedData.discountPercentage}
              {detailsProduct.off}
            </Grid>
          </Grid>
          <Grid className="details--detail-text">
            <b>{detailsProduct.stock}</b>
            {selectedData.stock}
          </Grid>
          <Grid className="details--detail-text">
            <b>{detailsProduct.rating}</b>
            {selectedData.rating}
          </Grid>
          <Grid container className="details--detail-text">
            <Grid item className="details--padding-right">
              <b>{detailsProduct.category}</b>
            </Grid>
            <Grid item className="details--text-transform">
              {selectedData.category}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const renderReviewSection = (
    <Grid>
      <Grid className="details--padding-top">
        <Grid className="details--emphasize">
          <i>{detailsProduct.review}</i>
        </Grid>
        {comments.comments.map((cmt: commentsDataInterface, index: number) => (
          <Grid key={index} className="details--border">
            <Grid className="details--detail-text">
              <i>{`${cmt.user.username}:`}</i>
            </Grid>
            <Grid className="details--detail-text">{cmt.body}</Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Grid>
      <Grid className="common--padding common--margin-bottom">
        {renderTopButton}
        {renderProductDetails}
        <Grid className="details--divider" />
        {renderReviewSection}
      </Grid>
      <Grid className="common--footer">{landing.footer}</Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.login.isLoggedIn,
  selectedData: state.selectedData.selectedData,
  currentUser: state.currentUser.user,
});

export default connect(mapStateToProps)(ProductDetailsPage);
