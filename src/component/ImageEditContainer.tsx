import React, { useState } from "react";
import BtnList from "./BtnList";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const imageCrop =
  "https://images.unsplash.com/photo-1666297908857-ae0eb37199d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

const ImageEditContainer = () => {
  const [image, setImage] = useState(imageCrop);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  return (
    <div>
      <BtnList />
      <div>
        <div style={{ width: "100%" }}>
          <Cropper
            style={{ height: 400, width: "100%" }}
            // zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            aspectRatio={1}
            viewMode={1}
            // minCropBoxHeight={10}
            // minCropBoxWidth={10}
            background={false}
            // responsive={true}
            // autoCropArea={1}
            // checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            // guides={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageEditContainer;
