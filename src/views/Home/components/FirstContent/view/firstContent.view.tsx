import Icon1 from "../../../../../assets/img/icons/hrms.svg";
import Icon2 from "../../../../../assets/img/icons/accounting.svg";
import { CustomCardController } from "../../../../../components/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import {
  KeyFeaturesConstants,
  KeyModulesConstants,
} from "../../../../../constants/list.constants";
import StringConstants from "../../../../../constants/strings.constants";

const FirstContent = () => {
  return (
    <section className="aboutus mi-bg-light">
      <Container bsPrefix="div" className="container">
        <Container bsPrefix="div" className="display-4 text-center">
          {StringConstants.contentTitle}
        </Container>
        <Row className="row">
          <Col className="col-lg-6">
            <CustomCardController
              title={StringConstants.contentModuleTitle}
              body={StringConstants.contentModuleBody}
              listTitle={StringConstants.contentModuleListTitle}
              listItems={KeyModulesConstants}
              anchor={true}
              icon={Icon1}
            ></CustomCardController>
          </Col>
          <Col className="col-lg-6">
            <CustomCardController
              title={StringConstants.contentFeatureTitle}
              body={StringConstants.contentFeatureBody}
              listTitle={StringConstants.contentFeatureListTitle}
              listItems={KeyFeaturesConstants}
              icon={Icon2}
            ></CustomCardController>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstContent;
