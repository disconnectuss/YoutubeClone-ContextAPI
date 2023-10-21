import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getData } from "../utils/helpers";
import SideNav from "../components/SideNav";
import Loading from "../components/Loading";
import { VideoCard } from "../components/VideoCard";




const SearchResults = () => {
   const [results, setResults]= useState(null);
   const [params, setParams] = useSearchParams();

    // reaching the query of URL parameters
   const query = params.get('search_query')

   useEffect(()=> {
    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`)
    .then((data) => setResults(data))
   }, [query])
   const handleClick = () => {
    setParams('search_query', results.didYouMean)
   }
  
  return (
   <div className="flex bg-black text-white min-h-[100vh]">
    <SideNav />
    <div className="flex flex-col gap-20 p-10 w-full">
      {results?.didYouMean && (
        <p onClick={handleClick} className="cursor-poiter"> 
        Did you mean this? {' '}
          {results?.didYouMean}
        </p>
      )}
      {!results ? ( <Loading />) : 
        ( results.contents.map((item, i)=> {
            if ( item.type !== 'video') return;
            return <VideoCard key={i}  video={item.video}/>
        })
    )}
  
    </div>
    
   </div>
  )
}

export default SearchResults
