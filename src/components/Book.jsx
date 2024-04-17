import React from 'react';

function Book() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      services: {
        facial: event.target.Facial.checked,
        massage: event.target.Massage.checked,
        manicure: event.target.Manicure.checked,
        pedicure: event.target.Pedicure.checked,
        haircut: event.target.Haircut.checked,
        haircolor: event.target.Haircolor.checked,
        hairstyle: event.target.Hairstyle.checked,
        makeup: event.target.Makeup.checked,
      },
      date: event.target.date.value,
      time: event.target.time.value,
    };

    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData);
    event.target.reset();
  };

  return (
    <>
      <div className='background'>Book</div>
      <div className='info'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter full name' /><br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter email id"/><br />
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter phone number" /><br />
          
          <label htmlFor="selectService">Select Service</label>
          <div className='service-option'>
            <input type="checkbox" name="Facial" id="Facial" /> <label htmlFor="Facial">Facial</label><br />
            <input type="checkbox" name="Massage" id="Massage" /><label htmlFor="Massage">Massage</label><br />
            <input type="checkbox" name="Manicure" id="Manicure" /><label htmlFor="Manicure">Manicure</label><br />
            <input type="checkbox" name="Pedicure" id="Pedicure" /><label htmlFor="Pedicure">Pedicure</label><br />
            <input type="checkbox" name="Haircut" id="Haircut" /><label htmlFor="Haircut">Haircut</label><br />
            <input type="checkbox" name="Haircolor" id="Haircolor" /><label htmlFor="Haircolor">Haircolor</label><br />
            <input type="checkbox" name="Hairstyle" id="Hairstyle" /><label htmlFor="Hairstyle">Hairstyle</label><br />
            <input type="checkbox" name="Makeup" id="Makeup" /><label htmlFor="Makeup">Makeup</label><br />
          </div>
          <label htmlFor="date">Select date:</label>
          <input type="date" name="date" id="date" />

          <label htmlFor="time">Select time:</label>
          <input type="time" name="time" id="time" />
          
          <input type="submit" value="Submit" />
        </form>
      
      </div>
    </>
  );
}

export default Book;
