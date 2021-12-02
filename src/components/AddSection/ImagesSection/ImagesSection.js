import React from "react";
import ImageUploading from "react-images-uploading";
import addicon from "../../../assets/AddIcon.svg";
import {
  HeadingWrapper,
  AddPhotoTextAndButtonWrapper,
  AddPhotosText,
} from "./ImagesSection.style";
const ImagesSection = () => {
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
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
                        right: "20px",
                        height: "25px",
                        width: "25px",
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
  );
};

export default ImagesSection;
