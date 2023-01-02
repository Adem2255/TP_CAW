import React, { useState, useEffect } from 'react'
import { View } from './components/View';
import './contact.css'
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
const getDatafromLS = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}
export const Cont = () => {

  const [contacts, setcontacts] = useState(getDatafromLS());
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');


  const handleAddContactSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let contact = {
      Name,
      Phone,
      Email
    }
    setcontacts([...contacts, contact]);
    setName('');
    setPhone('');
    setEmail('');
  }

  const deleteContact = (Name) => {
    const filteredContacts = contacts.filter((element, index) => {
      return element.Name !== Name
    })
    setcontacts(filteredContacts);
  }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  return (
    <div className='wrapper'>
      
        <div style={{width: 24, height: 24}}>
            <Icon size={'100%'} icon={home}/>
        </div>
     
      <h1>Contacts </h1>
      <p>Add and view your Contacts</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddContactSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => setName(e.target.value)} value={Name} ></input>
            <br></br>
            <label>Phone</label>
            <input type="number" className='form-control' required
              onChange={(e) => setPhone(e.target.value)} value={Phone}></input>
            <br></br>
            <label>Email</label>
            <input type="text" className='form-control' required
              onChange={(e) => setEmail(e.target.value)} value={Email}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {contacts.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View contacts={contacts} deleteContact={deleteContact} />


                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
              onClick={() => setcontacts([])}>Remove All</button>
          </>}
          {contacts.length < 1 && <div>No contacts are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default Cont;









