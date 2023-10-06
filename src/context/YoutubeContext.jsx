import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { options } from "../utils/constants";

export const YouTubeContext = createContext();

export const YouTubeProvider= ({children})=> {
const [selectedCategory, setSelectedCategory]= useState({ 
name: 'New',
type: 'category'});

const [videos, setVideos]=useState(null)
// selected categories changes
useEffect(()=> {
// delete previous page
setVideos(null)
    if(selectedCategory.type === 'category'){
        fetchCategory(selectedCategory.name)}},
        [selectedCategory]);

// fetching data from API
const fetchCategory= (category)=>{
      axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res)=>setVideos(res.data.contents))
      .catch((err)=> console.log(err))
        };

    

return(
    <YouTubeContext.Provider
    value={{selectedCategory,setSelectedCategory, videos}}>
        {children}
    </YouTubeContext.Provider>
)
}
