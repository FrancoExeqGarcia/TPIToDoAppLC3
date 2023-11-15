// Dashboard.jsx
import React, { useContext } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import Todos from "../todos/Todos";
import ComboLanguage from "../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

const Dashboard = () => {
  const { handleLogout, user } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const translate = useTranslation();

  const username = user.email.split("@")[0];

  const handleLogoutInDashboard = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <Container fluid>
      <Navbar bg="light" variant="light" className="d-flex align-items-center">
        <Navbar.Brand>TASK MINDER</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mr-4 ms-auto me-auto">
          {translate("hi")} {username}!
          </Navbar.Text>
          <ToggleTheme />
          <Button
            variant="outline-primary"
            className="ml-2 mt-2 mt-md-0"
            onClick={handleLogoutInDashboard}
          >
            {translate("sign_off")} 
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <ComboLanguage />
      <Row>
        <Col xs={12} className="text-center mt-4">
          <Todos />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
