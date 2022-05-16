import React from "react";

export default function HelloWorld(props) {
  return !props.name ? <div>Hello World</div> : <div>Hello {props.name}</div>;
}
