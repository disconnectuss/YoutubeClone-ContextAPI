import { Link } from "react-router-dom"

const PlayList = ({playlist}) => {
  return (
    <Link to={`/watch/${playlist.playlistId}`}>
    <div className="flex mt-2 items-center">
        <p>detail</p>
      </div>
  </Link>
  )
}

export default PlayList
