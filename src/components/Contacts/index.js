import {useEffect, useState} from 'react'
import {} from './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts,setContacts] = useState([{
        fullname:'Ayşe',
        phone_number:'8488448'
    }, {
        fullname:'Ekrem',
        phone_number:'948488'
    }
]);

    useEffect(() =>{
         console.log(contacts);
    }, [contacts]);
  return (
    <div  id="container">
        <h1>Contact List</h1>
      <List contacts={contacts}/>  
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}



export default Contacts;
