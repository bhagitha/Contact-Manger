import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap';
import './AppContact.css';

function AddContact(props){
  const [contacts, setContacts] = useState({
    name:'' ,
    email:''
  })
 
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContacts({
        ...contacts,
        [name]: value
    })
}
    function fcnAdd() {
    console.log("name: " + contacts.name + " email : " + contacts.email);
    props.addData(contacts);
  }
    return(
<>
<Form className='container' onSubmit={fcnAdd}>
  <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
    <Form.Label >Name</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter name" 
    value={contacts.name} 
    onChange={handleInputChange} className='border-info' />
   
  </Form.Group>

  <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" 
    placeholder="email" 
    value={contacts.email} 
    onChange={handleInputChange} className='border-info'/>
  </Form.Group>

  <Button variant="info" className='text-light' type="submit">
    Add Contact
  </Button>
</Form>
</>
    );
}
 export default AddContact;