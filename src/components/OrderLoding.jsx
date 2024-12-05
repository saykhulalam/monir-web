import React from "react";
import { Spinner } from "@material-tailwind/react";

const OrderLoding = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default OrderLoding;
