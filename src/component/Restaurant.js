import { CDN_LINK } from "../utilis/constant";

const RestCart = (props)=>{
    const {resdata}= props;

const {
    cloudinaryImageId,
     name,
     avgRating,
     cuisines,
     costForTwo,
     deliveryTime,

} = resdata?.info;
 return (
    <div className="res-card"> 
    <img className="res-logo" src={
        CDN_LINK +cloudinaryImageId} 
     />

     <h3>{name} </h3>
     <h4>  {cuisines.join(", ")}  </h4>
     <h4>{avgRating} stars</h4>

     <p>{costForTwo.toUpperCase()}</p>
     
     <p>{deliveryTime} minute</p>
     
    
     
      
     </div>
 )
};


export default RestCart;