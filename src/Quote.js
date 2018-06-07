import React, { Component } from "react";
import axios from "axios";
import "./Quote.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  newQuote = () => {
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        console.log(response);
        this.setState({
          isLoaded: true,
          item: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  tweetQuote = () => {
    let generatedQuote = this.state.item.quote;
    console.log("generated quote:", generatedQuote);
    var tweetUrl =
      " https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(generatedQuote) +
      " @gauravgulati9c";
    window.open(tweetUrl);
  };

  componentDidMount() {
    // fetch("https://talaikis.com/api/quotes/random/")
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        console.log(response);
        this.setState({
          isLoaded: true,
          item: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div className="text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="text-center">Loading...</div>;
    } else {
      return (
        <div className="text-center alligner">
          <div id="quote-box">
            <h5 id="text">{this.state.item.quote} </h5>
            <h6>
              {" "}
              <strong>- {this.state.item.author} </strong>
            </h6>{" "}
            <strong>Type : </strong> {this.state.item.cat}
          </div>
          <br />
          <button
            id="new-quote"
            class="btn-large new-quote-button"
            onClick={this.newQuote}
            style={{ padding: "15px", margin: "15px" }}
          >
            {" "}
            New Quote{" "}
          </button>
          <button
            id="button"
            class="btn-large tweet-button"
            style={{ padding: "15px", margin: "15px" }}
            onClick={this.tweetQuote}
          >
            Tweet Quote
          </button>
        </div>
      );
    }
  }
}

export default Quote;
