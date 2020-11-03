import React, { useEffect, useState } from "react";
import axios from "axios";

export const Logbook = () => {
  const [messages, setMessages] = useState();
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formEmail, setFormEmail] = useState("");

  useEffect(() => getLogbook(), []);

  function getLogbook() {
    //From LogBookController
    let url = "api/LogBook/Index";

    axios.get(url).then((res) => {
      let data = res.data;
      setMessages(data);
    });
  }

  function handleChange(event) {
    const target = event.target;
    const targetName = event.target.name;
    if (targetName === "name") {
      setFormName(target.value);
    } else if (targetName === "message") {
      setFormMessage(target.value);
    } else if (targetName === "email") {
      setFormEmail(target.value);
    }
  }

  function createLog() {
    axios
      .post("api/LogBook/Create", {
        name: formName,
        message: formMessage,
        email: formEmail,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!messages) return false;

  return (
    <div className="wrapper">
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <p>From - {message.name}</p>
            <p>{message.message}</p>
          </div>
        );
      })}
      <button onClick={createLog}>yep</button>

      <form onSubmit={createLog}>
        <div className="form-group row col-md-4 mx-auto">
          <label className="control-label col-md-12" htmlFor="name">
            Name
          </label>
          <input
            className="form-control mx-auto"
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group row col-md-4 mx-auto">
          <label className="control-label col-md-12" htmlFor="message">
            Message
          </label>
          <input
            className="form-control mx-auto"
            type="text"
            name="message"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group row col-md-4 mx-auto">
          <label className="control-label col-md-12" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-dark">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
