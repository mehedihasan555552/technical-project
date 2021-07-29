import React,{useEffect,useState} from 'react'
import { Button, Form,FormControl,Table } from 'react-bootstrap'
import '../App.css';
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import Search from './Search';

function Home() {

    const [products , setProducts] = useState([]);

 
    const loadproducts = async () => {
        const result = await axios.get('http://127.0.0.1:8000/api/products/')
        setProducts(result.data)
    }

    useEffect ( () => {
        loadproducts()
    },[])


    

    return (
    <div>

    <Search/>

    <div className="table">

        <Table striped table bordered hover >
                    <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Co</th>
                    <th>Available</th>
                    <th>Need Repair</th>
                    <th>Durability</th>
                    <th>Mileage</th>
                    </tr>
                </thead>
                        <tbody>

                        {products.map(product => (

                            <tr>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.code}</td>
                            <td>{product.availability.toString()}</td>
                            <td>{product.needing_repair.toString()}</td>
                            <td>{product.durability.toString()}</td>
                            <td>{product.mileage}</td>
                            
                            
                            </tr>

                            ))}
                           
                    
                    
                         </tbody>

                        
        </Table>

        <div className="button">

        <LinkContainer to='/add'><Button variant="primary">Book</Button></LinkContainer>
        <LinkContainer to='/return'><Button variant="danger">Return</Button></LinkContainer>

        </div>
        
            
        </div>


            
        </div>
    )
}

export default Home
