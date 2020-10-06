import React from "react";
import Loader from "../index";
import "../loader/css/react-spinner-loader.css";

export default {
  title: "Loaders",
  component: Loader,
};

export const Audio = () => (
  <Loader width={200} height={200} color="green" type="Audio" />
);

export const Ball_Triangle = () => (
  <Loader width={200} height={300} color="#cef442" type="BallTriangle" />
);

export const Bars = () => (
  <Loader width={200} height={200} color="green" type="Bars" />
);

export const Circles = () => (
  <Loader color="green" width={200} height={200} type="Circles" />
);

export const Grid = () => (
  <Loader color="green" width={200} height={200} type="Grid" />
);

export const Hearts = () => (
  <Loader color="green" width={200} height={200} type="Hearts" />
);

export const Oval = () => {
  <Loader
    className="test"
    color="green"
    width={200}
    height={200}
    type="Oval"
  />;
};

export const Puff = () => (
  <Loader color="green" width={200} height={200} type="Puff" />
);

export const Rings = () => (
  <Loader color="green" width={200} height={200} type="Rings" />
);

export const TailSpin = () => (
  <Loader type="TailSpin" color="#939248" height="100" width="100" />
);

export const ThreeDots = () => (
  <Loader color="green" width={200} height={200} type="ThreeDots" />
);

export const Watch = () => (
  <Loader color="green" width={200} height={200} type="Watch" />
);

export const RevolvingDot = () => (
  <Loader
    color="green"
    width={200}
    height={200}
    radius={15}
    type="RevolvingDot"
  />
);

export const Triangle = () => (
  <Loader color="green" width={200} height={200} type="Triangle" />
);

export const Plane = () => (
  <Loader color="#FFA500" width={200} height={200} type="Plane" />
);
export const Mutating_Dots = () => (
  <Loader
    color="#FFA500"
    secondaryColor="#FFA500"
    width={100}
    height={100}
    type="MutatingDots"
  />
);

export const CradleLoader = () => (
  <Loader color="green" width={200} height={200} type="CradleLoader" />
);

export const None = () => (
  <Loader color="green" width={200} height={200} type="" />
);
