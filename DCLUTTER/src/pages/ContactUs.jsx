import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";
import Title from "../components/Title";
import { toast } from "react-toastify";


const ContactUs = () => {
  const token = localStorage.getItem("token")

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setFormData({
      ...formData, 
      [name]: value, 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!token) {
      toast.error("You must be logged in first")
      return
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    console.log("Form submitted:", formData);
    toast.success("Form Submitted Successfully")
  };

  
  return (
    <div>
      <div className="container text-center md:text-3xl text-xl">
        <Title text1={"CONTACT"}  text2={"US"}/>
      </div>
    <div className="flex justify-center items-center  bg-gray-100 p-4">
      <div className="w-full max-w-4xl shadow-2xl bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-400/30 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="flex flex-col md:flex-row justify-between relative z-10">
          {/* Left side content */}
          <div className="text-white  md:w-[45%] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-teal-50 text-sm">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is here to help. Reach out to us through any of the channels below, and we’ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4" />
                <span>+234-8200000000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" />
                <span>Dclutteremail@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Lagos</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right side form */}
          <div className="md:w-[45%] mt-8 md:mt-0">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-teal-500" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-teal-500" />
              <textarea placeholder="Type your message here" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full p-2 text-sm border border-gray-200 rounded resize-none focus:outline-none focus:border-teal-500"></textarea>
              <button type="submit" className="w-full bg-teal-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-teal-700 transition-colors">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs
