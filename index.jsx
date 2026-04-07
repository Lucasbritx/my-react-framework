import { Luact } from "./luact";

/** @jsx Luact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
Luact.render(element, container);
