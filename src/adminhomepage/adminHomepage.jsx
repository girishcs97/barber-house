import React, { useEffect, useState,useCallback } from "react";
import { GET_QUERIES, SEND_MAIL } from "../URLconstants";
import toast from "react-hot-toast";
import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import './adminhomepage.css';
import { Navigation } from "../components/navigation";
import moment from "moment";

const AdminHomepage = () => {
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        async function getQueries() {
            try {
                const response = await axios({ method: 'get', url: GET_QUERIES });
                if (response && response.status === 200) {
                    setQueries(response.data.queries)
                }
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
        }
        getQueries();
    }, []);

    const onApproveQuery = useCallback(async (data) => {
        console.log("data", data)
        const endTime = moment(data.datetime).add(30, 'm').toDate();
        try {
            const response = await axios({
                method: 'post', url: SEND_MAIL, data: {
                    email: data.email,
                    startTime: data.datetime,
                    endTime: endTime,
                    id: data._id
                }
            });

            if (response && response.status === 200) {
                toast.success("Mail Sent Successfully");
                if (response && response.data && response.data.result && response.data.result._id) {
                    const newQueries = queries.map((i) => {
                        if (i._id === data._id) {
                            return { ...i, status: "Approved" }
                        } else {
                            return i
                        }
                    })
                    setQueries(newQueries)
                }
            }
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

    }, [queries])
    return (
        <>
            <Navigation isAdmin={true} />
            <div className="container-fluid margin-top-table">
                {(queries && queries.length && queries.filter((i) => i.status === 'unknown').length) ?
                    <div>
                        <div className="text-center margin-bottom-20px">
                            <h4> Appointment Queries</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope='col'>Name</th>
                                                <th scope='col'>Email</th>
                                                <th scope='col'>Service</th>
                                                <th scope='col'>Barber Name</th>
                                                <th scope='col'>Date and Time</th>
                                                <th scope='col'>Message</th>
                                                <th scope='col'>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {queries && queries.length ? queries.filter((i) => i.status === 'unknown').map((i, index) => {
                                                return <tr key={index}>
                                                    <td>{i.name}</td>
                                                    <td>{i.email}</td>
                                                    <td>{i.service}</td>
                                                    <td>{i.barber}</td>
                                                    <td>{i.datetime ? moment(i.datetime).format('MMMM Do YYYY, h:mm:ss a') : ''}</td>
                                                    <td>{i.message}</td>
                                                    <td>
                                                        <span className="margin-right-10px" onClick={() => onApproveQuery(i)}><IconContext.Provider value={{ color: "green", size: '2rem' }}>
                                                            <AiOutlineCheckCircle />
                                                        </IconContext.Provider></span>
                                                        <span><IconContext.Provider value={{ color: "red", size: '2rem' }}>
                                                            <AiOutlineCloseCircle />
                                                        </IconContext.Provider></span>
                                                    </td>
                                                </tr>
                                            }) : ''}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> : <p className="text-center mt-4">No Appointment Queries at the moment</p>}
            </div>


        </>
    )
}
export default AdminHomepage