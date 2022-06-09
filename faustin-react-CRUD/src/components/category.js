import {useState, useEffect} from "react";
import CardCategory from "./cardCategory";
import CardColection from "./cardColection";
import CardYear from "./cardYear";

function Category(){
    let [categories, setCategories] = useState([{name:"Ninguna Categoria"}]);

    useEffect(()=>{
        fetch("http://localhost:3030/api/subcategories")
        .then(res => res.json())
        .then(data => {
            setCategories(data.meta.quantityProducts)
        })

    },[]) 

    let [colection, setColection] = useState([{name:"Ninguna Colección"}]);
    
    useEffect(()=>{
        fetch("http://localhost:3030/api/colectionCategories")
       .then(res => res.json())
        .then(data => {
            setColection(data.meta.quantityProducts)
            })
    
    },[])

    let [year, setYear] = useState([{name:"Ningun AÑO"}]);
    
    useEffect(()=>{
        fetch("http://localhost:3030/api/yearCategories")
       .then(res => res.json())
        .then(data => {
            setYear(data.meta.quantityProducts)
            })
    
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        { categories.map((category, i) =>
                            <CardCategory key={i} nameCategory={category.name} quantity={category.count} />)
                        }
                    </div>
                    <div className="row">
                        { colection.map((colection, i) =>
                            <CardColection key={i} nameCategory= {"Coleccion "+colection.name} quantity={colection.count} />)
                        }
                    </div>
                    <div className="row">
                        { year.map((year, i) =>
                            <CardYear key={i} nameCategory= {"AÑO "+year.name} quantity={year.count} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Category;