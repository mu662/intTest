import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';



const mapStateToProps = state => ({ ...state.common });

const mapDispatchToProps = dispatch => ({
  
});

class UsersList extends React.Component {
  constructor() {
    super();
    this.state ={
     
    }
  }

 
 

  render() {
    const { usersList } = this.props;
    console.log('usersList',usersList)
    const imgPreview = (data)=>{
      return data.map((img)=>  <img src={img} alt="imge" style={{width:"50px",display: "block"}}/>)
      
    }
    return (
     <div className="container">
        <h2>Users List</h2>      
        <Link to={'register'}><button>Register User</button></Link>     
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Hobbies</th>
              <th>Images</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              usersList.data ?
                usersList.data.map((item,index)=>{
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td> <Moment format="MM/DD/YYYY">{item.dob}</Moment></td>
                      <td>{item.hobbies.join()}</td>
                      <td>{imgPreview(item.images)}</td>
                      <td><Link to={`/update/${item.id}`}>Update</Link></td>
                    </tr>
                  )
                })
              : null
            }
          </tbody>
        </table>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
