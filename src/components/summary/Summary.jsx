import React, { useContext } from "react";
import "./summary.css";
import UserContext from "../../Store";
import { Link } from "react-router-dom";

const Summary = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="summary">
      <h2>summary</h2>
      <table className="table">
        <tr>
          <th>Question</th>
          <th>Ans</th>
        </tr>
        <tr>
          <td>Have you been diagnosed with this problem?</td>
          <td className="ans">{userContext.diagnosed}</td>
        </tr>
        <tr>
          <td>Did the problem start after a physical trauma?</td>
          <td className="ans">{userContext.physical}</td>
        </tr>
        <tr>
          <td>Did the problem start after mental trauma ?</td>
          <td className="ans">{userContext.mental}</td>
        </tr>
        <tr>
          <td>How often do you experience the problem</td>
          <td className="ans">{userContext.experience}</td>
        </tr>
        <tr>
          <td>When do you experience the problem ?</td>
          <td className="ans">{userContext.when}</td>
        </tr>
        <tr>
          <td>
            How intense is the experience of the problem on average on 0-10
            scale?
          </td>
          <td className="ans">{userContext.scale}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td className="ans">{userContext.textar1} </td>
        </tr>
        <tr>
          <td>Others</td>
          <td className="ans">{userContext.textar2}</td>
        </tr>
      </table>
      <div className="btn">
        {/* <button className="btnback">Back</button> */}
        <Link to="/">
          <button className="btnback">BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
