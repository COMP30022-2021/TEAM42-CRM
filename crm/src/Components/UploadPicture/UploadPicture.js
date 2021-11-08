import React from "react";
import ImageUploading from "react-images-uploading";

export default function UploadPicture() {
  const [image, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <div className="addPictureContainer">
        <div className="UploadPicture">
          <ImageUploading
            value={image}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            style={{ height: "100%", width: "100%" }}
          >
            {({ imageList, onImageUpload, onImageRemove }) => (
              <div className="upload__image-wrapper">
                <button className="buttonPicture" onClick={onImageUpload}>
                  <div style={{ color: "#cfd7e3" }}> Click or Drop here </div>
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div style={{ "text-align": "center" }}>
                    <div key={index} className="image-item">
                      <img
                        src={image["data_url"]}
                        alt=""
                        width="40%"
                        height="40%"
                        style={{ textAlign: "center" }}
                      />
                      <button
                        className="buttonPicture"
                        onClick={() => onImageRemove(index)}
                      >
                        <div style={{ color: "#cfd7e3" }}>Remove</div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  );
}
