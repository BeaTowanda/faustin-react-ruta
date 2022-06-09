import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoUsers({userName,last_name, email,bornDate}) {
    return (
        <tbody>
            <tr>
                <td>{userName}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{bornDate}</td>
                
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

InfoUsers.propTypes ={
    userName: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    bornDate: PropTypes.string.isRequired
    
}

InfoUsers.defaultProps = {
    userName: "Sin nombre" ,
    last_name: "Sin descripción",
    email: "",
    bornDate:"Sin fecha"
}



export default InfoUsers;