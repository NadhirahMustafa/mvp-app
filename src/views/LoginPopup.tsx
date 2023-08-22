import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { RootState } from "../reducers/rootReducer";
import { toggleLogin } from "../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "react-modal";
import { Grid, TextField, Button } from "@mui/material";
import { getUser } from "../services/Api.services";
import {
  LoginPopupProps,
  CredentialInterface,
  userInterface,
} from "../interface/product.interface";
import { common, loginPopup } from "../constants/message";
import { router } from "../constants/constants";
import "../styles/Dashboard.scss";

Modal.setAppElement("#root");

const LoginPopup: React.FC<LoginPopupProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  toggleLogin
}) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [credential, setCredential] = useState<userInterface>({
    limit: 0,
    users: [],
    skip: 0,
    total: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const fetchList = async () => {
    let res = await getUser();
    if (res) {
      setCredential(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
  }, [isLoggedIn]);

  const handleLogin = () => {
    const compareUserData = credential.users.find(
      (x: CredentialInterface) => x.username === inputUsername && x.password === inputPassword
    );
    if (compareUserData) {     
      toggleLogin();
      navigate(router.DETAILS, {
        state: {
          id: location.state.id,
          product: location.state.product,
          userDetails: compareUserData,
        },
      });
      onClose();
    } else {
      alert(loginPopup.errorMessage);
      onClose();
    }
  };

  const handleCancelButton = () => {
    onClose();
  };

  const renderLoginForm = (
    <Grid>
      <Grid className="common--modal-title">
        <Grid className="loginPopup--login-title-emphasize"><i>{loginPopup.loginTitle}</i></Grid>
        <Grid>{loginPopup.loginMessage}</Grid>
      </Grid>
      <Grid item>
        <Grid container className="common--form">
          <Grid item xs={6} className="common--align-right">
            {loginPopup.username}
          </Grid>
          <Grid item xs={6} className="common--align-left">
            <TextField
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder={loginPopup.usernamePlaceholder}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container className="common--form">
          <Grid item xs={6} className="common--align-right">
            {loginPopup.password}
          </Grid>
          <Grid item xs={6} className="common--align-left">
            <TextField
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder={loginPopup.passwordPlaceholder}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const renderButton = (
    <Grid container className="common--modal-button">
      <Grid item>
        <Button onClick={handleLogin}>{loginPopup.login}</Button>
      </Grid>
      <Grid item>
        <Button onClick={handleCancelButton}>{loginPopup.cancel}</Button>
      </Grid>
    </Grid>
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={common.popupLabel}
      className="common--modal-width"
    >
      <Grid className="common--padding">
        <Grid className="loginPopup--justify">
          <Grid>{renderLoginForm}</Grid>
          <Grid>{renderButton}</Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = {
  toggleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
