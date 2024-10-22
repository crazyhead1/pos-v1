import React, { useEffect, useMemo, useState } from "react";
import { Col, Collapse, Nav, Row, Tab } from "react-bootstrap";
import { POSEngine } from "../pos-engine";
import { useStylesFromThemeFunction, ComponentProps } from "./AppLayout";
import Inventory from "../inventory";
import Users from "../users";
import Order from "../order";
import Setting from "../setting";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../auth/login";
import ResetPassword from "../auth/reset-password";
import Signup from "../auth/signup";
import VerifyEmail from "../auth/verify-email";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/cloud";
import { LOGIN_PATH } from "../common/constants";
import {
  isAdmin,
  isAuthenticated,
  isOrganisation,
  setOrganisationInLocalStorage,
} from "../../utils/utilFunctions";
import Organisation from "../organisation";
import { getAllAdmins } from "../../parser/admins";
import { getAllOrganisations } from "../../parser/organisation";
import { getAllEmployees } from "../../parser/employee";
import { Icons } from "../common/icons/Icons";
import { Box } from "@mui/material";

const windowHeight = window.innerHeight;

const AppLayout: React.FC<ComponentProps> = () => {
  const classes = useStylesFromThemeFunction();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [, setCurrentUser] = useState({} as any);
  const [admins, setAdmins] = useState([] as string[]);
  const [organisations, setOrganisations] = useState([] as any[]);

  const isAdminLogin = useMemo(() => isAdmin(admins), [admins]);

  const isOrganisationLogin = useMemo(
    () => isOrganisation(organisations),
    [organisations]
  );

  useEffect(() => {
    if (isOrganisationLogin) {
      const currentUserEmail = localStorage.getItem("email");
      const foundOrg =
        currentUserEmail &&
        organisations?.find((item) => item?.email === currentUserEmail)
          ? currentUserEmail
          : null;
      console.log({ foundOrg });
      if (foundOrg) setOrganisationInLocalStorage(foundOrg);
    }
  }, [isOrganisationLogin]);

  useEffect(() => {
    onAuthStateChanged(auth.getInstance(), (user) => {
      setCurrentUser(user);
    });

    if (!isAuthenticated()) {
      setShowSidebar(false);
      navigate(LOGIN_PATH);
    } else {
      setShowSidebar(true);
      getAllAdmins()
        .then((res) => {
          setAdmins(res?.[0].admins || []);
        })
        .catch((error) => console.log({ error }));
      getAllOrganisations()
        .then((res) => {
          setOrganisations(res || []);
        })
        .catch((error) => console.log({ error }));
      getAllEmployees()
        .then((res) => {
          const foundEmployee = res?.find(
            (item) => item.email === localStorage.getItem("email")
          );
          console.log({ res, foundEmployee });
          if (foundEmployee) {
            localStorage.setItem("org", foundEmployee.organisation ?? "admin");
          }
        })
        .catch((error) => console.log({ error }));
      if (window.location.pathname === "/") {
        navigate("/organization/pos");
        // history.replace(isAdmin ? '/admin/members' : '/provider/members');
      }
    }
  }, []);

  const handleTabClick = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <>
      {
        <Tab.Container defaultActiveKey="pos">
          <Row>
            {isAuthenticated() && (
              <Col sm={3}>
                <Box
                  className={`${
                    showSidebar
                      ? classes.tabsWithSidebar
                      : isAuthenticated()
                      ? classes.tabs
                      : classes.tabsOnAuth
                  }`}
                  style={{ height: windowHeight - 50 }}
                >
                  <Box className={classes.tabsStyle}>
                    <Collapse in={showSidebar}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item className={classes.link}>
                          <Nav.Link
                            eventKey="pos"
                            active={
                              window.location.pathname === "/organization/pos"
                            }
                            className={classes.link}
                            onClick={(e) =>
                              handleTabClick(e, "/organization/pos")
                            }
                          >
                            <Box className={classes.link}>
                              <i className="bx bx-desktop"></i> POS
                            </Box>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="inventory"
                            active={
                              window.location.pathname ===
                              "/organization/inventory"
                            }
                            onClick={(e) =>
                              handleTabClick(e, "/organization/inventory")
                            }
                          >
                            <Box className={classes.link}>
                              <i className="bx bxs-package"></i> Inventory
                            </Box>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="orders"
                            active={
                              window.location.pathname ===
                              "/organization/orders"
                            }
                            onClick={(e) =>
                              handleTabClick(e, "/organization/orders")
                            }
                          >
                            <Box className={classes.link}>
                              <i className="bx bxs-cart"></i> Orders
                            </Box>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="users"
                            active={
                              window.location.pathname === "/organization/users"
                            }
                            onClick={(e) =>
                              handleTabClick(e, "/organization/users")
                            }
                          >
                            <Box className={classes.link}>
                              <i className="bx bxs-group"></i> Users
                            </Box>
                          </Nav.Link>
                        </Nav.Item>

                        {isAdminLogin && (
                          <Nav.Item>
                            <Nav.Link
                              eventKey="organization"
                              active={
                                window.location.pathname ===
                                "/admin/organization"
                              }
                              onClick={(e) =>
                                handleTabClick(e, "/admin/organization")
                              }
                            >
                              <Box className={classes.link}>
                                <i className="bx bxs-brightness"></i>{" "}
                                Organization
                              </Box>
                            </Nav.Link>
                          </Nav.Item>
                        )}
                        <Nav.Item>
                          <Nav.Link
                            eventKey="settings"
                            active={
                              window.location.pathname ===
                              "/organization/settings"
                            }
                            onClick={(e) =>
                              handleTabClick(e, "/organization/settings")
                            }
                          >
                            <Box className={classes.link}>
                              <i className="bx bxs-brightness"></i> Settings
                            </Box>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Collapse>
                  </Box>
                  <h2
                    onClick={() => setShowSidebar(!showSidebar)}
                    className={classes.SidebarArrow}
                  >
                    <i
                      className={`${
                        showSidebar
                          ? "bx bx-chevron-left"
                          : "bx bx-chevron-right"
                      }`}
                    />
                  </h2>
                </Box>
              </Col>
            )}
            <Col sm={12}>
              <Box
                className={`${
                  showSidebar
                    ? classes.contentPanWithSidebar
                    : isAuthenticated()
                    ? classes.contentPan
                    : classes.contentPanOnAuth
                }`}
              >
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />

                  {/* <Route  */}
                  {isAuthenticated() && (
                    <Route path="/organization/pos" element={<POSEngine />} />
                  )}
                  {isAuthenticated() && (
                    <Route
                      path="/organization/inventory"
                      element={<Inventory />}
                    />
                  )}
                  {isAuthenticated() && (
                    <Route path="/organization/orders" element={<Order />} />
                  )}
                  {isAuthenticated() && (
                    <Route path="/organization/users" element={<Users />} />
                  )}
                  {isAuthenticated() && (
                    <Route
                      path="/organization/settings"
                      element={<Setting />}
                    />
                  )}
                  {isAuthenticated() && isAdminLogin && (
                    <Route
                      path="/admin/organization"
                      element={<Organisation />}
                    />
                  )}
                  <Route
                    path="/"
                    element={!isAuthenticated() ? <Login /> : <POSEngine />}
                  />
                </Routes>
              </Box>
            </Col>
          </Row>
        </Tab.Container>
      }
    </>
  );
};
export default AppLayout;
