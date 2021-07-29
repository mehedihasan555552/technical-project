import React from 'react'
import { Dropdown,form } from 'react-bootstrap'
import '../App.css';
import { Link } from 'react-router-dom';



function Bookproduct() {
    return (
        <div>

                <div className="col-8  md">

                <div className="add ">

                <h1>Book a Product</h1>

               <h4>Your estimate price is $206</h4>
               <h5>Do you want to procedure?</h5>
               

                <div className="date">

                   

                    <div className="bt">
                    <Link to='/'><button>yes</button> </Link>
                    <Link to='/'><button className="nobt">no</button></Link>
                    </div>



                </div>


                </div>

                </div>
            
        </div>
    )
}

export default Bookproduct
