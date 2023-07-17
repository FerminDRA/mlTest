import { Component } from "react";
import { sha256 } from "js-sha256";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME;

export default class ButtonApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: ""
    };
  }
  

  callWorkFlow = async () => {
    let datakey = "i-love-adsoftsito|" + Date.now();
    console.log(datakey);
    let mysha = sha256(datakey);
    console.log("SHA : " + mysha);
    console.log(GITHUB_TOKEN)

    try {
      const response = await fetch(
        "https://api.github.com/repos/fermindra/myMLOps_Hello-World/dispatches",
        {
          method: "POST",
          body: JSON.stringify({
            event_type: "build",
            client_payload: {
                 "codeurl": "https://github.com/fermindra",
                 "codebin": "https://github.com/fermindra",
                 "MODEL_NAME": "linear-model",
                 "sha": mysha
         } 
          }),
          headers: {
            Authorization: "Bearer " + GITHUB_TOKEN,
            Accept: "application/vnd.github.v3+json",
            "Content-type": "application/json"
          }
        }
      );

      console.log(response);

      const data = await response.json();
      console.log(data);

      let URL_ENDPOINT =
        "https://" +
        PROJECT_NAME +
        "-service-ml-fermindra.cloud.okteto.net/v1/models/" +
        PROJECT_NAME +
        ":predict";

      this.setEndpoint(URL_ENDPOINT); // Utiliza "this" para acceder a setEndpoint
    } catch (error) {
      console.log(error.message);
    }
  };

  setEndpoint = (endpoint) => {
    this.setState({ endpoint });
  };

  render() {
    return (
      <div className="divButton">
        <button onClick={this.callWorkFlow}>Call API</button>
      </div>
    );
  }
}
