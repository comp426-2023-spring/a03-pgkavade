#!/usr/bin/env node

import { rpsls } from "../lib/rpsls.js";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

if (args.h || args.help) {
	console.log(rpsls("help"));
} 

else if (args.r || args.rules) {
	console.log(rpsls("rules"));
} 

else if (args._.length === 0) {
	console.log(rpsls());
} 

else {
	console.log(rpsls(args._[0]));
}