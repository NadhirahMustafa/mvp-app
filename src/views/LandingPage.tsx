import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Grid, Button } from "@mui/material";
import { getAllProducts } from "../services/Api.services";
import { setData } from "../redux/actions";
import { landing, common } from "../constants/message";
import ProductList from "./ProductList";
import CommunityNews from "./CommunityNews";
import "../styles/Dashboard.scss";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viewType, setViewType] = useState(0);

  const fetchList = async () => {
    let res = await getAllProducts();
    if (res) {
      dispatch(setData(res));
      setIsLoading(false);
      setViewType(2);
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
          <Button className="search--button" onClick={() => setViewType(1)}>
            <p
              className={
                viewType === 1
                  ? "search--button-active dashboard--small-font"
                  : "dashboard--small-font"
              }
            >
              {landing.list}
            </p>
          </Button>
        </Grid>
        <Grid item>
          <Button className="search--button" onClick={() => setViewType(2)}>
            <p
              className={
                viewType === 2
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
            {!isLoading && <ProductList viewType={viewType} />}
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

export default LandingPage;
