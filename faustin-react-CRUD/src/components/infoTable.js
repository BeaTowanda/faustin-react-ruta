import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoTable({name, description, price,tipo, coleccion,dto}) {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{tipo.type_name}</td>
                <td>{coleccion.colection_name}</td>
                <td>{dto}</td>
                {/*    <ul>
                        <li>{type_name}</li>
                    </ul>
                </td>
                <td>
                   {/*} <ul>
                        {colors.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.name} 
                            </span>
                        </li> 
                        )}
                        </ul> 
                </td>
                        <td>{dto}</td> */} 
            </tr>
        </tbody>
    )
}

InfoTable.propTypes ={
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    tipo: PropTypes.string.isRequired,
    coleccion:PropTypes.string.isRequired,
    dto: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired 
}

InfoTable.defaultProps = {
    name: "Sin nombre" ,
    description: "Sin descripción",
    price: "",
    tipo:"",
    coleccion:"",
    dto: ""
}



export default InfoTable;