import { useContext} from "react"
import { YouTubeContext } from "../context/YoutubeContext"
import SideNav from "../components/SideNav"
import Loading from "../components/Loading";
import {VideoCard} from "../components/VideoCard";



const Feed = () => {
  const {videos}=useContext(YouTubeContext)

  
return (
    <div className="flex bg-black min-h-[100vh] text-white">
      <SideNav/>
      <div className="videos w-full">
       {!videos ?( <Loading/> ): (videos.map((item)=>{
        if(item.type!== 'video') return;

       return <VideoCard key={item.video.videoId} video={item.video}/>
})
)}
      </div>
    </div>
  )
}

export default Feed
