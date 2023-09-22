import React from "react";
import ReactDOM from "react-dom";
import AppCmp from "./App.js";
import "./styles.css";

const rootElement = document.getElementById("root"); // Replace 'root' with your target DOM element ID

const App = <AppCmp />;

ReactDOM.render(App, rootElement);
