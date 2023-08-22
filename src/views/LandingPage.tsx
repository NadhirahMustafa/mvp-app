import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { RootState } from "../reducers/rootReducer";
import { Grid, Button } from "@mui/material";
import { getAllProducts } from "../services/Api.services";
import { setData, setView } from "../redux/actions";
import { viewProps } from "../interface/product.interface";
import { landing, common } from "../constants/message";
import ProductList from "./ProductList";
import CommunityNews from "./CommunityNews";
import "../styles/Dashboard.scss";

const LandingPage: React.FC<viewProps> = ({ viewType, setView }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchList = async () => {
    let res = await getAllProducts();
    if (res) {
      dispatch(setData(res));
      setIsLoading(false);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const renderDataView = () => {
    return (
      <Grid container>
        <Grid item className={"search--button-padding"}>
          <Button className="search--button" onClick={() => setView('LIST')}>
            <p
              className={
                viewType === 'LIST'
                  ? "search--button-active dashboard--small-font"
                  : "dashboard--small-font"
              }
            >
              {landing.list}
            </p>
          </Button>
        </Grid>
        <Grid item>
          <Button className="search--button" onClick={() => setView('GRID')}>
            <p
              className={
                viewType === 'GRID'
                  ? "search--button-active dashboard--small-font"
                  : "dashboard--small-font"
              }
            >
              {landing.grid}
            </p>
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid className="common--margin-bottom">
        <Grid className="landing--page-title">{landing.title}</Grid>
        <Grid container>
          <Grid item xs={10}>
            {renderDataView()}
            {!isLoading && <ProductList />}
          </Grid>
          <Grid item xs={2}>
            <CommunityNews />
          </Grid>
        </Grid>
      </Grid>

      <Grid className="common--footer">{landing.footer}</Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  viewType: state.view.viewType,
});

const mapDispatchToProps = {
  setView,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
