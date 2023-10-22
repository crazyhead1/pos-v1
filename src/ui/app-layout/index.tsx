import React, { useEffect, useState } from "react";
import { Col, Collapse, Nav, Row, Tab } from "react-bootstrap";
import { POSEngine } from "../pos-engine";
import { useStylesFromThemeFunction, ComponentProps } from "./AppLayout";
// import "boxicons";
import Inventory from "../inventory";
import Users from "../users";
import Category from "../category";
import SalesRoute from "../sales-route";
import Order from "../order";
import Sales from "../sales";
import Setting from "../setting";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Login from "../auth/login";
import ResetPassword from "../auth/reset-password";
import Signup from "../auth/signup";
import VerifyEmail from "../auth/verify-email";
import { adminRoutes, organizationRoutes } from "./routes";
import { useSelector } from "react-redux";
import history from "../common/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/cloud";

const AppLayout: React.FC<ComponentProps> = () => {
  const classes = useStylesFromThemeFunction();
  const [showSidebar, setShowSidebar] = useState(true);

  const [currentUser, setCurrentUser] = useState({} as any);
  useEffect(() => {
    if (!localStorage.getItem("tkn")) {
      history.push(`/login`);
    }
  }, [localStorage.getItem("tkn")]);

  useEffect(() => {
    onAuthStateChanged(auth.getInstance(), (user) => {
      setCurrentUser(user);
    });
  }, []);

  const isAuthenticated = () => {
    if (!localStorage.getItem("tkn")) {
      return false;
    }
    return true;
  };
  const isAdmin = () => {
    if (!localStorage.getItem("isAdmin")) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup-password" element={<Signup />} />
          <Route path="/verify-password" element={<VerifyEmail />} />

          {/* <Route  */}
          {isAuthenticated() && (
            <>
              {(isAdmin() ? adminRoutes : organizationRoutes).map(
                ({ path, component: Component }) => (
                  <Route path={path} element={<Component />} key={path} />
                )
              )}
            </>
          )}
          <Route path="/" element={isAdmin() ? <></> : <POSEngine />} />
        </Routes>
      </HistoryRouter>

      <Tab.Container defaultActiveKey="pos">
        <Row>
          <Col sm={3}>
            <div
              className={`${
                showSidebar ? classes.tabsWithSidebar : classes.tabs
              }`}
            >
              <div className={classes.tabsStyle}>
                <Collapse in={showSidebar}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className={classes.link}>
                      <Nav.Link eventKey="pos" className={classes.link}>
                        <div className={classes.link}>
                          <i className="bx bx-desktop"></i> POS
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="inventory">
                        <div className={classes.link}>
                          <i className="bx bxs-package"></i> Inventory
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="sales">
                        <div className={classes.link}>
                          <i className="bx bxs-pie-chart-alt-2"></i> Sales
                        </div>
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="orders">
                        <div className={classes.link}>
                          <i className="bx bxs-cart"></i> Orders
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="sales-route">
                        <div className={classes.link}>
                          <i className="bx bxs-map"></i> Sales Route
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="categories">
                        <div className={classes.link}>
                          <i className="bx bxs-category"></i> Categories
                        </div>
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="users">
                        <div className={classes.link}>
                          <i className="bx bxs-group"></i> Users
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings">
                        <div className={classes.link}>
                          <i className="bx bxs-brightness"></i> Settings
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Collapse>
              </div>
              <h2
                onClick={() => setShowSidebar(!showSidebar)}
                className={classes.SidebarArrow}
              >
                <i
                  className={`${
                    showSidebar ? "bx bx-chevron-left" : "bx bx-chevron-right"
                  }`}
                ></i>
              </h2>
            </div>
          </Col>
          <Col sm={12}>
            <div
              className={`${
                showSidebar ? classes.contentPanWithSidebar : classes.contentPan
              }`}
            >
              <Tab.Content>
                <Tab.Pane eventKey="pos">
                  <POSEngine />
                </Tab.Pane>
                <Tab.Pane eventKey="inventory">
                  <Inventory />
                </Tab.Pane>
                {/* <Tab.Pane eventKey="sales">
                  <Sales />
                </Tab.Pane> */}
                <Tab.Pane eventKey="orders">
                  <Order />
                </Tab.Pane>
                {/* <Tab.Pane eventKey="sales-route">
                  <SalesRoute />
                </Tab.Pane>
                <Tab.Pane eventKey="categories">
                  <Category />
                </Tab.Pane> */}
                <Tab.Pane eventKey="users">
                  <Users />
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <Setting />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AppLayout;
