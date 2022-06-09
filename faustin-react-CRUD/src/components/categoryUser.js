import {useState, useEffect} from "react";

import CardUser from "./cardUser";

function CategoryUser(){
    let [categories, setCategories] = useState([{name:"Ninguna Categoria"}]);

    useEffect(()=>{
        fetch("http://localhost:3030/api/usersCategorias")
        .then(res => res.json())
        .then(data => {
            setCategories(data.meta.quantityUsers)
        })

    },[]) 

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary"> Users Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        { categories.map((category, i) =>
                            <CardUser key={i} nameCategory={category.name} quantity={category.count} />)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
 
export default CategoryUser;