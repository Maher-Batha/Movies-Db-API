import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      {isPageLoading ? (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomeLayout;
