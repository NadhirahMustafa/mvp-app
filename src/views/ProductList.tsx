import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { RootState } from "../reducers/rootReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Grid, Button } from "@mui/material";
import { ProductListProps } from "../interface/product.interface";
import { router } from "../constants/constants";
import { common } from "../constants/message";
import "../styles/Dashboard.scss";


const ProductList: React.FC<ProductListProps> = ({ viewType, data }) => {
  const navigate = useNavigate();

  const onClickCell = (c: any) => {
    navigate(router.DETAILS, { state: { id: c.id, product: c } });
  };

  return (
    <Grid>
      <Grid className="common--card-arr">
        {data.products.map((item: any, index: any) => (
          <Grid
            key={index}
            className={
              viewType !== 'GRID'
                ? "product-list--card-grid product-list--card-layout"
                : "common--card-list product-list--card-layout"
            }
          >
            <Button className="product-list--center-button" onClick={() => onClickCell(item)} key={index}>
              <Grid>
                <LazyLoadImage
                  className="common--fade-in"
                  src={item.thumbnail}
                  width={100}
                  height={100}
                  alt={`${common.imageAlt} + ${item.title}`}
                />
                <Grid className="product-list--item-title">{item.title}</Grid>
              </Grid>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};


const mapStateToProps = (state: RootState) => ({
  data: state.data.data,
  viewType: state.view.viewType,
});

export default connect(mapStateToProps)(ProductList);
