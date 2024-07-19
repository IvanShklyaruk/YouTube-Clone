import React, { useEffect } from "react";
import PlayVideo from "../components/PlayVideo";
import Recommended from "../components/Recommended";
import '../styles/Video.css'
import { useParams } from "react-router-dom";

const Video = () => {

  const {videoId,categoryId} = useParams();
  // useEffect(()=>{
  //   console.log(id);
  // },[])

  return (
      <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>
      </div>
  );
};

export default Video;
