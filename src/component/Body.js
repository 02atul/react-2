import RestCart from "./Restaurant";
import { useEffect, useState } from "react";
import resList from "../utilis/mockdata";
const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState([])

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
                

                  setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
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
                    <RestCart key={restaurant.info.id} resdata={restaurant}/> 
                ))}
            </div>
        </div>
    );
}

export default Body;


