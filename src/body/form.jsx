import React from 'react'
import './form.css'
const Form = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01f0741a-3c11-490d-bdb7-0ade05f455ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-container'>
        <div className="contact-left">

        </div>
      <form  className='contact-right' onSubmit={onSubmit}>
        <input type="text" name="name1" required placeholder={"Name 1"}/>
        <input type="number" name='number1' required placeholder={"Contact 1"}/>
        <input type="text" name="name2" required placeholder={"Name 2"}/>
        <input type="number" name='number2' required placeholder={"contact 2"}/>
        <input type="text" name='clgname' required placeholder={"Enter your college name"}/>
        <input type="text" name='busname1' required placeholder={"Preffered bus1"}/>
        <input type="text" name='busname2' required placeholder={"Preffered bus2"}/>
        <input type="text" name='busname3' required placeholder={"Preffered bus3"}/>
        <input type="date" name='startdate' required placeholder={"IV Start Date"}/>
        <input type="date" name='enddate' required placeholder={"IV End Date"}/>
        <textarea name="message" placeholder='Any doughts?'></textarea>
        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>

  )
}

export default Form