/** @format */

import * as fs from "node:fs";

// function textToArray(FILE, DELIMETER) {
//   fs.readFile(FILE).then((data) => {
//     let textFile = data.toString();
//     return textFile.replace(/\n/g, "").split(DELIMETER);
//     console.log("chan\n" + arr);
//   });
// }
function textToJson(FILE, DELIMETER) {
  try {
    fs.readFile(FILE, (data) => {
      let jsobj = {
        skills,
      };
      jsobj.skills = data.toString().replace(/\n/g, "").split(DELIMETER);
      JSON.stringify(jsobj);
    });
  } catch (err) {
    return err;
  }
}

export { textToArray };
