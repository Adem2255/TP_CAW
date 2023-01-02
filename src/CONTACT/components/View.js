import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({contacts,deleteContact}) => {
    
    return contacts.map(contact=>(
        
        <tr key={contact.Name}>
            <td>{contact.Name}</td>
            <td>{contact.Phone}</td>
            <td>{contact.Email}</td>
            <td className='delete-btn' onClick={()=>deleteContact(contact.Name)}>
                <Icon icon={trash}/>
            </td>      
        </tr>            
    
))
}
/**/