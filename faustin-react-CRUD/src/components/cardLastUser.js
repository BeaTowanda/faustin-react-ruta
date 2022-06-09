import React from "react"; 


function CardUser({description, location, urlUser}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20rem" }} src={location} alt="image dummy" />
            </div>
            <p>{description}</p>
            <a target="_blank" rel="nofollow" href={urlUser}>
                View USER detail
            </a>
        </div>
    )
}

export default CardUser;