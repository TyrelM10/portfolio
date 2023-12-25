import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Alert, Button, Typography } from "@material-tailwind/react";
// wShll1225v_ry6mNe
// template_e5ld3v9
// service_6suwq24
function WrongIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const [open, setOpen] = React.useState(false);

  const [openerror, setError] = React.useState(false);
  const [opensuccess, setSuccess] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    setOpen(true);

    emailjs
      .send(
        "service_6suwq2",
        "template_e5ld3",
        {
          from_name: form.name,
          to_name: "Tyrel",
          from_email: form.email,
          to_email: "tjmenezes08@gmail.com",
          message: form.message,
        },
        "wShll1225v_ry6mNe"
      )
      .then(
        () => {
          setloading(false);
          // alert("THANK YOU. I WILL GET BACK TO YOU AS SOON AS POSSIBLE.");
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          setError(true);
        }
      );
  };

  return (
    <div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex relative gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-3 flex flex-col gap-2"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-1"
            >
              {loading ? "Sending...." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <div className={openerror ? "flex mt-5 relative z-99" : "hidden"}>
        <Alert
          variant="gradient"
          open={open}
          color="red"
          className={open ? "max-w-screen-md" : "hidden"}
          icon={<WrongIcon />}
          onClose={() => {
            setOpen(false);
            setError(false);
          }}
        >
          <Typography variant="h5" color="white">
            Error
          </Typography>
          <Typography color="white" className="font-normal">
            Sorry, Something went Wrong !! <br />
            Please Try Again.
          </Typography>
        </Alert>
      </div>

      <div className={opensuccess ? "flex mt-5 relative z-99" : "hidden"}>
        <Alert
          variant="gradient"
          open={open}
          color="green"
          className={open ? "max-w-screen-md" : "hidden"}
          icon={<SuccessIcon />}
          onClose={() => {
            setOpen(false);
            setSuccess(false);
          }}
        >
          <Typography variant="h5" color="white">
            Success
          </Typography>
          <Typography color="white" className="font-normal">
            Thank you for Contacting. <br />I shall get back to you. Cheers !!
          </Typography>
        </Alert>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
