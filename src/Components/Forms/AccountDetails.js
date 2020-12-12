import React, { useState } from 'react';
// verifici daca sunt deja completate atunci le afisezi cu un buton de a le modifica 
// daca nu form cu inputurile necesare din baza de date
const AccountDetails= () =>{
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [country,setCountry] = useState('');
  const [city,setCity] = useState('');
  const [street,setStreet] = useState('');
  const [postalCode,setPostalCode]= useState('');

  const onChangeFirstName = (e) =>{
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e) =>{
    setLastName(e.target.value)
  }
  const onChangePhoneNumber = (e) =>{
    setPhoneNumber(e.target.value)
  }
  const onChangeCountry = (e) =>{
    setCountry(e.target.value)
  }
  const onChangeCity = (e) =>{
    setCity(e.target.value)
  }
  const onChangeStreet = (e) =>{
    setStreet(e.target.value)
  }
  const onChangePostalCode = (e) =>{
    setPostalCode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validInput()){
      console.log("Form submitted");
      //post catre php si se face in account details linie
    }
  }

  const validInput= () => {
    return true;
  }

  return (
    <>
    <article>
      <form className="form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
        <div className='form-control row'>
          <label htmlFor="firstName">First Name : </label>
          <input value={firstName}
          onChange={onChangeFirstName}
           type="text" id="firstName" name="firstName"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="lastName">Last Name : </label>
          <input value={lastName}
          onChange={onChangeLastName}
           type="text" id="lastName" name="lastName"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="phoneNumber">Phone : </label>
          <input value={phoneNumber}
          onChange={onChangePhoneNumber}
           type="text" id="phoneNumber" name="phoneNumber"/>
        </div>
        <h2>Delivery Information:</h2>
        <div className='form-control row'>
          <label htmlFor="country">Country : </label>
          <input value={country}
          onChange={onChangeCountry}
           type="text" id="country" name="country"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="city">City : </label>
          <input value={city}
          onChange={onChangeCity}
           type="text" id="city" name="city"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="street">Street(name and nr) : </label>
          <input value={street}
          onChange={onChangeStreet}
           type="text" id="street" name="street"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="postalCode">Postal Code : </label>
          <input value={postalCode}
          onChange={onChangePostalCode}
           type="text" id="postalCode" name="postalCode"/>
        </div>

        <button className="btn-dark" type="submit">Save</button>
      </form>
    </article>
    </>
  )
}
export default AccountDetails