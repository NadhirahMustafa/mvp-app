import React, { useState } from "react";
import "../styles/Dashboard.scss";
import { Grid, Button } from "@mui/material";
import { login } from "../constants/message";
import LoginPopup from "./LoginPopup";

const Login: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
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
        />
      </Grid>
    </Grid>
  );
};

export default Login;
