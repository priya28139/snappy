import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="image-wrap"
            key={doc.id}
            style={{
              backgroundImage: `url(${doc.url})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
              objectFit: "cover",
            }}
            onClick={() => setSelectedImage(doc.url)}
          ></div>
        ))}
    </div>
  );
};

export default ImageGrid;
