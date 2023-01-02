import React, { useState, useEffect } from 'react'
import { View } from './components/View';
import './blog.css'
const getDatafromLS = () => {
    const data = localStorage.getItem('blogs');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}
export const Blog = () => {

    const [blogs, setblogs] = useState(getDatafromLS());
    const [Subject, setSubject] = useState('');
    const [Description, setDescription] = useState('');
    const [Date, setDate] = useState('');


    const handleAddblogSubmit = (e) => {
        e.preventDefault();
        // creating an object
        let blog = {
            Subject,
            Description,
            Date
        }
        setblogs([...blogs, blog]);
        setSubject('');
        setDescription('');
        setDate('');
    }

    const deleteBlog = (Subject) => {
        const filteredBlogs = blogs.filter((element, index) => {
            return element.Subject !== Subject
        })
        setblogs(filteredBlogs);
    }
    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs])
    return (
        <div className='wrapper'>
            <h1>Blogs </h1>
            <p>Add and view your Blogs</p>
            <div className='main'>
              
                <div className='form-container'>
                    <form autoComplete="off" className='form-group'
                        onSubmit={handleAddblogSubmit}>
                        <label>Subject</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setSubject(e.target.value)} value={Subject} ></input>
                        <br></br>
                        <label>Description</label>
                        <textarea type="text" className='form-control' required
                            onChange={(e) => setDescription(e.target.value)} value={Description}></textarea>

                      
                        <br></br>
                        <label>Date</label>
                        <input type="date" className='form-control' required
                            onChange={(e) => setDate(e.target.value)} value={Date}></input>
                        <br></br>
                        <button type="submit" className='btn btn-success btn-md'>
                            ADD
                        </button>
                    </form>
                </div>

                <div className='view-container'>
                    {blogs.length > 0 && <>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <View blogs={blogs} deleteBlog={deleteBlog} />


                                </tbody>
                            </table>
                        </div>
                        <button className='btn'
                            onClick={() => setblogs([])}>Remove All</button>
                    </>}
                    {blogs.length < 1 && <div>No blogs are added yet</div>}
                </div>

            </div>
        </div>
    )
}

export default Blog;









