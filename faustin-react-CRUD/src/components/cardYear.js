import react from "react";

function CardYear({nameCategory, quantity}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-black shadow">
                <div className="card-body">
                    {nameCategory}: {quantity} prod.
				</div>
                
            </div>
        </div>
    )
}

export default CardYear;