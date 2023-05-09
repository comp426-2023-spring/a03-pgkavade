#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
if (args.h || args.help) {
	console.log(rps("help"));

} 

else if (args.r || args.rules) {
	console.log(rps("rules"));
} 

else if (args._.length === 0) {
	console.log(rps());
} 

else {
	console.log(rps(args._[0]));
}