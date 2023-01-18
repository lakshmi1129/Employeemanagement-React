import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  // console.log(Employee);

  const navigate =useNavigate()

  const handleDelete = (empId)=>{
    console.log(empId);
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    Employee.splice(index,1)
    console.log(Employee);
    navigate('/')
  }
const handleEdit =(empId,empName,empDesg,empSalary)=>{
  localStorage.setItem("empId",empId)
  localStorage.setItem("empName",empName)
  localStorage.setItem("empDesg",empDesg)
  localStorage.setItem("empSalary",empSalary)

}
  

  return (

    <div className='container'>
      <h1 className='text-center text-primary my-5 mx-5'> List of Employees &nbsp;
       <Link to={'/add'}> <Button variant="success"> <i class="fa-sharp fa-solid fa-user-plus"></i>Add</Button> </Link>
      </h1>
      <p style={{'text-align': 'justify'}}> This is a Dummy Content:     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <div style={{ margin: "8rem" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Designation</th>
              <th>Employee Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              Employee && Employee.length>0 ?
              Employee.map((item)=>(
              <tr>
                <td>{item.empName}</td>
                <td>{item.empDesg}</td>
                <td>{item.empSalary}</td>
                <td>
                  &nbsp;
                  <Link to={'/edit'}>
                  <Button  onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSalary)} variant="warning">
                    <i class="fa-solid fa-user-pen"></i>
                  </Button>
                  </Link>
                  &nbsp; &nbsp; &nbsp;
                  <Button onClick={()=>handleDelete(item.empId)} variant="danger">
                    <i class="fa-solid fa-trash-can"></i>
                  </Button>
                </td>
              </tr>
               ))
               : " No data to Display"
            }


          </tbody>
        </Table>

      </div>
    </div>
  )
}

export default Home