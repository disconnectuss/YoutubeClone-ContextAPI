import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../utils/helpers";
import ReactPlayer from "react-player";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import Loading from "../components/Loading"
import millify from "millify";
import ChannelDetail from "../components/ChannelDetail";
import StringSide from "../components/StringSide";
import { VideoCard } from "../components/VideoCard";
import Comments from "../components/Comments";
import PlayList from "../components/PlayList";



const VideoDetail =() => {
  const {videoId} = useParams();
  const [detail, setDetail] = useState(null);
  const [related, setRelated] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(()=>{
    // delete previos videos before clicking
    setDetail(null);
    setRelated(null);
    // video details from api
    getData(`/details/?id=${videoId}`)
    .then((data)=> setDetail(data));
    
 
    // video related contents from api
    getData(`/related-contents/?id=${videoId}`).then((data)=> setRelated(data.contents));
 
   getData(`/comments/?id=${videoId}`).then((data)=> setComments(data.comments))
  },[videoId])
  
 console.log(related)
  return (
    <div className="lg:px-[100px] flex flex-col gap-5 lg:flex-row p-4 bg-black min-h-[95vh] text-white">
       <div>
      <ReactPlayer
      width={'100%'}
      url={`https://www.youtube.com/watch?v=${videoId}`}
      controls />
      {!detail ? (
        <Loading/> ) : (
          <ChannelDetail detail={detail} comments={comments} />
           ) }
      </div>
  {/* related content */}
      {/* <div className="flex flex-col gap-10  lg:max-w-[500px] m-auto"> */}
      <div className="mt-8">
      { !related
          ? "..."
          : related.map((item) =>{
            item.playlist &&
            <PlayList 
            key={item.playlist.playlistId} 
            playlist={item.playlist} />;
            
          })} 
        { !related ? '...' : ( related.map((item) => {
          if (item.type !== 'video') 
          return ;
          return (
            <VideoCard key={item.video.videoId} video={item.video}/>
          )
        })
        )}
      </div>
     <div>
      
     </div>
     </div>
  )
}

export default VideoDetail

