import ReactDOM from "react-dom";
import App from "./App";
import './styles/index.css'
import {StrictMode} from 'react'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)