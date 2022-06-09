import React, {useState, useEffect} from "react";
import InfoUsers from "./infoUsers";
let datos = [
    {
        user: "Ninguna información",
        last_name:"Ninguna información",
        email:"",
        bornDate: "Ninguna información",
       
    }
]

function DataUsers(){

    let [users, setUsers] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3030/api/users")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setUsers(array)
        })
        
    },[])
   
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Last-Name</th>
                                <th>Email</th>               
                                <th>Born-Date</th>
                               
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>User</th>
                                <th>Last-Name</th>
                                <th>Email</th>
                                <th>Born-Date</th>
                               
                            </tr>
                        </tfoot>
                        {users.map((dato,i)=>

                            <InfoUsers key={i} 
                                userName= {dato.userName}
                                last_name= {dato.last_name}
                                email={dato.email}
                                bornDate={dato.bornDate}
                                
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DataUsers;