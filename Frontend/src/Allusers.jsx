import React, { useState } from 'react';
import './Allusers.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Update from './Update'



const AllUsers = () => {
  const [users, setUsers] = useState([]);
  // State to track the user's search query
  const [searchId, setSearchId] = useState('');
  const [IsDeleting, setIsDeleting] = useState(false);



  const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/student");
        setUsers(response.data.user);
      } catch (err) {
        console.error('Failed to fetch students', err);
      }
    };
  
  React.useEffect(() => {
  
    
    fetchUsers();
   
  }, []);

  // Filter users based on the search query matching the ID
  // Note: Adjust 'user.id' to 'user._id' if your MongoDB/backend explicitly uses '_id'
  const filteredUsers = users.filter((user) => {
    const userId = user.student_id || user._id || '';
    return userId.toString().toLowerCase().includes(searchId.toLowerCase());
  });


  const DeleteStudebt = async (id)=>{

     if(IsDeleting) return;
    try{

      setIsDeleting(true)




      await axios.delete(`http://localhost:7000/api/v1/student/${id}`)

      // setUsers(users.filter( (user)=>user.id!=id ))
      fetchUsers();


      setTimeout( async ()=>{
         setIsDeleting(false)

      },5000)
     
    }
    catch(err){
      console.log(err)
    }
  }




  return (
    <div className="users-container">
      <div className="users-header">
        <h2>Registered Students Roster</h2>
        <span className="user-count">Total Students: {users.length}</span>
      </div>

      {/* Search Bar Section */}
      <div className="search-container" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Student ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="search-input"
          style={{
            padding: '8px 12px',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>




      

      {filteredUsers.length === 0 ? (
        <p className="no-users">No student records found matching that ID.</p>
      ) : (
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Actions Status</th>
              </tr>
            </thead>
            <tbody>





              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td><strong>{user.student_id }</strong></td> 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><span className="badge-course">{user.course}</span></td>
                  <td>Sem {user.semester}</td>


                  <td>
                   
                    <div className="action-buttons" style={{ display: 'flex', gap: '8px' }}>
                      <button 
                      onClick={<update userid={user._id}/>}
                        
                        className="btn-edit"
                        style={{ padding: '4px 8px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px'   }}
                      >

                        <Link to ={"/update/" + user._id }  element ={<Update></Update>}> Edit </Link>
                        {/* console.log({user.student_id}) */}


                        {/* <Link to={`http://localhost:7000/api/v1/stude${user._id}`} element={<Update></Update>} >  Edit</Link>   */}

                         
                         
    {/* <BrowserRouter>
      

      <Routes>
        
          <Route path='/update/:id' element={<Update ></Update>}></Route>
      </Routes>
    </BrowserRouter>
                        */}

                        
                      </button>


                      <button 
                        disabled ={IsDeleting}
                        onClick={()=>DeleteStudebt(user._id)}
                        className="btn-delete"
                        style={{ padding: '4px 8px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px'  }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>






                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;