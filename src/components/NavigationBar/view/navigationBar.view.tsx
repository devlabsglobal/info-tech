import BrandLogo from "../../../assets/img/brand.png";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {
  AccountingConstants,
  BioMetricSystemConstants,
  ClientsAndStoriesConstants,
  HRMSProductsConstants,
  OurCompanyConstants,
  PayRolOutSourcingConstants,
} from "../../../constants/list.constants";

// Import Constants
import Languages from "../../../constants/language.constants";
import Countries from "../../../constants/country.constants";
import StringConstants from "../../../constants/strings.constants";

const NavigationBarView = (props: any) => {
  const { setLanguage, selectedLanguage, selectedCountry, setCountry } = props;

  return (
    <Container>
      <nav className="navbar navbar-expand-lg">
        <Navbar.Brand className="navbar-brand" href="/#" title="Info-Tech">
          <img
            src={BrandLogo}
            width="110px"
            height="39px"
            alt="Info-Tech Logo"
          />
        </Navbar.Brand>
        <ButtonGroup className="btn-group mi-mobi-country">
          <Container
            bsPrefix="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={selectedCountry} alt="Singapore" />
          </Container>
          <Container
            bsPrefix="div"
            className="dropdown-menu dropdown-menu-right"
          >
            {Countries.map((item, index) => {
              if (selectedCountry != item.flag) {
                return (
                  <DropdownItem
                    key={index}
                    className="dropdown-item"
                    onClick={() => setCountry(item.flag)}
                    title={item.country}
                  >
                    <img src={item.flag} alt={item.country} />
                    {item.country}
                  </DropdownItem>
                );
              }
            })}
          </Container>
        </ButtonGroup>
        <Container
          bsPrefix="Button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Container>
        <Navbar.Collapse
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ListGroup bsPrefix="ul" className="navbar-nav">
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Nav.Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                title="Our Products"
              >
                {StringConstants.navBarOurProducts}
              </Nav.Link>
              <Container bsPrefix="div" className="dropdown-menu">
                <Container bsPrefix="div" className="mi-products-items">
                  <Row className="row">
                    <Col className="col">
                      <Container bsPrefix="div" className="mi-nav-group">
                        <h4>{StringConstants.navBarHRMSProducts}</h4>
                        <>
                          {HRMSProductsConstants.map((item, index) => {
                            return (
                              <DropdownItem
                                key={index}
                                className="dropdown-item"
                                href=""
                                title="HRMS All-in-one Software"
                              >
                                {item}
                              </DropdownItem>
                            );
                          })}
                        </>
                      </Container>
                    </Col>
                    <Col className="col">
                      <Container bsPrefix="div" className="mi-nav-group">
                        <h4>{StringConstants.navBarAccounting}</h4>
                        <>
                          {AccountingConstants.map((item, index) => {
                            return (
                              <DropdownItem
                                key={index}
                                className="dropdown-item"
                                href="/#"
                                title="Accounting Software"
                              >
                                {item}
                              </DropdownItem>
                            );
                          })}
                        </>
                      </Container>
                      <Container bsPrefix="div" className="mi-nav-group">
                        <h4>{StringConstants.navBarBiometricSystems}</h4>
                        <>
                          {BioMetricSystemConstants.map((item, index) => {
                            return (
                              <DropdownItem
                                key={index}
                                className="dropdown-item"
                                href="/#"
                                title="Biometric Devices"
                              >
                                {item}
                              </DropdownItem>
                            );
                          })}
                        </>
                      </Container>
                      <Container bsPrefix="div" className="mi-nav-group">
                        <h4>{StringConstants.navBarPayrollOutsourcing}</h4>
                        <>
                          {PayRolOutSourcingConstants.map((item, index) => {
                            return (
                              <DropdownItem
                                key={index}
                                className="dropdown-item"
                                href="/#"
                                title="Payroll Outsourcing"
                              >
                                {item}
                              </DropdownItem>
                            );
                          })}
                        </>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Nav.Link className="nav-link" href="/#" title="Grants">
                {StringConstants.navBarGrants}
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Nav.Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                title="Clients"
              >
                {StringConstants.navBarClients}
              </Nav.Link>
              <Container bsPrefix="div" className="dropdown-menu">
                {ClientsAndStoriesConstants.map((item, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      className="dropdown-item"
                      href=""
                      title="Clientele"
                    >
                      {item}
                    </DropdownItem>
                  );
                })}
              </Container>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Nav.Link className="nav-link" href="" title="Get in Touch">
                {StringConstants.navBarContactUs}
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Nav.Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                title="More"
              >
                {StringConstants.navBarMore}
              </Nav.Link>
              <div className="dropdown-menu">
                {OurCompanyConstants.map((item, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      className="dropdown-item"
                      href=""
                      title={item}
                    >
                      {item}
                    </DropdownItem>
                  );
                })}
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup
            bsPrefix="ul"
            className="navbar-nav align-items-center nav-right ml-auto mb-4 mb-lg-0"
          >
            <ListGroup.Item bsPrefix="li" className="nav-item">
              <Button href="/#" bsPrefix="btn mi-btn-primary" title="Login">
                {StringConstants.navBarLogin}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="li" className="nav-item mi-language">
              <Nav.Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                title="Country"
              >
                {selectedLanguage}
              </Nav.Link>
              <Container
                bsPrefix="div"
                className="dropdown-menu dropdown-menu-right"
              >
                {Languages.map((item, index) => {
                  if (selectedLanguage != item) {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => setLanguage(item)}
                        className="dropdown-item"
                        href=""
                        title={item}
                      >
                        {item}
                      </DropdownItem>
                    );
                  }
                })}
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Navbar.Collapse>
      </nav>
    </Container>
  );
};

export default NavigationBarView;
