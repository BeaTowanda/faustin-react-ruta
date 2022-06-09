import React, {useState, useEffect} from "react";
import CardProduct from "./cardLastProduct";

function LastProduct() {
    let [product, setProduct] = useState({
        location:"assets/images/product_dummy.svg", 
        description:"No se cargo ningun producto",
        urlProduct: "/" 
    })

    useEffect(()=>{
        fetch("http://localhost:3030/api/products")
        .then(res => res.json())
        .then(data => {
            setProduct({    
                description: data.meta.lastProducts[0].name,
                location: "http://localhost:3030/images/"+ data.meta.lastProducts[0].image_ppal,
                urlProduct: "http://localhost:3030/bproduct/detalle/"+ data.meta.lastProducts[0].id
            })

        })
        
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        One Product on Database
                    </h6>
                </div>
                <CardProduct 
                    location={product.location} description={product.description} urlProduct={product.urlProduct} 
                />
            </div>
        </div>
    )
}

export default LastProduct;