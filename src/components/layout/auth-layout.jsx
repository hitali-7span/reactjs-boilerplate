import React from "react";

const AuthLayout = (props) => {
  const { image, children } = props;

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex md:w-2/3 p-8 pr-0">
        <div className="flex items-center justify-center bg-gray-50 rounded-lg h-full w-full">
          <div className="max-w-md max-h-md">
            <img src={image} className="w-full h-auto" alt="img" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
