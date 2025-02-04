import React, { useState } from "react";
import "./form.css";
import gmail from "../assets/gmail-icon.png"
import phone from "../assets/phone-icon.png"
const Form = () => {
  const [category, setCategory] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showDetails = (event) => {
    setCategory(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "01f0741a-3c11-490d-bdb7-0ade05f455ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
        setCategory("");
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
      <h2>Let's <span>Plan Your Trip</span></h2>
        <p>We provide the best IV and family trip bus services.</p>
        <p>Contact us for bookings and inquiries.</p>
        <div className="contact-info">
        <div className="contact-info-item">
          <img src={gmail} alt="Gmail" className="contact-icon" />
          <p>Gsgroupsweb@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <img src={phone} alt="Phone" className="contact-icon" />
          <p>+916374544470</p>
        </div>
      </div>
      </div>
      <form className="contact-right" onSubmit={onSubmit}>
        <select id="category" value={category} onChange={showDetails} className="details-select">
          <option value="">Select</option>
          <option value="college">College Trip</option>
          <option value="family">Family Trip</option>
        </select>
        {category === "college" && (
          <div className="college-details">
            <input type="text" name="name" required placeholder="Name" />
            <input type="tel" name="number" required placeholder="Contact" />
            <input type="text" name="clgname" placeholder="College Name" />
            <input type="text" name="clglocation" placeholder="College Location" />
            <input type="text" name="busname1" required placeholder="Preferred Bus 1" />
            <input type="text" name="busname2" placeholder="Preferred Bus 2 (optional)" />
            <textarea name="packages" placeholder="Selected package or Enter your idea"></textarea>
            <div className="form-date-container">
              <input type="date" name="startdate" required placeholder="Start Date" />
              <input type="date" name="enddate" required placeholder="End Date" />
            </div>
            <textarea name="message" placeholder="Any doubts?"></textarea>
          </div>
        )}
        {category === "family" && (
          <div className="family-details">
            <input type="text" name="name" required placeholder="Name" />
            <input type="tel" name="number" required placeholder="Contact" />
            <input type="text" name="location" required placeholder="Pickup Location" />
            <input type="number" name="count" required placeholder="Total Count" />
            <textarea name="message" placeholder="Any doubts?"></textarea>
          </div>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit Form"}
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Form;
