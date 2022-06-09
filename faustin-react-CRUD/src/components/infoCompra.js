import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoCompra({made, quantity, price}) {
    return (
        <tbody>
            <tr>
                <td>{made}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                
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

InfoCompra.propTypes ={
    made:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    
}

InfoCompra.defaultProps = {
    made: "número NO informado",
    price: "no informa PRECIO",
    quantity: "no informa CANTIDAD "
    
}



export default InfoCompra;