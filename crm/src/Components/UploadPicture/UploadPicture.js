import React from 'react';
import ImageUploading from 'react-images-uploading';
import Header from '../SignIns/SignInHeader';
import { GrClose } from "react-icons/gr";


export default function UploadPicture(){
    const [image, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <Header text="Upload a Picture" top_a={"20%"} width_a={"30%"} />
            <Header text="" top_a={"56%"} width_a={"30%"} />
            <div className="addPictureContainer">
                <div className="UploadPicture">
                <ImageUploading value={image} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" 
                style={{height: "100px",width: "100px"}}>
                    {({imageList, onImageUpload, onImageRemove,}) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button className="buttonPicture" onClick={onImageUpload}>
                        <div style={{color:"#cfd7e3"}}> Click or Drop here </div>
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="40%" height="40%"/>
                            <button className="buttonPicture" onClick={() => onImageRemove(index)}>
                                <div style={{color:"#cfd7e3"}}>Remove</div></button>
                        </div>
                        ))}
                    </div>
                    )}
                </ImageUploading>
                </div>
            </div>
        <GrClose
          style={{ position: "absolute", left: "62.5%", top: "21%" }}
          cursor="pointer"
        />
        </div>
    );
    }

    