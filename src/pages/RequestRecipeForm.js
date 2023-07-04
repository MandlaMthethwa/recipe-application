import React, { useState } from 'react';
import Waiter from '../images/request.jpeg';
function RequestRecipeForm() {
  const [formData, setFormData] = useState({
    email: '',
    recipeName: '',
    category: '',
    details: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    // Reset the form
    setFormData({
      email: '',
      recipeName: '',
      category: '',
      details: '',
      contactNumber: '',
    });
  };

  return (
    <section className="order" id="order">
    
      <h2>Request Recipe</h2>
      <div className="row">
        
        <div className="image">
            <img src={Waiter} alt=""/>
        </div>
      <form onSubmit={handleSubmit}>


        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div> <br/>
        <div className="inputBox">
          <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder="Enter your contact number"
            onChange={handleChange}
            required
          />
        </div> <br/>
        <div className="inputBox">
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            value={formData.recipeName}
            placeholder="Enter Recipe Name"
            onChange={handleChange}
            required
          />
        </div> <br/>
        <div className="inputBox">
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            placeholder="Enter the Category"
            onChange={handleChange}

            required
          />
        </div> <br/>
        <div className="inputBox">
          <textarea
            id="details"
            name="details"
            value={formData.details}
            placeholder="Any little detail will be appreciated"
            onChange={handleChange}
            required
          ></textarea>
        </div> <br/>
       
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
}

export default RequestRecipeForm;
