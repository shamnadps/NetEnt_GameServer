# README #

### Simple NodeJS Server with express for NetEnt Game Framework sample ###

### Install ###

* Install [NodeJS](https://nodejs.org)
* Clone the repository to local.
* Install libraries: `npm install`
* Build: `npm build`
* Run: `npm start`

By the default the server listens on port 1337.

### How to use ###

This is very simple game server using NodeJS

* Only one API is exposed `/casino`

This returns
1. Random generated number array of size 3.
2. A Bonus feature capability determined by flags `true` or `false`.
3. Result of the game determined as `Big Win` , `Small Win`, `No Win`.

* `Big Win` - When all the random generated numbers are equal.
* `Small Win` - When only two of the random generated numbers are equal.
* `No Win` - When none of the random generated numbers are equal.

#### Sample Response ####

A Sample response would look like this.

`[{"values":[1,1,5]},{"bonus":false},{"result":"Small Win"}]`

#### Code Styling and Intendation ####

JavaScript Standard Style  is been used for styling and intendation.

* Run `npm test`

This executes `standard --fix` from `package.json` scripts

#### Unit Testing ####

Unit Testing is enabled using mocha and chai.

* Run: `npm test`

This executes `mocha test/**/**spec.js` from `package.json` scripts

#### Bug Reporting ####

Feel free to report any bugs. I will be more than happy to fix them right away.
