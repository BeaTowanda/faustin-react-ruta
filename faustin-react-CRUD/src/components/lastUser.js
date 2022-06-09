import React, {useState, useEffect} from "react";
import CardUser from "./cardLastUser";

function LastUser() {
    let [lastUser, setlastUser] = useState({
        location:"assets/images/product_dummy.svg", 
        description:"No se cargó ningun usuario",
        urlUser: "/" 
    })

    useEffect(()=>{
        fetch("http://localhost:3030/api/lastUsers")
        .then(res => res.json())
        .then(data => {
            setlastUser({    
                description: data.meta.lastUser[1].userName,
                location: "http://localhost:3030/images/avatars/"+ data.meta.lastUser[1].avatar,
                urlUser: "http://localhost:3030/busers/detailOne/"+ data.meta.lastUser[1].id
            })

        })
        
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        One USER in Data Dase
                    </h6>
                </div>
                <CardUser 
                    location={lastUser.location} description={lastUser.description} urlUser={lastUser.urlUser} 
                />
            </div>
        </div>
    )
}

export default LastUser;