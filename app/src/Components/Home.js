import React, { Component } from 'react'
import axios from 'axios';
import '../App.css'
// import data from './dynamic_data'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
   }
  
  getData = async()=>{
    const response =await axios.get(
      "http://localhost:4000/",{ crossdomain: true })
      this.setState({students: response.data.data})
      console.log(response.data,'the data')
    }
    componentDidMount() {
      this.getData()
    }

    render() {
    return (
      <div className='tstyle'>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
             {this.state.students.map( (d) => ( 
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
