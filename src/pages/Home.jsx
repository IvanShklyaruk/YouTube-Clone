import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import '../styles/Home.css'

const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0);
  
  return (
    <>
      <Sidebar setCategory={setCategory} sidebar={sidebar} category={category} />
      <div className={`container ${sidebar ? "" : " large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  );
};

export default Home;
