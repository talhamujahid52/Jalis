import React from "react";
import ImageUploading from "react-images-uploading";
import addicon from "../../../assets/AddIcon.svg";
import {
  HeadingWrapper,
  AddPhotoTextAndButtonWrapper,
  AddPhotosText,
} from "./ImagesSection.style";
import doneAllIcon from "../../../assets/DoneAll.svg";

const ImagesSection = (props) => {
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <>
      <div
        style={{
          background: "#FFF",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "#F8F9FA",
        }}
      >
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          // maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  width: "100%",
                  justifyContent: "space-between",
                  height: "50px",
                  // border: "1px solid blue",
                }}
              >
                <HeadingWrapper>Add Photos</HeadingWrapper>

                <button
                  style={
                    (isDragging ? { color: "red" } : null,
                    {
                      color: "#ED702D",
                      background: "white",
                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                    })
                  }
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <AddPhotoTextAndButtonWrapper>
                    <AddPhotosText>Add Photos</AddPhotosText>
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        background: "#fdeee5",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={addicon}
                        style={{
                          height: "15px",
                          width: "15px",
                          alignItems: "center",
                        }}
                        alt="logo"
                      />
                    </div>
                  </AddPhotoTextAndButtonWrapper>
                </button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <div
                      style={{
                        position: "relative",
                        // border: "1px solid red",
                        width: "250px",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        src={image.data_url}
                        alt=""
                        width="250px"
                        style={{ borderRadius: "10px" }}
                      />
                      <button
                        style={{
                          borderRadius: "100px",
                          background: "white",
                          // margin: "0px",
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          height: "20px",
                          width: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "none",
                        }}
                        onClick={() => onImageRemove(index)}
                      >
                        <p style={{ margin: "0px" }}> x</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "1px solid #E3E3E3",
            color: "#6F6E71",
            borderRadius: "40px",
          }}
          onClick={props.handleBack}
        >
          BACK
        </button>
        <button
          style={{
            height: "50px",
            width: "170px",
            backgroundColor: "#ED702D",
            border: "0px",
            color: "white",
            borderRadius: "40px",
          }}
          type="submit"
          onClick={props.handleNext}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ margin: "0px" }}>Finish</p>
            <div style={{ width: "25px", height: "25px", marginLeft: "10px" }}>
              <img
                alt=""
                style={{ width: "100%", height: "100%" }}
                src={doneAllIcon}
              ></img>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ImagesSection;
