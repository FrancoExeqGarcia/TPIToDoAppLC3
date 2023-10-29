import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
//import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import { APIContext } from "../services/apiContext/ApiContext";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";

const Dashboard = () => {
  const { handleLogout, user } = useContext(AuthenticationContext);
  const { toggleLoading } = useContext(APIContext);

  const username = user.email.split("@")[0];

  const handleLogoutInDashboard = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h4>Hola {username}!</h4>
        </Col>
        <Col>
          <ToggleTheme />
        </Col>
        <Col className="d-flex justify-content-end mx-4 py-2">
          <Button onClick={handleLogoutInDashboard}>Cerrar sesión</Button>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
