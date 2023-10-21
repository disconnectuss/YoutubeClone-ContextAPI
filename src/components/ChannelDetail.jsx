import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Loading from "../components/Loading";
import millify from "millify";
import moment from "moment";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import StringSide from "../components/StringSide";
import Comments from "./Comments";

const ChannelDetail = ({ detail, comments }) => {
  // Assuming 'badges' is the array of badges
  const badges = [
    {
      text: "Verified",
      type: "VERIFIED_CHANNEL",
    },
    // ... other badges
  ];

  // Check if the "Verified" badge is present
  const isVerified = badges.some((badge) => badge.text === "Verified");
  return (
    <>
      <h1 className="mt-3 text-xl font-bold p-3  text-white">{detail.title}</h1>
      {/* info about channel */}
      <div className="flex justify-between items-center  p-3 text-white">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail.author.avatar[0].url}
          />
          <div>
            <div className="flex gap-2 items-center">
              <h4 className="font-bold">{detail.author.title}</h4>
              {isVerified && <RiVerifiedBadgeFill />}
            </div>
            <p>{detail.author.stats.subscribersText}</p>
          </div>

          <button className="bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]">
            Subscribe
          </button>
        </div>
        <div className="flex items-center rounded-full py-1 px-6 text-lg bg-[#4b4a4a] cursor-pointer">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(detail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      {/* info about video */}
      <div className="bg-[gray] rounded p-2 transition hover:bg-[#808080b3] cursor-pointer">
        <div className="flex gap-3">
          <p>{millify(detail.stats.views)} views</p>
          <p>Published on {moment(detail.publishedDate).fromNow()}</p>
          <ul className="flex gap-3">
            {detail.superTitle.items.slice(0, 3).map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        </div>
        <StringSide text={detail.description} max={200} />
      </div>
      {/* comments of video */}
      <div>
        <Comments comments={comments}/>
      </div>
    </>
  );
};

export default ChannelDetail;
