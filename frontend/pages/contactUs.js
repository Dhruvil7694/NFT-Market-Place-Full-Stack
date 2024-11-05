import React, { useState, useEffect } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { FaExclamation } from "react-icons/fa";

import style from "../styles/contactUs.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import { Button } from "@/components/componentIndex";
const contactUs = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailRegex.test(email));
  }, [email]);
  return (
    <div className={style.contactUs}>
      <div className={style.contactUs_box}>
        <h1>
          Be a Game-Changer: Join Us
          <FaExclamation />
        </h1>
        <div className={style.contactUs_box_box}>
          <div className={style.contactUs_box_box_left}>
            <div className={style.contactUs_box_box_left_item}>
              <h3>🏠 ADDRESS</h3>
              <p>75352 Charlott Row, South Coryborough, MA 38960</p>
            </div>
            <div className={style.contactUs_box_box_left_item}>
              <h3>✉️ EMAIL</h3>
              <p>name@email.com</p>
            </div>
            <div className={style.contactUs_box_box_left_item}>
              <h3>☎️ PHONE</h3>
              <p>000-123-456-7890</p>
            </div>
            <div className={style.contactUs_box_box_left_item}>
              <h3>🌍 SOCIALS</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={style.contactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your full name"
                  className={formStyle.Form_box_input_username}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: isValid ? "initial" : "red" }}
                  />
                </div>
                {!isValid && (
                  <p className="error-message">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="something about yourself in few words"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
