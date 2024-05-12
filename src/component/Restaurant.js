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

} = resdata?.data;
 return (
    <div className="res-card"> 
    <img className="res-logo" src={
        CDN_LINK +cloudinaryImageId} 
     />

     <h3>{name} </h3>
     <h4>  {cuisines.join(", ")}  </h4>
     

     <p>₹{costForTwo/100}</p>
     
     <p>{deliveryTime} minute</p>
     
     <h4>{avgRating}</h4>
     
      
     </div>
 )
};


export default RestCart;