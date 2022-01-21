import React,{useState,useEffect} from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import NewContact from "./components/NewContact";

function App() {
  // const contacts = [
  //   {
  //     name: "anjali",
  //     email: "anjali@gmail.com",
  //   },
  //   {
  //     name: "abc",
  //     email: "agnfi@gmail.com",
  //   },
  //   {
  //     name: "dcf",
  //     email: "ryeei@gmail.com",
  //   },
  // ];

  const [contacts, setContacts] = useState([])

  const getData=(a)=>{
    console.log(a)
setContacts([...contacts,{...a}])
  }
  
useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts))
},[contacts]);


  return (
    <div className="w-50 mx-auto">
      <Header></Header>
      <hr className=" w-50  mx-auto" />
      <hr className=" w-50  " />
      {/* <AddContact addData={getData}/> */}
      <NewContact getData={getData}/>
      <hr className="w-50  mx-auto" />
      <hr className="w-50  " />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
