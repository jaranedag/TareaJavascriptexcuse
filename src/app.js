/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whorandom = who[Math.floor(Math.random() * who.length)];
  let actionrandom = action[Math.floor(Math.random() * action.length)];
  let whatrandom = what[Math.floor(Math.random() * what.length)];
  let whenrandom = when[Math.floor(Math.random() * when.length)];
  let fraserandom =
    whorandom + " " + actionrandom + " " + whatrandom + " " + whenrandom;

  document.getElementById("excuse").innerHTML = fraserandom;
};
