import React from "react";
import "./form.css";

const Form = () => {
  const [category, setcategory] = React.useState("")
  const [result, setResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false); 
  
  const showdetails = (event1) => {
    setcategory(event1.target.value);
  }

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
        setcategory("");
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
      <div className="contact-left"></div>
      <form className="contact-right" onSubmit={onSubmit}>
        <select id="category" value={category} onChange={showdetails} className="details-select">
          <option value="">Select</option>
          <option value="college">College Trip</option>
          <option value="family">Family Trip</option>
        </select>
        {category === "college" && (
          <div className="college-details">
            <input type="text" name="name" required placeholder={"Name"} />
            <input type="tel" name="number" required placeholder={"Contact"} />
            <input type="text" name="clgname" placeholder={"College name"} />
            <input type="text" name="clglocation" placeholder={"College Location"}/>
            <input type="text" name="busname1" required placeholder={"Preferred bus1"} />
            <input type="text" name="busname2" placeholder={"Preferred bus2 (option)"} />
            <input type="text" name="busname3" placeholder={"Preferred bus3 (option)"} />
            <input type="text" name="busname4" placeholder={"Preferred bus4 (option)"} />
            <textarea type="text" name="packages" placeholder={"Selected package or Enter your idea"} />
            <div className="form-date-container">
              <input type="date" name="startdate" required placeholder={"IV Start Date"} />
              <input type="date" name="enddate" required placeholder={"IV End Date"} />
            </div>
            <textarea name="message" placeholder="Any doubts?"></textarea>
          </div>
        )}
        {category === "family" &&(
          <div className="family-details">
            <input type="text" name="name" required placeholder={"Name"} />
            <input type="tel" name="number" required placeholder={"Contact"} />
            <input type="text" name="location" required placeholder={"Pickup location"} />
            <input type="number" name="count" required placeholder={"Total Count"} />
            <input type="text" name="busname1" placeholder={"Preferred bus1 (option)"} />
            <input type="text" name="busname2" placeholder={"Preferred bus2 (option)"} />
            <div className="form-date-container">
              <input type="date" name="startdate" required placeholder={"Start Date"} />
              <input type="date" name="enddate" required placeholder={"End Date"} />
            </div>
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
