import React, {useState, useEffect} from "react";
import InfoTable from "./infoTable";
let datos = [
    {
        name: "Ninguna información",
        description:"Ninguna información",
        price:"$0",
        type: "Ninguna información",
        colection:"Ninguna infomación",
        discount: 0
    }
]

function DataBase(){

    let [products, setProducts] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3030/api/products")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setProducts(array)
        })
        
    },[])
   
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Colection</th>
                                <th>Discount</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Colection</th>
                                <th>Discount</th>
                            </tr>
                        </tfoot>
                        {products.map((dato,i)=>

                            <InfoTable key={i} 
                                name= {dato.name}
                                description= {dato.description}
                                price={dato.price}
                                tipo={dato.pType}
                                coleccion={dato.pColection}
                                dto={dato.dto}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}


export default DataBase;