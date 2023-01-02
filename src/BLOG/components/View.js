import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({blogs,deleteBlog}) => {
    
    return blogs.map(blog=>(
        
        <tr key={blog.Subject}>
            <td>{blog.Subject}</td>
            <td>{blog.Description}</td>
            <td>{blog.Date}</td>
            <td className='delete-btn' onClick={()=>deleteBlog(blog.Subject)}>
                <Icon icon={trash}/>
            </td>      
        </tr>            
    
))
}
/**/