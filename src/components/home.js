import React from "react";
import { NavLink } from "react-router-dom";
export function Home() {
  return (
    <>
      <h2>About us</h2>
      <p>
        LumosFit Training offers you various videos for your home workout
        strength training. Beginner friendly workout in various categories are
        available.{" "}
      </p>
      <p>
        If you are in need of equipment for home workouts, you can checkout
        LumosFit Store{" "}
        <a
          className="redirect-link"
          href="https://lumos-fit-store.netlify.app/"
        >
          here.
        </a>
      </p>
      <br />
      <br />
      <h3 className="center">
        <NavLink to="/products" className="badge bg-primary">
          Get Started
        </NavLink>
      </h3>
      <h5>What we have to offer you:</h5>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="Arms"
            class="img-responsive card-img"
            src="https://thumbs.dreamstime.com/z/arm-workout-woman-collection-exercise-slim-arm-workout-woman-collection-exercise-slim-strong-arms-idea-144289931.jpg"
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Arm Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="Legs"
            class="img-responsive card-img"
            src={require("../images/leg.PNG")}
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Leg Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="Abs"
            class="img-responsive card-img"
            src="https://thumbs.dreamstime.com/b/abs-workout-men-exercise-perfect-body-abs-workout-men-sport-exercise-perfect-abs-fit-body-healthy-lifestyle-140423207.jpg"
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Abs Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="Shoulder"
            class="img-responsive card-img"
            src="https://weighteasyloss.com/wp-content/uploads/2018/03/28432586_2007478019528922_4774043788035227648_n.jpg"
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Shoulder Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="Back"
            class="img-responsive card-img"
            src="https://assets.nhs.uk/nhsuk-cms/images/NHSD-1520-back-exercises-balanced.width-320.jpg"
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Back Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="card-horizontal flex-items">
        <div class="image-container badge-container">
          <img
            alt="WarmUp"
            class="img-responsive card-img"
            src="https://i.pinimg.com/originals/2c/29/84/2c298429b10a06ca87db3e72c944447a.jpg"
          />
          <span class="badge bg-primary">New</span>
        </div>
        <div class="text-container">
          <h4 class="heading-primary">Warm ups</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}
