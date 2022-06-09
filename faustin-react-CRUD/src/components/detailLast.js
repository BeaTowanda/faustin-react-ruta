import PropTypes from "prop-types";
import React, { useEffect} from "react";

const styles1 = {
  div: {
    textAlign:"center" ,
    fontWeight:"bolder", 
    fontSize: "x-large", 
    backgroundColor:"#577267",
    color:"bisque"
  } 
}
const styles2 ={
  div :{
   backgroundColor: "#D7D6D6",
   border: "4px solid #577267", 
   borderRadius: "8px",
   fontWeight: "bold",
   color:"black"
}
}
const styles3 ={
  div:{
    textAlign:"center" ,
    fontSize: "large",      
    paddingRight:"2rem",
    marginLeft:"5.5rem",
    borderRadius: "8px",
    marginRight:"5.5rem",
    backgroundColor:"#577267",
    color:"bisque"
  }
}


function DetailLast( {location1,location2,location3,description,description2,description3,
  price,discount,type,colection,year,color }) {


  return (
  <div className="content-fluid">
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
                <img  className="imgBarra" src={location1} alt="first"/>
        </div>
        <div className="slide">
                <img  className="imgBarra" src={location2} alt="second"/>
    
        </div>
        <div className="slide">
                <img  className="imgBarra" src={location3} alt="third"/>  
        </div>
        
        <div className="slide"> 
              <img  className="imgBarra" src={location1} alt ="first" />
            
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location2} alt ="second" />           
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location3} alt ="third" />          
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location1} alt ="first" />
         
        </div>
        <div className="slide">
        <img  className="imgBarra" src={location2} alt ="second" />
         
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location3} alt ="third" />
         
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location1} alt ="first" />
          
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location2} alt ="second" />
         
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location3} alt ="second" />
        
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location1} alt ="third" />
        
        </div>
        <div className="slide">
          <img  className="imgBarra" src={location2} alt ="third" />
         
        </div>
      </div>
    </div>
    <div className="container-sm">
      
      <div className="roww" style={styles1.div }>
        <p>{description}</p>
        <p>{description2} </p><span>{description3}</span>
      
      </div>

    </div>
      
    <div className="container">
        <div className="row">
          <div className="col align-self-start" style={styles2.div}>
            Tipo:{type}
          </div>
          <div className="col align-self-center" style={styles2.div}>
            Colección:{colection}
          </div>
          <div className="col align-self-end" style={styles2.div}>
            Año:{year} 
          </div>
        </div>
    <br/>
    
  </div>
      <div className="badge badge-primary text-wrap" style={styles3.div} >
        Precio $: {price}
      </div>
      <div className="badge badge-primary text-wrap"style={styles3.div} >
        Descuento %:{discount}
      </div>
    {/*}  <div className="badge badge-primary text-wrap" style={styles3.div} >
        color:{
        
      
       color.map((dato,i) => 
        <TableColor
        key={i}
        idColor={ dato.id }
        nameColor = { dato.color_name }
        />
     )}
  

        </div>*/}
  </div>

  )
  }
 
  DetailLast.propTypes ={
    location1: PropTypes.string.isRequired,
    location2: PropTypes.string.isRequired,
    location3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    description3: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    discount:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type: PropTypes.string.isRequired,
    colection:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired,
    color:PropTypes.array.isRequired
  
}

DetailLast.defaultProps = {
    location1: "no existe ",
    location2: "no existe",
    location3: "no existe",
    description: "sin NOMBRE",
    description2: "no se informa Descripción ",
    description3: "no se informa data ",
    price: "no se informa PRECIO ",
    discount:"no se informa Descuento",
    type: "no se informa TIPO de producto",
    colection:"no se informa COLECCIÓN",
    year:"no se informa Año lanzamiento",
    color:["no hay info"]
    
}


export default DetailLast;  
