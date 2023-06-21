import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("start");

    return () => {
      console.log("end");
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
