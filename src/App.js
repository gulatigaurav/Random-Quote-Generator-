import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import {
  PaperButton,
  PaperLayout,
  PaperCol,
  PaperForm,
  PaperInput,
  PaperSelect,
  PaperRadio,
  PaperCheckbox
} from "react-paper-css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section class="sheet padding-10mm">
          <article className="text-center">
            <b>RANDOM QUOTE GENERATOR</b>
          </article>
        </section>
        <Quote />
      </div>
    );
  }
}

export default App;
