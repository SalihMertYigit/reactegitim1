import react, { Component } from "react";
import "./component.css";
import Kitap from "./Kitap";
export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="ortala">
          {" "}
          Artırma {this.state.count}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            artır
          </button>
        </div>
        <Kitap
          name="buton adıasdafsdf"
          className="buttonstyle"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        ></Kitap>

<Kitap
          name="ikinicd"
          className="ortala"
          onClick={() => alert("sdfsdf")}
        ></Kitap>


        <div className="buttonstyle" nesne>
          Stil
        </div>
      </>
    );
  }
}
