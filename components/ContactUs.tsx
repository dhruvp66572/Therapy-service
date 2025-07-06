"use client";
import React from 'react'

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

   const data = {
      name: e.currentTarget[0].value,
      phone: e.currentTarget[1].value,
      email: e.currentTarget[2].value,
      message: e.currentTarget[3].value,
      preferredTime: e.currentTarget[4].value,
      agreeToContact: e.currentTarget[5].checked,
    }

    const response = window.confirm(`Thank you, ${data.name}! Your message has been sent. 
We will get back to you shortly.
      
  Details:
    Phone: ${data.phone}
    Email: ${data.email}
    Message: ${data.message}
    Preferred Time: ${data.preferredTime}
    Agree to Contact: ${data.agreeToContact ? "Yes" : "No"}    
      `)

    if (response) {
      // Here you would typically send the data to your server or API
      console.log("Form submitted:", data);
      e.currentTarget.reset(); // Reset the form after submission
    }

  }
  return (
    <section className="mx-auto py-16 px-4 bg-white/80 backdrop-blur-sm text-slate-600 border-t border-slate-100">      
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Dr. Blake</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-xl" required />
          <input type="tel" placeholder="Phone"  className="w-full p-3 border rounded-xl" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" required />
          <textarea placeholder="What brings you here?" className="w-full p-3 border rounded-xl" required></textarea>
          <input type="text" placeholder="Preferred time to reach you" className="w-full p-3 border rounded-xl" required />
          <label className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span>I agree to be contacted</span>
          </label>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs