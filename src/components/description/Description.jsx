import React, { useContext, useState } from "react";
import "./description.css";

import UserContext from "../../Store";

const Description = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <header className="header">
        <div>
          <h1>Pain & Functional Description</h1>
          <p>
            The description of the current situation gives your optimum Trainer
            a picture and clue of the underlying causes of your problem
          </p>
        </div>
      </header>
      <div className="sub_header">
        <p>
          If you have problem with pain/aches,stiffness,weakness or functional
          problem,describe this/these below(List the symptoms in descending
          order with the most troublesome first)
        </p>
        <textarea
          className="text_area1"
          name="describe"
          onChange={(e) => userContext.setTextar1(e.target.value)}
        ></textarea>
      </div>
      <div className="radio">
        <div className="diagnosed">
          <div>
            <h4>Have you been diagnosed with this problem?</h4>
          </div>
          <div className="input">
            <input
              type="radio"
              value=" Not relevent"
              onChange={(e) => userContext.setDiagnosed(e.target.value)}
            />
            Not relevent
            <input
              type="radio"
              value="Yes"
              onChange={(e) => userContext.setDiagnosed(e.target.value)}
            />
            Yes
            <input
              type="radio"
              value="No"
              onChange={(e) => userContext.setDiagnosed(e.target.value)}
            />
            No
          </div>
        </div>
        <div className="diagnosed">
          <div>
            <h4>Did the problem start after a physical trauma?</h4>
          </div>
          <div className="input">
            <input
              type="radio"
              value=" Not relevent"
              onChange={(e) => userContext.setPhysical(e.target.value)}
            />{" "}
            Not relevent
            <input
              type="radio"
              value="Yes"
              onChange={(e) => userContext.setPhysical(e.target.value)}
            />
            Yes
            <input
              type="radio"
              value="No"
              onChange={(e) => userContext.setPhysical(e.target.value)}
            />
            No
          </div>
        </div>
        <div className="diagnosed">
          <div>
            <h4>Did the problem start after mental trauma ?</h4>
          </div>
          <div className="input">
            <input
              type="radio"
              value="Not relevent"
              onChange={(e) => userContext.setMental(e.target.value)}
            />
            Not relevent
            <input
              type="radio"
              value="Yes"
              onChange={(e) => userContext.setMental(e.target.value)}
            />
            Yes
            <input
              type="radio"
              value="No"
              onChange={(e) => userContext.setMental(e.target.value)}
            />
            No
          </div>
        </div>
        <div>
          <h4>How often do you experience the problem</h4>
          <input
            type="radio"
            value="Not Relevent"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          Not relevent
          <input
            type="radio"
            value="Daily"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          Daily
          <input
            type="radio"
            value="No"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          No
          <input
            type="radio"
            value="Several times/week"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          Several times/week
          <input
            type="radio"
            value="A few times/monts"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          A few times/monts
          <input
            type="radio"
            value="A few times/year"
            onChange={(e) => userContext.setExperience(e.target.value)}
          />
          A few times/year
        </div>
      </div>

      <div className="checkbox">
        <h4>When do you experience the problem ?</h4>
        <div className="list_items">
          <div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="Not relevent"
                  onChange={(e) => userContext.setWhen(e.target.value)}
                />
                Not relevent
              </li>
              <li>
                <input
                  type="checkbox"
                  value="When lying down"
                  onChange={(e) => userContext.setWhen(e.target.value)}
                />
                When lying down
              </li>
              <li>
                <input
                  type="checkbox"
                  value=" When sitting"
                  onChange={(e) => userContext.setWhen(e.target.value)}
                />
                When sitting
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Under standing"
                  onChange={(e) => userContext.setWhen(e.target.value)}
                />
                Under standing
              </li>
              <li>
                <input
                  type="checkbox"
                  value=" In walking"
                  onChange={(e) => userContext.setWhen(e.target.value)}
                />
                In walking
              </li>
            </ul>
          </div>

          <div className="textarea">
            <textarea
              className="textarea_2"
              placeholder="other? For example in rotation,side bends,wing stairs,when working with the arms above the head"
              onChange={(e) => userContext.setTextar2(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="scale">
        <h4>
          How intense is the experience of the problem on average on 0-10 scale?
        </h4>
        <input
          type="radio"
          value="0"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        0
        <input
          type="radio"
          value="1"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        1
        <input
          type="radio"
          value="2"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        2
        <input
          type="radio"
          value="3"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        3
        <input
          type="radio"
          value="4"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        4
        <input
          type="radio"
          value="5"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        5
        <input
          type="radio"
          value="6"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        6
        <input
          type="radio"
          value="7"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        7
        <input
          type="radio"
          value="8"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        8
        <input
          type="radio"
          value="9"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        9
        <input
          type="radio"
          value="10"
          onChange={(e) => userContext.setScale(e.target.value)}
        />
        10
      </div>
      <hr />
      <div className="btn">
        <button className="btn1">BACK</button>

        <button className="btn2">NEXT</button>
      </div>
    </>
  );
};

export default Description;
