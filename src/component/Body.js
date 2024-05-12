import RestCart from "./Restaurant";
import { useEffect, useState } from "react";
import resList from "../utilis/mockdata";
const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState(resList)

  useEffect(()=>{
   fetchData()
  }, []);
           
         const fetchData = async ()=>
            {
                const data = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await data.json()
                console.log(json);
                 setListOfRestaurant(json.data.cards);
            }
           
    return (

        <div className="body"> 
            <div className="filter"> 
           < button className="filter-btn"
             onClick={()=>{
                const filterList = resList.filter(
                    (res)=>res.data.avgRating>4

                );
                setListOfRestaurant(filterList);
             }}
           >
            Top Rated Restaurants    </button>
             </div>
            <div className="res-container"> 
                {listOfRestaurant.map((restaurant) => (
                    <RestCart key={restaurant.data.id} resdata={restaurant}/> 
                ))}
            </div>
        </div>
    );
}

export default Body;
