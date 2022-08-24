#!/usr/bin/env node
/** @format */

import caporal from "@caporal/core";
import { textToArray } from "./utils.mjs";
const { program } = caporal;
program
  .command("rArray", "return converted text file to array")
  .argument("<path>", "file path to convert")
  .option("-d,--delimeter <deli>", "delimeter from which to seperate")
  .action(({ logger, args, options }) => {
    // textToArray(args.path, options.delimeter).then((arr) => console.log(arr));
    logger.info(textToArray(args.path, options.delimeter));
  }).command;

//===always at last=====
program.run();
