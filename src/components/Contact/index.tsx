import Image from "next/image";
import React, { useRef, useState } from "react";
import discord from "@/assets/icons/discord.svg";
import mail from "@/assets/icons/mail.svg";
import coffee from "@/assets/icons/coffe.webp";
import { toast } from "sonner";
import { ParticlesComponent } from "../Particles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const normalForm = useRef<any>(null);
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSendMessage = (e: any) => {
    e.preventDefault();

    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.message === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    } else {
      setSendingMessage(true);
      emailjs
        .sendForm(
          "service_6a5f4pw",
          "template_buzw25j",
          normalForm.current,
          "cDd6JvoNoNSWwVz-M"
        )
        .then(
          (response) => {
            setSendingMessage(false);
            console.log("SUCCESS!", response);
            toast.success("Message sent successfully!!!🎊🎊🎊");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setSendingMessage(false);
            toast.error("Something went wrong");
            console.log(error);
          }
        );
    }
  };
  return (
    <div className="relative w-full px-[2rem] py-3 md:pr-[110px] pb-[120px] md:pb-[0px] h-full">
      <div>
        <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem] md:mt-[3rem]">
          <span className="text-primary">{"</>"}</span>Contact Me
        </h2>
      </div>
      <div className="md:flex md:justify-between md:gap-12">
        <div>
          <p className="text-grey mb-3 font-sans mt-4 font-semibold text-[0.8rem] md:text-[1.2rem]">
            {" "}
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="mt-[3rem] flex flex-col gap-8">
            <div className="border border-grey p-[1rem] md:p-[2rem] rounded-lg md:w-[450px]">
              <h3 className="text-grey mb-3 font-sans mt-2 font-semibold text-[1.2rem] md:text-[1.5rem]">
                Message me here
              </h3>
              <div className="flex items-center gap-3 mt-8">
                <Image src={discord} alt="discord" />
                <p className="text-grey font-sans font-semibold text-[0.8rem] md:text-[1.2rem]">
                  nametheman
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <Image src={mail} alt="mail" />
                <p className="text-grey font-sans font-semibold text-[0.8rem] md:text-[1.2rem]">
                  owoemma59@gmail.com
                </p>
              </div>
            </div>
            <div className="border border-grey p-[1rem] md:p-[2rem] rounded-lg md:w-[350px]">
              <h3 className="text-grey mb-3 font-sans mt-2 font-semibold text-[1.2rem] md:text-[1.5rem]">
                Buy Me a Coffee
              </h3>

              <a href="https://www.buymeacoffee.com/owoemma594" target="_blank">
                <Image src={coffee} alt="coffee" className="w-[150px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[3rem] md:mt-0 border border-grey p-[1rem] md:p-[2rem] rounded-lg">
          <h3 className="text-grey mb-3 font-sans mt-2 font-semibold text-[1.2rem] md:text-[1.5rem]">
            Send Me a Message
          </h3>
          <p className="text-grey mb-3 font-sans mt-2 font-semibold text-[0.8rem] md:text-[0.9rem]">
            You can also send me a message using this form. I will respond
            immediately, trust me.
          </p>
          <form action="" className="flex flex-col gap-6" ref={normalForm}>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="from_name" className="text-grey text-[0.9rem]">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                className="border border-grey rounded h-[40px] outline-none px-4 bg-transparent text-white"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="from_email" className="text-grey text-[0.9rem]">
                Email Address{" "}
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                className="border border-grey rounded h-[40px] outline-none px-4 bg-transparent text-white"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-grey text-[0.9rem]">
                Message{" "}
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none bg-transparent rounded h-[160px] outline-none p-4 border border-grey text-white"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              className="bg-primary text-white px-[1rem] py-[0.5rem] font-sans text-[0.8rem] rounded h-[40px]"
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ParticlesComponent />
    </div>
  );
};

export default Contact;
