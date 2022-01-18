import React from "react";
import { FinalCalculationNameAndAmount } from "./SummaryModal.style";
import madaIcon from "../../../assets/mada-icon.svg";
import Modal from "@mui/material/Modal";
import StarRatings from "react-star-ratings";
import {
  ModalWrapper,
  ProceedButton,
  RowWrapper,
  TopDivWrapperRating,
  CancelButton,
  TextArea,
} from "./SummaryModal.style";

const useGiveRatingModal = () => {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Popup = () => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalWrapper>
            <TopDivWrapperRating>
              <p
                style={{
                  margin: "0px",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "25px",
                }}
              >
                How was your experience? Share your thoughts with others.
              </p>
              <StarRatings
                rating={rating}
                starRatedColor="#FFBB00"
                changeRating={(newRating) => {
                  setRating(newRating);
                }}
                numberOfStars={5}
                name="rating"
                starDimension="45px"
                starEmptyColor="#E6E6E6"
                starHoverColor="#FFBB00"
              />
            </TopDivWrapperRating>
            <div>
              <TextArea
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                  border: "2px solid #E7E7E7 ",
                  padding: "20px 20px",
                }}
              ></TextArea>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ProceedButton
                  style={{ alignSelf: "center" }}
                  onClick={handleClose}
                >
                  Save
                </ProceedButton>
                <CancelButton
                  style={{ alignSelf: "center" }}
                  onClick={handleClose}
                >
                  Cancel
                </CancelButton>
              </div>
            </div>
          </ModalWrapper>
        </Modal>
      </div>
    );
  };

  return { handleOpen, Popup };
};

export default useGiveRatingModal;
