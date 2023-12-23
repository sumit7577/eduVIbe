"use client";
import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default ToasterContext;
