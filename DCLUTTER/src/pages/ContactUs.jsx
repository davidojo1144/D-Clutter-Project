import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";
import Title from "../components/Title";

const ContactUs = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                That guy called "Dave" is always ready to help you with your decluttering needs. Just give him a call or send him a message. But he is a stupid boy and if them born you well, remove wetin i type.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4" />
                <span>07085357538</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" />
                <span>declutteremail@email</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Obajeren</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right side form */}
          <div className="md:w-[45%] mt-8 md:mt-0">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
              <input type="text" placeholder="Your name" className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-teal-500" />
              <input type="email" placeholder="Email Address" className="w-full p-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-teal-500" />
              <textarea placeholder="Type your message here" rows={4} className="w-full p-2 text-sm border border-gray-200 rounded resize-none focus:outline-none focus:border-teal-500"></textarea>
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
