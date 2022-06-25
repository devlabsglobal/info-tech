import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  ModalBody,
  ModalDialog,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import StringConstants from "../../../constants/strings.constants";

const EnquireNowPopupView = () => {
  return (
    <div className="modal fade" id="enquireModal" role="dialog">
      <ModalDialog className="modal-dialog" bsPrefix={"modal-dialog-centered"}>
        <Container bsPrefix={"modal-content"}>
          <ModalHeader className="modal-header">
            <ModalTitle as={"h4"}>{StringConstants.popupModalTitle}</ModalTitle>
            <Button bsPrefix={"close"} type="button" data-bs-dismiss="modal">
              &times;
            </Button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <Form className="mi-contact-form">
              <FormGroup className="form-group mb-3">
                <FormLabel>
                  {StringConstants.popupModalCompanyNameLabel}
                </FormLabel>
                <FormControl
                  type="text"
                  id="txtCompanyName"
                  className="form-control required"
                  placeholder={StringConstants.popupModalCompanyNameLabel}
                />
              </FormGroup>
              <FormGroup className="form-group mb-3">
                <FormLabel htmlFor="inputEmail4">
                  {StringConstants.popupModalContactNameLabel}
                </FormLabel>
                <FormControl
                  type="text"
                  id="txtContactName"
                  className="form-control required"
                  placeholder={StringConstants.popupModalContactNameLabel}
                />
              </FormGroup>
              <FormGroup className="form-group mb-3">
                <FormLabel>
                  {StringConstants.popupModalContactNumberLabel}
                </FormLabel>
                <FormControl
                  type="text"
                  id="txtContactNumber"
                  className="form-control required"
                  minLength={8}
                  placeholder={StringConstants.popupModalContactNumberLabel}
                />
              </FormGroup>
              <FormGroup className="form-group mb-3">
                <FormLabel htmlFor="inputEmail4">
                  {StringConstants.popupModalContactEmailLabel}
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control required email"
                  id="txtContactEmail"
                  placeholder={StringConstants.popupModalContactEmailLabel}
                />
              </FormGroup>
              <FormGroup className="form-group mb-3">
                <FormLabel>{StringConstants.popupModalMessageLabel}</FormLabel>
                <FormControl
                  as={"textarea"}
                  id="txtComments"
                  className="form-control required"
                  placeholder={StringConstants.popupModalMessageHint}
                  rows={6}
                />
              </FormGroup>
              <FormCheck className="form-check mb-5">
                <FormCheckInput
                  type="checkbox"
                  className="form-check-input "
                  id="chkTermsAndCondition"
                />
                <FormCheckLabel
                  className="form-check-label"
                  htmlFor="chkTermsAndCondition"
                >
                  {StringConstants.popupModalCheckBoxText1}{" "}
                  <a href="/#" target="_blank">
                    {StringConstants.checkBoxTextLink}
                  </a>
                  {StringConstants.checkBoxText2}
                </FormCheckLabel>
              </FormCheck>
              <Button bsPrefix="btn mi-btn-warning" type="button">
                {StringConstants.popupModalSendRequestButtonLabel}
              </Button>
            </Form>
          </ModalBody>
        </Container>
      </ModalDialog>
    </div>
  );
};

export default EnquireNowPopupView;
