import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import StringConstants from "../../../../../constants/strings.constants";

const ContactFormView = () => {
  return (
    <section className="mi-contact-banner">
      <Container>
        <h1 className="text-center mb-5">
          {StringConstants.contactFormTitle01}
        </h1>
        <Container bsPrefix="div" className="mi-contact-wrapper">
          <Container bsPrefix="div" className="mi-contact-body">
            <Container bsPrefix="div" className="mi-contact-info">
              <h4>{StringConstants.contactFormTitle02}</h4>

              <ListGroup as="ul">
                <ListGroupItem as="li" style={{ border: "none", padding: 0 }}>
                  <i className="icon-pin"></i>
                  <Container bsPrefix="div" className="description">
                    {StringConstants.contactFormAddress01} <br />{" "}
                    {StringConstants.contactFormAddress02}
                  </Container>
                </ListGroupItem>

                <ListGroupItem as="li" style={{ border: "none", padding: 0 }}>
                  <i className="icon-phone"></i>
                  <Container bsPrefix="div" className="description">
                    <a
                      href={StringConstants.contactFormPhoneNumber}
                      title="Phone"
                    >
                      {StringConstants.contactFormPhoneNumber}
                    </a>
                  </Container>
                </ListGroupItem>

                <ListGroupItem as="li" style={{ border: "none", padding: 0 }}>
                  <i className="icon-mail"></i>
                  <Container bsPrefix="div" className="description">
                    <a
                      href={StringConstants.contactFormMailAddress}
                      title="Email"
                    >
                      {StringConstants.contactFormMailAddress}
                    </a>
                  </Container>
                </ListGroupItem>
              </ListGroup>
            </Container>

            <Container bsPrefix="div" className="mi-contact-form-container">
              <Form className="mi-contact-form" id="fcontact">
                <FormGroup className="form-group row">
                  <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>
                      {StringConstants.contactFormCompanyField}
                    </FormLabel>
                    <FormControl
                      type="text"
                      id="txtCompanyName"
                      className="form-control required"
                      placeholder="Company Name"
                    />
                  </Col>
                  <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>
                      {StringConstants.contactFormContactField}
                    </FormLabel>
                    <FormControl
                      type="text"
                      id="txtContactName"
                      className="form-control required"
                      placeholder="Contact Name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup className="form-group row">
                  <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>
                      {StringConstants.contactFormNumberField}
                    </FormLabel>
                    <FormControl
                      type="text"
                      id="txtContactNumber"
                      className="form-control required"
                      placeholder={StringConstants.contactFormNumberField}
                    />
                  </Col>
                  <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>{StringConstants.contactFormPurpose}</FormLabel>
                    <Form.Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                  </Col>
                </FormGroup>

                  <FormGroup className="form-group row">
                    <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>{StringConstants.contactFormPurpose}</FormLabel>
                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="radio"
                        className="form-check-input "
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        defaultChecked
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Default radio
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="radio"
                        className="form-check-input "
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option1"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Second default radio
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="radio"
                        className="form-check-input "
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option1"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="exampleRadios3"
                      >
                        Third default radio
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        id="exampleRadios4"
                        value="option1"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="exampleRadios4"
                      >
                        Four default radio
                      </FormCheckLabel>
                    </FormCheck>

                      <FormCheck className="form-check d-flex align-items-center">
                        <FormCheckInput
                          type="radio"
                          className="form-check-input"
                          name="exampleRadios"
                          id="exampleRadios5"
                          value="option1"
                        />
                        <FormCheckLabel
                          className="form-check-label"
                          htmlFor="exampleRadios5"
                        >
                          Five default radio
                        </FormCheckLabel>
                      </FormCheck>
                    </Col>

                  <Col bsPrefix="col-sm-6 mb-4">
                    <FormLabel>{StringConstants.contactFormPurpose}</FormLabel>
                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="checkbox"
                        className="form-check-input"
                        id="inlineCheckbox1"
                        defaultChecked
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Default Chckbox
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="checkbox"
                        className="form-check-input"
                        id="inlineCheckbox2"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        Second default Chckbox
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="checkbox"
                        className="form-check-input"
                        id="inlineCheckbox3"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        Third default Chckbox
                      </FormCheckLabel>
                    </FormCheck>

                    <FormCheck className="form-check d-flex align-items-center mb-2">
                      <FormCheckInput
                        type="checkbox"
                        className="form-check-input"
                        id="inlineCheckbox4"
                      />
                      <FormCheckLabel
                        className="form-check-label"
                        htmlFor="inlineCheckbox4"
                      >
                        Four default Chckbox
                      </FormCheckLabel>
                    </FormCheck>

                      <FormCheck className="form-check d-flex align-items-center">
                        <FormCheckInput
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox5"
                        />
                        <FormCheckLabel
                          className="form-check-label"
                          htmlFor="inlineCheckbox5"
                        >
                          Five default Chckbox
                        </FormCheckLabel>
                      </FormCheck>
                    </Col>
                  </FormGroup>

                  <FormGroup className="form-group mb-3">
                    <FormLabel>Message</FormLabel>
                    <FormControl
                      as="textarea"
                      placeholder={'Type your message here'}
                      rows={6}
                    />
                  </FormGroup>

                <FormGroup className="form-check mb-5">
                  <Form.Check aria-label="option 1" />
                  <FormLabel className="form-check-label">
                    {StringConstants.contactFormPolicy01}{" "}
                    <a href="/#">{StringConstants.contactFormPolicyLink}</a>
                    {StringConstants.contactFormPolicy02}
                  </FormLabel>
                </FormGroup>

                <Button bsPrefix="btn mi-btn-warning" type="button">
                  Send Request
                </Button>
              </Form>
            </Container>
          </Container>
          <Container bsPrefix="mi-contact-footer">
            {StringConstants.contactFormFooter01}{" "}
            <a href="/#" title=" to HRMS Portal">
              {StringConstants.contactFormFooterLink}
            </a>{" "}
            {StringConstants.contactFormFooter02}
          </Container>
        </Container>
      </Container>
    </section>
  );
};

export default ContactFormView;
