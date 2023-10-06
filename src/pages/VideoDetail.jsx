import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../utils/helpers";
import ReactPlayer from "react-player";



const VideoDetail = () => {
  const {videoId} = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(()=>{
    getData(`/details/?id=${videoId}`)
    .then((res)=> setDetail(res));
   console.log(detail)
  },[videoId])
 
 
  return (
    <div className="bg-black min-h-[95vh]">
      <ReactPlayer
      className="items-center"
      url={`https://www.youtube.com/watch?v=${videoId}`}
      controls />
      
    </div>
  )
}

export default VideoDetail
