import React, {useState, useEffect} from "react";
import InfoCompra from "./infoCompra";

const styles3 ={
    div:{
      paddingTop:"1rem",
      backgroundColor:"#577267",
      color:"bisque",
      borderRadius: "8px",
    } }
const styles2 ={
    div:{
        paddingTop:"1rem",
        backgroundColor:"#577267",
        borderRadius: "8px",
        color:"bisque"
     } }
let datos = [
    {
        made: "Ninguna información",
        quantity:"Ninguna información",
        price:"$0"
        
    }
]

function DataCompra(){

    let [compras, setCompras] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3030/api/compraUltima")
        .then(res => res.json())
        .then(data =>{
            let array = data.data.compras
            console.log(array)

            setCompras(array)
        })
        
    },[])
   
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body" style={styles3.div}>
                <div className="table-responsive" style={styles2.div}>
                    <table className="table table-bordered" id="dataTable" width="80%" cellSpacing="0" style={styles2.div}>
                        <thead>
                            <tr>
                                <th>Invoice number</th>
                                <th>Quantity</th>
                                <th>Price</th>
                               
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Invoice number</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                
                            </tr>
                        </tfoot>
                        {compras.map((dato,i)=>

                            <InfoCompra key={i} 
                                made= {dato.made}
                                quantity= {dato.quantity}
                                price={dato.item_u_price}
                               
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DataCompra;