import React, {useState, useEffect} from "react";
import TableColor from "./tableColor";

function ContColor({color}) {
    console.log(color)
useState({
      id:"no se informa",
      color_name:"no se informa"
    
} )
useEffect({
        id:color.id,
        color_name: color.color_name
 

},[] )




return (
<div className="container" >
   {/*} {productSeeP.map((dato,i)=> */}
   {/*} <DetailLast key={i}  */} 
   
   {color.map((dato,i )=>    
   <tableColor key={i}
        id = {dato.id}
        color_name = {dato.color_name}
    />
)}
  
</div>

)
}


export default ContColor; 