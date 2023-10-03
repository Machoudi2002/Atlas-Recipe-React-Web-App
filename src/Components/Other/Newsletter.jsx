import React, { useState } from 'react'

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("")
    const [btnValue, setBtnValue] = useState("Subscribe")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setBtnValue("Done")
        }, 800);
        setTimeout(() => {
            setBtnValue("Subscribe");
        }, 2000)

    }

  return (
    <div className="container">
        <div className="newsletter">
            <h3 className='text-center display-6'>Subscribe To Our Newsletter</h3>
            <p>Stay in the loop with the latest culinary delights and mouthwatering recipes delivered right to your inbox! 
                Join our newsletter community to receive exclusive recipes, cooking tips, and foodie inspiration.</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="email" placeholder='Type Your Email' required />
                <input className='submit-btn' type="submit" value={btnValue} />
            </form>
        </div>

    </div>
  )
}

export default Newsletter