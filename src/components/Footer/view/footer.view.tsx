import { Col, Container, Row, Button, NavLink } from "react-bootstrap";
import {
  ClientsAndStoriesConstants,
  ContactConstants,
  ContactWithUsConstants,
  OurCompanyConstants,
  OurProductsConstants,
} from "../../../constants/list.constants";

// Import Icons
import StringConstants from "../../../constants/strings.constants";

const FooterView = () => {
  return (
    <>
      <Container>
        <Container bsPrefix="div" className="mi-enquire">
          <Container bsPrefix="div" className="display-4 text-white">
            {StringConstants.footerTitle}
            <br />
            {StringConstants.footerSubTitle}
          </Container>
          <Button
            bsPrefix="btn mi-btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#enquireModal"
          >
            {StringConstants.footerButton}
          </Button>
        </Container>
        <Row className="row">
          <Col md={6} lg={3} className="mx-auto mb-4 mb-lg-0">
            <h5 className="mb-3">{StringConstants.navBarOurProducts}</h5>
            <ul className="list-unstyled">
              {OurProductsConstants.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink href="/#" style={{ padding: 0 }} title={item}>
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={6} lg={3} className="mx-auto mb-4 mb-lg-0">
            <h5 className="mb-3">{StringConstants.footerRowOurCompany}</h5>
            <ul className="list-unstyled">
              {OurCompanyConstants.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink href="/#" style={{ padding: 0 }} title={item}>
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={6} lg={3} className="mx-auto mb-4 mb-md-0">
            <h5 className="mb-3">
              {StringConstants.footerRowClientAndStories}
            </h5>
            <ul className="list-unstyled">
              {ClientsAndStoriesConstants.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink href="/#" style={{ padding: 0 }} title={item}>
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={6} lg={3} className="mx-auto">
            <h5 className="mb-3">{StringConstants.footerRowContactUs}</h5>
            <ul className="list-unstyled mi-contact-links mb-5">
              {ContactConstants.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      href="/#"
                      className="text-truncate"
                      style={{ padding: 0 }}
                      title={item.text}
                    >
                      <i className={item.className}></i>
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <h5 className="mb-3">{StringConstants.footerRowConnectWithUs}</h5>
            <ul className="list-unstyled mi-social-links mb-5 mt-4">
              {ContactWithUsConstants.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="/#"
                      target="_blank"
                      title={item.text}
                      style={{ marginRight: 4 }}
                    >
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <h5 className="mb-3">{StringConstants.footerRowLocateUs}</h5>
            <ul className="list-unstyled mi-location mb-5">
              <li>
                <NavLink href="/#" style={{ padding: 0 }}>
                  <i className="icon-pin"></i>
                  <span>{StringConstants.footerLocateAddress}</span>
                </NavLink>
              </li>
            </ul>
            <NavLink
              href="/#"
              className="mi-location-link"
              style={{ padding: 0 }}
            >
              {StringConstants.footerOtherLocationLink}
            </NavLink>
          </Col>
        </Row>
      </Container>
      <section className="mi-copyrights bg-white">
        <Container className="container mi-container">
          <Container bsPrefix="div" className="content">
            <Container bsPrefix="div" className="title">
              {StringConstants.footerCopyRight}
            </Container>
            <Container bsPrefix="div" className="mi-copyrights-link">
              <a href="/#" title="Data Protection Policy">
                {StringConstants.footerPrivacyPolicy}
              </a>
              <a href="/#" title="Terms of Service">
                {StringConstants.footerTermsOfService}
              </a>
              <a href="/#" title="Security White Paper">
                {StringConstants.footerSecurityPaper}
              </a>
            </Container>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default FooterView;
