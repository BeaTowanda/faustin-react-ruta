import React, {useState, useEffect} from "react";
import DetailLast from "./detailLast";
import ContColor from "./contColor";



function ContDetail() {
  let [productSeeP, setProductSeeP] = useState({
    location1:"assets/images/product_dummy.svg",
    location2:"assets/images/product_dummy.svg",
    location3:"assets/images/product_dummy.svg",
    description:"no se cargó ningún Producto",
    description2:"No se cargo ningun producto",
    description3:"No se cargo ningun producto",
    price:"no hay PRECIO informado",
    discount:"no hay DESCUENTO informado",
    type:"no hay TIPO informado",
    colection:"no hay Colección informada",
    year:"no hay AÑO informado",
    color:["no hay colores informados"]
 
} )

useEffect(()=>{
    fetch("http://localhost:3030/api/productUltimo")
    .then(res => res.json())
    .then(data => {
      /*console.log(data.data.productSeeP[0].coloresDB[0].color_name)*/
       setProductSeeP
        ({ 
            location1: "http://localhost:3030/images/"+ data.data.productSeeP[0].image_ppal,
            location2: "http://localhost:3030/images/"+ data.data.productSeeP[0].image_back,
            location3: "http://localhost:3030/images/"+ data.data.productSeeP[0].image_det1,   
            description: data.data.productSeeP[0].name,
            description2: data.data.productSeeP[0].description,
            description3: data.data.productSeeP[0].description2,
            price:data.data.productSeeP[0].price,
            discount:data.data.productSeeP[0].dto,
            type:data.data.productSeeP[0].pType.type_name,
            colection:data.data.productSeeP[0].pColection.colection_name,
            year:data.data.productSeeP[0].pYear.year_name,
            color:data.data.productSeeP[0].coloresDB  

        })
      
    })
    
},[] )


return (
<div className="container" >
   {/*} {productSeeP.map((dato,i)=> */}
   {/*} <DetailLast key={i}  */} 
   <DetailLast
      location1= {productSeeP.location1}
      location2= {productSeeP.location2}
      location3= {productSeeP.location3}
      description= {productSeeP.description}
      description2= {productSeeP.description2}
      description3= {productSeeP.description3}
      price= {productSeeP.price}
      discount= {productSeeP.discount}
      type={productSeeP.type}
      colection= {productSeeP.colection}
      year={productSeeP.year}
      
    />
  {/*}  <ContColor 
      color={productSeeP.color}
      />
*/}
</div>

)
}


export default ContDetail 