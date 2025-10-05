import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h3 className={`${styles.heroSubText}`}>Ryan John Abraham</h3>
        <p>Bengaluru 560035</p>
        <p>Website: <a href="https://github.com/psykiq13">My Github Repository</a></p>
        <p>Phone Number: +91 7483876251</p>
          <p>email: ryanabraham004@gmail.com</p>
        
        <div className="flex flex-row justify-between">
         
          <a href="https://www.instagram.com/_gearverse_?igsh=ZGd3NmZja25nbzgz" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.youtube.com/@psyk1q" target="_blank"><img src="icons/yt.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.linkedin.com/in/ryan-john-abraham-533583246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
        
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")