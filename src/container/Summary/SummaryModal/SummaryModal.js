import React, { useState } from "react";
import { FinalCalculationNameAndAmount } from "./SummaryModal.style";
import madaIcon from "../../../assets/mada-icon.svg";
import Modal from "@mui/material/Modal";
import {
  ModalWrapper,
  ProceedButton,
  RowWrapper,
  TopDivWrapper,
} from "./SummaryModal.style";

const useSummaryModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const Popup = (props) => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalWrapper>
            <TopDivWrapper>
              <p
                style={{
                  margin: "0px",
                  color: "#ED702D",
                  fontSize: "20px",
                  fontWeight: "bold",
                  //   marginTop: "10px",
                }}
              >
                Billing Payment Summary
              </p>
              <hr
                style={{
                  backgroundColor: "#A5A5A5",
                  height: "1px",
                  border: "0px",
                  width: "100%",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              ></hr>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Booking amount
                </FinalCalculationNameAndAmount>
                <FinalCalculationNameAndAmount>
                  ريال 3000
                </FinalCalculationNameAndAmount>
              </RowWrapper>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Additional Services
                </FinalCalculationNameAndAmount>
                <FinalCalculationNameAndAmount>
                  ريال 20
                </FinalCalculationNameAndAmount>
              </RowWrapper>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Total Amount
                </FinalCalculationNameAndAmount>
                <FinalCalculationNameAndAmount>
                  30ريال 20
                </FinalCalculationNameAndAmount>
              </RowWrapper>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Deposit Amount
                </FinalCalculationNameAndAmount>
                <FinalCalculationNameAndAmount>
                  906 ريال
                </FinalCalculationNameAndAmount>
              </RowWrapper>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Remaining
                </FinalCalculationNameAndAmount>
                <FinalCalculationNameAndAmount>
                  2114 ريال
                </FinalCalculationNameAndAmount>
              </RowWrapper>
              <RowWrapper>
                <FinalCalculationNameAndAmount>
                  Payment Method
                </FinalCalculationNameAndAmount>
                <div style={{ height: "60px", width: "100px" }}>
                  <img
                    style={{ color: "#707070", height: "100%", width: "100%" }}
                    src={props.paymentMethod ? props.paymentMethod : madaIcon}
                  />
                </div>
              </RowWrapper>
            </TopDivWrapper>
            <div
              style={{
                paddingRight: "50px",
                paddingLeft: "50px",
                paddingTop: "15px",
                paddingBottom: "15px",
                border: "1px solid #E5E5E5",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: "7px",
                    backgroundColor: "#F3F5F9",
                    textAlign: "center",
                    color: "#8B8F9F",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Trans. ID: B314561{" "}
                </div>
                <div
                  style={{
                    borderRadius: "7px",
                    backgroundColor: "#DFF2DD",
                    textAlign: "center",
                    color: "#5DA755",
                    marginLeft: "20px",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                  }}
                >
                  Booking ID: A814
                </div>
              </div>
              <p
                style={{
                  color: "#A5A5A5",
                  fontSize: "16px",
                  margin: "0px",
                  // marginTop: "20px",
                  // marginBottom: "25px",
                }}
              >
                A contract will be sent by email (if you don’t get email
                shortly, check your JunkMail/Spam folder)
              </p>
            </div>
            <ProceedButton
              style={{ alignSelf: "center" }}
              onClick={handleClose}
            >
              Continue
            </ProceedButton>
          </ModalWrapper>
        </Modal>
      </div>
    );
  };

  return { handleOpen, Popup };
};

export default useSummaryModal;
