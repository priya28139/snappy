import React, { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            key={doc.id}
            style={{
              backgroundImage: `url(${doc.url})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
              objectFit: "cover",
            }}
            layout
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            onClick={() => setSelectedImage(doc.url)}
          ></motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
