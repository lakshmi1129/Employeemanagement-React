import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Add() {

  const [empName,setName] = useState('')
  const [empDesig,setDesig] = useState('')
  const [empSal,setSal] = useState(0)
  const navigate = useNavigate()
  

  const handleSubmit= (event)=>{
    // to prevent Auto refresh
    event.preventDefault()
  // generate uuid
  const ids =uuid()
  let uniqueId = ids.slice(0,8)
  let salary =Number(empSal)


  Employee.push({
    empId: uniqueId,
    empName,
    empDesg:empDesig,
    empSalary:empSal
  })
  navigate('/')

  }

  return (
    <div className='my-5 p-5'>
      <h1 className='text-primary text-center'> Add New Employee Details</h1>
      <p style={{ 'text-align': 'justify' }}> This is a Dummy Content:     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <div className=' row'>
      <div className=' col-4'>
        <img className='mt-5' style={{"width":"300px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHrn-aMu0VMyhtVsWIHuxF5e8Bf51hfgliA&usqp=CAU'></img>
      </div>
      <div className=' col-8'>


        <Form className='border mt-3 p-5   '>
          

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Enter Employee Name"
            onChange={(event)=>setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesig">
            <Form.Control type="text" placeholder="Enter Employee Designation"
                        onChange={(event)=>setDesig(event.target.value)}
                        />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSal">
            <Form.Control type="text" placeholder="Enter Employee Salary" 
                        onChange={(event)=>setSal(event.target.value)}
                        />
          </Form.Group>


          <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className=' col-2'></div>
      </div>



    </div>
  )
}

export default Add