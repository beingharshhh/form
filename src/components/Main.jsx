import React, { useState } from "react";
import "./Main.css";
import Select from "react-select";
export default function Main() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [skills, setSkills] = useState([]);
  const [selectPlaceholder, setSelectPlaceholder] = useState(
    "Choose your skills"
  );

  const changeName = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setUserName(e.target.value);
  };

  const changeEmail = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setPassword(e.target.value);
  };

  const changeSkills = (e) => {
    e.map((info) => {
      console.log(info);
      setSkills((prev) => [...prev, { ...info }]);
    });
    setSkills([...e]);
    console.log(e);
    console.log(skills);
  };
  if (
    userName.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    skills.length > 0
  ) {
    document.querySelector(".claim-button").classList.add("claimed");
  }
  let Subscribed = document.querySelector(".try-label");
  const [confirm, setConfirm] = useState(
    "Try it free 7 days then ₹180/mo. thereafter"
  );
  function submitFunction() {
    if (
      userName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      skills.length === 0
    ) {
      console.log("eroor");
    } else {
      setUserName("");
      setEmail("");
      setPassword("");
      setSkills("");
      setConfirm("You have Successfully Subscribed to our plan ✓");
      Subscribed.classList.add("subed");
      document.querySelector(".claim-button").classList.remove("claimed");
    }
  }

  function Again() {
    Subscribed.classList.remove("subed");
    setConfirm("Try it free 7 days then ₹180/mo. thereafter");
    document.querySelector(".claim-button").classList.remove("claimed");
    setSelectPlaceholder("Choose your skills");
  }

  const options = [
    { value: "node.js", label: "node.js" },
    { value: "javascript", label: "javascript" },
    { value: "mongodb", label: "mongodb" }
  ];

  return (
    <body>
      <div class="main">
        <div class="left">
          <div>Learn to code by watching others</div>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div class="main-box">
          <div class="try-label">{confirm}</div>
          <div class="main-area">
            <div class="margin">
              <input
                type="text"
                name="username"
                class="username insert"
                autoComplete="off"
                placeholder="Username"
                onChange={changeName}
                value={userName}
              ></input>
              <input
                typeof="text"
                name="email"
                className="email-address insert"
                placeholder="Email Address"
                autoComplete="off"
                onChange={changeEmail}
                value={email}
              ></input>
              <input
                type="password"
                name="password"
                className="password insert"
                placeholder="Password"
                onChange={changePassword}
                value={password}
              ></input>

              <Select
                className="skills"
                name="skills"
                options={options}
                placeholder={selectPlaceholder}
                onChange={changeSkills}
                value={skills}
                isMulti
              />
              <button class="claim-button" onClick={submitFunction}>
                CLAIM YOUR FREE TRIAL
              </button>
              <div className="terms-and-service">
                By clicking the button you are agreeing to our Terms and
                Services
              </div>
            </div>
          </div>
          <div class="again" onClick={Again}>
            Login Again?
          </div>
        </div>
      </div>
    </body>
  );
}
