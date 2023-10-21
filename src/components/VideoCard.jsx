import millify from "millify"
import { Link } from "react-router-dom"
import { ImFeed } from "react-icons/im";


export const VideoCard = ({video}) => {
  const totalSeconds = video.lengthSeconds;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  let result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  if (hours > 0) {
    result = `${padTo2Digits(hours)}:${result}`;
  }
 
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
       <p
          className={`absolute right-2 bottom-2 p-1 rounded ${
            video.isLiveNow !== true ? "bg-[#0A5666]  text-white " : ""
          }`}>
          {video.isLiveNow !== true ? (
            result
          ) : (
            <span className="flex items-center bg-red-700 text-white p-1 rounded">
              <ImFeed className="me-1" /> Live
            </span>
          )}
        </p>
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


