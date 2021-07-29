import React from 'react'
import { Dropdown,form } from 'react-bootstrap'
import '../App.css';
import { Link } from 'react-router-dom';

function add() {
    return (

        <div className="col-8  md">

            <div className="add ">

            <h1>Book a Product</h1>

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Air Compressor 12/GAS P1
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Air Compressor 12/GAS P1</Dropdown.Item>
                
            </Dropdown.Menu>
            </Dropdown>

            <div className="date">

                <form>
                <label for="birthday">Form:</label>
                <input type="date" id="birthday" name="birthday"/>

                <label for="birthday">To:</label>
                <input type="date" id="birthday" name="birthday"/>

                </form>

                <div className="bt">
                <Link to='infoproduct/'><button>yes</button></Link>
                <Link to='/'><button className="nobt">no</button></Link>
                </div>



            </div>


            </div>

        </div>
        
    )
}

export default add
