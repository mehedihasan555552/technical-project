import React,{useState} from 'react'
import { Button, Form,FormControl,Table } from 'react-bootstrap'
import '../App.css';
import { useHistory } from 'react-router-dom'


function Search() {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history.push(`/?keyword=${keyword}`)
        }else{
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <div>

                <div className="search">

                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>

                </div>
            
        </div>
    )
}

export default Search
