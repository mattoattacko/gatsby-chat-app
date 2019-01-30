import React from "react";
import io from "socket.io-client";
import If from "./If.js";

const url = "http://localhost:3001"; // my local sockets.io server
// const url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);

class Chatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedInput: "",
      words: "",
      history: [],
      selectedOption: "fifteen"
    };

    socket.on("incoming", payload => {
      this.updateStateOnIncoming(payload);
    });
  }

  // listening to server.
  updateStateOnIncoming = serverPayload => {
    let { payload, history } = serverPayload;
    let words = payload;
    this.setState({ words, history });
  };

  // submit chat to server.
  handleSubmit = event => {
    event.preventDefault();

    // note that this history is displayed only. Not submitted to server
    // reverse in place so that it is first to last.
    let history = this.state.history.reverse();

    // push new value on at end.
    history.push(this.state.typedInput);

    // reverse again, so that it displays latest first.
    history.reverse();

    this.setState({ history });

    socket.emit("chatter", this.state.typedInput);
  };

  handleChange = event => {
    this.setState({
      typedInput: event.target.value
    });
  };

  handleRadioOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  render() {
    // the commented out way is clean, but we lose the actual array index which is nice to have.
    // let sliceStart = this.state.history.length - listCount;
    // let wordsList = this.state.history.slice(sliceStart) || [];
    let wordsList = this.state.history || [];
    let listCountOption = this.state.selectedOption;
    let listCount = 15;
    switch (listCountOption) {
      case "five":
        listCount = 5;
        break;
      case "ten":
        listCount = 10;
        break;
      case "fifteen":
        listCount = 15;
        break;
      case "all":
        listCount = this.state.history.length;
        break;
      default:
        listCount = 15;
    }

    return (
      <>
        <h3>{this.state.words}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="typedInput"
            placeholder="New Words"
            onChange={this.handleChange}
          />
        </form>
        <If condition={wordsList.length}>
          <h4>Conversation History</h4>
          <div className="radioGroup">
            <label>
              <input
                type="radio"
                name="history-length"
                value="five"
                checked={this.state.selectedOption === "five"}
                onChange={this.handleRadioOptionChange}
              />
              5
            </label>

            <label>
              <input
                type="radio"
                name="history-length"
                value="ten"
                checked={this.state.selectedOption === "ten"}
                onChange={this.handleRadioOptionChange}
              />
              10
            </label>

            <label>
              <input
                type="radio"
                name="history-length"
                value="fifteen"
                checked={this.state.selectedOption === "fifteen"}
                onChange={this.handleRadioOptionChange}
              />
              15
            </label>

            <label>
              <input
                type="radio"
                name="history-length"
                value="all"
                checked={this.state.selectedOption === "all"}
                onChange={this.handleRadioOptionChange}
              />
              All
            </label>
          </div>
          <p>The last {listCount} texts in reverse chronological order</p>
          <ul>
            {wordsList.map((entry, key) => (
              <If /* If condition={wordslist} where wordslist is built above is cleaner but loses the original index.*/
                condition={
                  (wordsList.length > listCount &&
                    key < wordsList.length - (wordsList.length - listCount)) ||
                  wordsList.length <= listCount
                }
              >
                <li key={key}>
                  {wordsList.length - key}: {entry}
                </li>
              </If>
            ))}
          </ul>
        </If>
      </>
    );
  }
}

export default Chatter;