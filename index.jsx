import { Luact } from "./luact";

/** @jsx Luact.createElement */
function App(props) {
  return <h1>Hi {props.name}</h1>;
}
const element = <App name="foo" />;
const container = document.getElementById("root");
Luact.render(element, container);
