import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import React from "react";
import { SUBMIT_FORM } from "../URLconstants";


export const Contact = (props) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('haircut');
  const [barber, setBarber] = useState('anyone');
  const [message, setMessage] = useState('');
  const [btndisabled, setbtnDisabled] = useState(false)


  const onSubmitForm = async () => {
    setbtnDisabled(true)
    try {
      const response = await axios({
        method: 'post', url: SUBMIT_FORM, data: {
          name: name,
          email: email,
          datetime: date,
          barber: barber,
          message: message,
          service: service,
          status: 'unknown'
        }
      });
      if (response && response.status === 200) {
        toast.success("Your Appointment Details has been sent successfully!")
      }
      setBarber('')
      setDate('')
      setName('')
      setEmail('')
      setService('')
      setDate('')
    }

    catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error('No response received from the server');
      } else {
        toast.error('Error: ' + error.message);
      }
    }

    setbtnDisabled(false)

  }
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Schedule an appointment</h2>
                <p>
                  Fill out your details below with the service that you need, date and preferred hour
                  and we’ll get back to you with an appointment.
                </p>
              </div>
              <form name="sentMessage" validate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Name</p>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Email</p>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>Select Service</p>
                      <select className='form-control' onChange={(e) => setService(e.target.value)} value={service} required>
                        <option value="haircut">Haircut</option>
                        <option value="shaving">Shaving</option>
                        <option value="beards">Beards</option>
                        <option value="facial">Facial</option>
                        <option value="coloring">Coloring</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>With Whom?</p>
                      <select className='form-control' onChange={(e) => setBarber(e.target.value)} value={barber} required>
                        <option value="anyone">Anyone</option>
                        <option value="nickBrooks">Nick Brooks</option>
                        <option value="erikBridges">Erik Bridges</option>
                        <option value="calvinLewis">Calvin Lewis</option>
                        <option value="franklinKnight">Franklin Knight</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p className='margin-bottom2 mt-4'>Select Date and Time</p>
                      <input
                        type="datetime-local"
                        id="appointment-time"
                        name="appointment-time"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        min={new Date()}
                        required
                        placeholder=""
                        className="form-control" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <p>Message</p>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    value={message}
                    placeholder="Note to Barber"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" onClick={onSubmitForm} disabled={btndisabled}>
                  Book
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-building-o"></i> Timings
                </span>{" "}
                 Monday - Friday: 10am - 9pm<br/>
                 Saturday - Sunday: 10am-6pm 
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};