import RestCart from "./Restaurant";
import { useEffect, useState } from "react";
import resList from "../utilis/mockdata";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState([])

const [searchText,setsearchText] = useState("");

  useEffect(()=>{
   fetchData()
  }, []);
           
         const fetchData = async () =>
            {
                const data = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await data.json()
                console.log(json);
                

                  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }

            // if(listOfRestaurant.length===0){
            //     return <Shimmer/>
            // }
           
    return  listOfRestaurant.length===0 ? 
    (<Shimmer/>)
    :
    (
        <div className="body"> 
            <div className="filter"> 
          <div className="search">
           <input type="text" className="search-box" value={searchText}
           onChange={(e)=>{
            setsearchText(e.target.value);

           }}
           />
           <button className="searchh"
            onClick={()=>{
                console.log(searchText);
                 const filterRestro = listOfRestaurant.filter(
                    (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setListOfRestaurant(filterRestro)

            }}>Search</button>
           </div>
           < button className="filter-btn"
             onClick={()=>{
                const filterList = resList.filter(
                    (res)=>res.info.avgRating>4

                );
                setListOfRestaurant(filterList);
             }}
           >
               </button>
             </div>
            
            <div className="res-container"> 
                {listOfRestaurant.map((restaurant) => (
                    <RestCart key={restaurant.info.id} resdata={restaurant}/> 
                ))}
            </div>
        </div>
    );
}

export default Body;


