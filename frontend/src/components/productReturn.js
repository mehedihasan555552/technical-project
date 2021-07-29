import React from 'react'
import { Dropdown,form ,FormControl} from 'react-bootstrap'
import '../App.css';
import { Link } from 'react-router-dom';

function productReturn() {
    return (
        <div className="col-8  md">

            <div className="add ">

            <h1>Return a Product</h1>

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Air Compressor 12/GAS P1
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Air Compressor 12/GAS P1</Dropdown.Item>
                
            </Dropdown.Menu>
            </Dropdown>

            <div className="date">

                <FormControl
                value="Used Mileage"
                />

                <div className="bt">
                <Link to='returnproduct/'><button>yes</button> </Link>
                <Link to='/'><button className="nobt">no</button></Link>
                </div>



            </div>


            </div>

        </div>
    )
}

export default productReturn
