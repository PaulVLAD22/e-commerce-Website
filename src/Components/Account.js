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
    <div className="container-fluid">
        <h2>DOINK</h2>
        <h2>First Name:{userDetails.first_name}</h2>
        <h2>Last Name:{userDetails.last_name}</h2>
        <h2>Phone Number:{userDetails.phone_number}</h2>
        <h2>Country:{userDetails.address_country}</h2>
        <h2>City:{userDetails.address_city}</h2>
        <h2>Street:{userDetails.address_street}</h2>
        <h2>Postal Code:{userDetails.address_postal_code}</h2>
        <button onClick={updateUserDetails}>Change Data</button>
    </div>
  )
}
export default Account;