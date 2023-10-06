import { useContext } from "react"
import { categories } from "../utils/constants"
import { YouTubeContext } from "../context/YoutubeContext"



const SideNav = () => {
  const {selectedCategory, setSelectedCategory}= useContext(YouTubeContext);
  // state = useContext(YouTubeContext) || another way but it needs to be used with state.name etc...

  return (
    <nav>
     {categories.map((item, i)=>(
        <div
        key={i}
        onClick={()=> setSelectedCategory(item)}
        >
        <div className={`
          ${selectedCategory.name === item.name && `bg-gray-600`}

          flex p-2 py-4 gap-3 items-center hover:bg-gray-600 rounded transition text-lg `}>
            {item.icon}
            <span>
                {item.name}
            </span>
        </div>
        {item.divider && <hr/>}
        </div>
     ))}
    </nav>
  )
}

export default SideNav
