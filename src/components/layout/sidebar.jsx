import logo from "@/assets/icons/logo.svg";
import { useState } from "react";
import { UsersIcon } from "@/assets/icons/user";
import { ArrowLeft } from "@/assets/icons/arrow-left";
import { ArrowRight } from "@/assets/icons/arrow-right";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <>
      <div
        className={`h-screen overflow-hidden border-r flex flex-col ${
          isOpenSidebar
            ? "w-64 ease-in duration-150"
            : "w-20 overflow-hidden ease-in duration-150"
        }`}
      >
        <div className="flex border-b justify-center h-20">
          <Link
            to={"/"}
            className="font-semibold text-lg flex items-center cursor-pointer"
          >
            <img src={logo} className="mr-2 p-2 h-16" alt="logo" />
          </Link>
        </div>
        <div className="flex-grow mt-4 overflow-auto focus:ring-transparent">
          <Link
            className={`flex text-lg hover:bg-primary-500 p-2 rounded-md hover:text-white ${
              isOpenSidebar ? "justify-start" : "justify-center"
            }`}
            href="/user"
          >
            <UsersIcon className={`${isOpenSidebar && "mr-2"} h-6 w-6`} />
            {isOpenSidebar && <p>User List</p>}
          </Link>
        </div>

        <button
          onClick={() => {
            setIsOpenSidebar(!isOpenSidebar);
          }}
          className="flex items-center justify-between p-4 text-xl"
        >
          {isOpenSidebar ? (
            <>
              Collapse <ArrowLeft className="ml-5 h-8 w-8" />
            </>
          ) : (
            <ArrowRight className="h-8 w-8" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
