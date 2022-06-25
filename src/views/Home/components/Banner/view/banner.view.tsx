import { Container, Row, Button } from "react-bootstrap";
import BannerHome from "../../../../../assets/img/banners/banner-home.png";
import StringConstants from "../../../../../constants/strings.constants";

const SliderView = () => {
  return (
    <section className="mi-banner mi-home-banner mi-banner-gradient">
      <Container className="container">
        <Container bsPrefix="div" className="mi-banner-container m-auto p-0">
          <Row className="row no-gutters align-items-center">
            <Container bsPrefix="div" className="mi-banner-content">
              <h1 className="text-white">
                <span className="mi-text-warning">
                  {StringConstants.bannerTitle}
                </span>
                <br /> {StringConstants.bannerSubTitle}
              </h1>
              <p className="text-white"> {StringConstants.bannerBody}</p>
              <Button
                bsPrefix="btn mi-btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#enquireModal"
              >
                {StringConstants.bannerButton}
              </Button>
            </Container>
            <Container bsPrefix="div" className="mi-banner-img">
              <img src={BannerHome} alt="Main Banner" />
            </Container>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default SliderView;
