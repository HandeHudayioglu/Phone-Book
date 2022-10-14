import {useState,useEffect} from 'react'

const initialFormValues = { fullname:"", phone_number:""};

function Form({addContact,contacts}) {

    const [form,setForm] = useState(initialFormValues);
     
    //contacts listesi değişirse değiştikten sonra(yani aslında kutucuklara yeni biri eklendikten sonra) kutucukların içi tekrar resetlensin diye
    useEffect(() => {
        setForm(initialFormValues); 
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});   //frontendte kutucuğa giren ismi set ediyor
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(form.fullname === ''  || form.phone_number===''){
            return false;
        }
        addContact([...contacts, form]);         //öceki kayıtların üstüne ekleniyor
       
       
    };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text"  name="fullname"  placeholder="Full Name"  onChange={onChangeInput}  value={form.fullname}/>   
      </div>

      <div>
        <input type="text" name="phone_number" placeholder="Phone Number"  onChange={onChangeInput} value={form.phone_number}/>  
      </div>

      <div className='btn'>
        <button> Add </button>     
      
      </div>
    </form>
  );
}

export default Form
