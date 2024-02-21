import React from 'react';

function Book(){
  return (<>
    <div className='background'>Book</div>
    <div className='info'>
    <form action="">
    <label htmlFor="Name">Name</label>
    <input type="text" name="name" id="name" placeholder='Enter full name' /><br />
    <label htmlFor="email" >Email</label>
    <input type="email" name="email" id="email" placeholder="Enter email id"/><br />
    <label htmlFor="Phone number" >Phone number</label>
    <input type="tel" placeholder="Enter phone number" /><br />
    
    <label htmlFor="select service ">Select Service</label>
    <div className='service-option'> <input type="checkbox" name="Facial" id="Facial" /> <label htmlFor="Facial">Facial</label><br />
    <input type="checkbox" name="Massage" id="Massage" /><label htmlFor="Massage">Massage</label><br />
    <input type="checkbox" name="Manicure" id="Manicure" /><label htmlFor="Manicure">Manicure</label><br />
    <input type="checkbox" name="Pedicure" id="Pedicure" /><label htmlFor="Pedicure">Pedicure</label><br />
    <input type="checkbox" name="Haircut" id="Haircut" /><label htmlFor="Haircut">Haircut</label><br />
    <input type="checkbox" name="Haircolor" id="Haircolor" /><label htmlFor="Haircolor">Haircolor</label><br />
    <input type="checkbox" name="Hairstyle" id="Hairstyle" /><label htmlFor="Hairstyle">Hairstyle</label><br />
    <input type="checkbox" name="Makeup" id="Makeup" /><label htmlFor="Makeup">Makeup</label><br />
    </div>
    <label htmlFor="Date">Select date:</label>
    <input type="date" name="date" id="date" />

    <label htmlFor="Time">Select time:</label>
    <input type="time" name="time" id="time" />
    
    <input type="submit" value="Submit" />
   </form>
    </div>
    </>
    
  )
}

export default Book;