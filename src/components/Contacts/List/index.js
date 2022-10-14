import {useState} from 'react'

function List({contacts}) {
    const [filterText,setFilterText] = useState('');
    
    
    //placeholderıfilter contact olan kutucuğa ne yazarsak içinde onu içeren kayıtları döndürüyor. yani mesela kutuya e yazarsak esrayı ya da ayşeyi getirir ama hasanı getirmez
    // elimizdeki kaydı yani contacts ı aldık onu filtreledik
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    });

    console.log("filtered",filtered);
  return (
    <div>
        
        <input type="text"  placeholder="Filter Contact"  value={filterText}  onChange={(e) => setFilterText(e.target.value)} />
      <ul className='list'>
        {
            filtered.map((contact,i) => (
                <li key={i}>
                    <span> {contact.fullname}</span>
                    <span> {contact.phone_number}</span>
                </li>
            ))
        }
      </ul>

      <p>
        Total Contacts: {filtered.length}
      </p>
    </div>
  )
}

export default List
