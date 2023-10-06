import millify from "millify"
import { Link } from "react-router-dom"


export const VideoCard = ({video}) => {
  return (
    <Link to={`/watch/${video.videoId}`} >
      {/* image side */}
    <Link className="relative">
      <img className="rounded-lg w-full"
       src={
        video.thumbnails[1]
          ? video.thumbnails[1].url
          : video.thumbnails[0].url
      } />
       <span className="absolute right-2 bottom-2 bg-black p-1 rounded">{video.lengthSeconds}</span>
    </Link>
    {/* details  */}
    <div className="flex gap-4 mt-5">
      <img className="rounded-full w-12 h-12"
      src={video.author.avatar[0].url} alt="" />
      <div>
        <h5 className="font-bold">{video.title}</h5>
        <p>{video.author.title}</p>
        <div className="flex gap-3">
          <p >{millify(video.stats.views)}</p>
          <p>{video.publishedTimeText}</p>
        </div>
      </div>
    </div>
  </Link>
  )
}


