// import React, { Component } from "react";

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <section class="text-gray-600 body-font relative">
//           <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//             <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0"
//                 frameBorder="0"
//                 title="map"
//                 marginHeight="0"
//                 marginWidth="0"
//                 scrolling="no"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
//                 style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//               ></iframe>

//               <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div class="lg:w-1/2 px-6">
//                   <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p class="mt-1">
//                     Photo booth tattooed prism, portland taiyaki hoodie neutra
//                     typewriter
//                   </p>
//                 </div>
//                 <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     EMAIL
//                   </h2>
//                   <a class="text-red-500 leading-relaxed">example@email.com</a>
//                   <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//                     PHONE
//                   </h2>
//                   <p class="leading-relaxed">123-456-7890</p>
//                 </div>
//               </div>
//             </div>
//             <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//               <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
//                 Feedback
//               </h2>
//               <p class="leading-relaxed mb-5 text-gray-600">
//                 Post-ironic portland shabby chic echo park, banjo fashion axe
//               </p>
//               <div class="relative mb-4">
//                 <label for="name" class="leading-7 text-sm text-gray-600">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div class="relative mb-4">
//                 <label for="email" class="leading-7 text-sm text-gray-600">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <div class="relative mb-4">
//                 <label for="message" class="leading-7 text-sm text-gray-600">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                 ></textarea>
//               </div>
//               <button class="text-white bg-teal-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
//                 Button
//               </button>
//               <p class="text-xs text-gray-500 mt-3">
//                 Chicharrones blog helvetica normcore iceland tousled brook viral
//                 artisan.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Contact;

// import React, { Component } from "react";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// class Contact extends Component {
//   handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await emailjs.sendForm(
//         "service_305ckpo",
//         "template_vec5hme",
//         e.target,
//         "9qrxbi4XspqhL97K6"
//       );

//       // Show success toast
//       toast.success("Feedback sent successfully");

//       // Clear form fields
//       e.target.reset();
//     } catch (error) {
//       console.error("Error sending feedback:", error);
//       toast.error("Error sending feedback");
//     }
//   };

//   render() {
//     return (
//       <div>
//         <section className="text-gray-600 body-font relative">
//           <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//             <form onSubmit={this.handleSubmit} className="w-full">
//               <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//                 <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//                   Feedback
//                 </h2>
//                 <p className="leading-relaxed mb-5 text-gray-600">
//                   Post-ironic portland shabby chic echo park, banjo fashion axe
//                 </p>
//                 <div className="relative mb-4">
//                   <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//                 <div className="relative mb-4">
//                   <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//                 <div className="relative mb-4">
//                   <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="text-white bg-teal-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//         {/* Toast container */}
//         <ToastContainer position="bottom-right" autoClose={3000} />
//       </div>
//     );
//   }
// }

// export default Contact;
import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Contact.css";


class Contact extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_305ckpo",
        "template_vec5hme",
        e.target,
        "9qrxbi4XspqhL97K6"
      );

      // Show success toast
      toast.success("Feedback sent successfully");

      // Clear form fields
      e.target.reset();
    } catch (error) {
      console.error("Error sending feedback:", error);
      toast.error("Error sending feedback");
    }
  };

  render() {
    return (
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>

              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a href="mailto:example@email.com" className="text-red-500 leading-relaxed">skyvacollections@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <form onSubmit={this.handleSubmit} className="w-full">
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button type="submit" className="text-white bg-teal-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <div>
        <div class="card">
  <a href="#" class="socialContainer containerOne">
    <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a href="#" class="socialContainer containerTwo">
    <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a href="#" class="socialContainer containerThree">
    <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a href="#" class="socialContainer containerFour">
    <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>
</div>             


        </div>
        {/* Toast container */}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    );
  }
}

export default Contact;
