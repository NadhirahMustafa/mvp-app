import React, { useState } from "react";
import "../styles/Dashboard.scss";
import { Grid, Button } from "@mui/material";
import { getLoginBoolProps } from "../interface/product.interface";
import { login } from "../constants/message";
import LoginPopup from "./LoginPopup";

const Login: React.FC<getLoginBoolProps> = ({ getLoginBool }) => {
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
    getLoginBool(value);
  };

  return (
    <Grid className="common--padding">
      <Grid container>
        <Grid item>
          <Button onClick={openModal}>
            {login.login}
          </Button>
        </Grid>
        <LoginPopup
          isOpen={isModalOpen}
          onClose={onClose}
          getValue={handleValueReceived}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
