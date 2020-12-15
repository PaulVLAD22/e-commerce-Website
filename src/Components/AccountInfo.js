import React from 'react'
import ReactDOM from 'react-dom'
import AccountDetails from './Forms/AccountDetails'
const Account = ({userDetails}) =>{
  const updateUserDetails=()=>{
    ReactDOM.render(
      <AccountDetails data={Object.values(userDetails)}/>,
    document.getElementById('main'))
  }
  return(
    <div className="container-fluid account-info d-flex flex-column justify-content-between align-items-center">
        <h2>First Name:</h2>
        <h3>{userDetails.first_name}</h3>
        <h2>Last Name:</h2>
        <h3>{userDetails.last_name}</h3>
        <h2>Phone Number:</h2>
        <h3>{userDetails.phone_number}</h3>
        <h2>Country:</h2>
        <h3>{userDetails.address_country}</h3>
        <h2>City:</h2>
        <h3>{userDetails.address_city}</h3>
        <h2>Street:</h2>
        <h3>{userDetails.address_street}</h3>
        <h2>Postal Code:</h2>
        <h3>{userDetails.address_postal_code}</h3>
        <br></br>
        <button className="btn btn-dark" onClick={updateUserDetails}>Change Data</button>
    </div>
  )
}
export default Account;