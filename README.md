# JumpCloud Assignment
Follow the directions below to install and run this application

Take a small amount of time to familiarize yourself with the UI of the app running on [localhost:8080](http://localhost:8080/). Don't worry, it's not complicated!

Create a new git branch with the format 'yourFirstName-yourLastName'.

Navigate to the 3 spec files in /tests/e2e/specs, and look for `TODO`s in each file and follow the instructions to complete the assignment. Please reach out to JumpCloud with any questions!

Once you are happy with your work, commit your changes, push your new branch and let JumpCloud know you are finished.

# E2E testing setup

I am using Vue CLI 3 to bootstrap a generic Vue app. For an API we are using [json-server](https://github.com/typicode/json-server).

## Pre-Installation
Please note all systems are different, these instructions are for a 2021 Macbook Pro with an M1 chipset, most systems will be much more straight forward! The goal is to get Cypress running on your machine.

To run Cypress on my machine, I needed to install python 2.7 which I did with `homebrew`, I used the following commands, [more info here](https://github.com/TryGhost/node-sqlite3/issues/1552)

`brew install pyenv`

`pyenv install 2.7.18`

`pyenv global 2.7.18`

`export PATH="${HOME}/.pyenv/shims:${PATH}"` (I put it in .bash_profile but .zsh_profile, your rc file, or just current terminal window should work fine)

`npm config set python python2.7` to tell npm to python 2

You should be able to run `python --version` in your terminal and see `2.7.18` indicated and `which python` should point to your `pyenv` install path

I am also running on node version `v14.20.1` which I installed using [NVM](https://github.com/nvm-sh/nvm)

## Installation
Install the dependencies

`npm install`

Note: if this fails try `rm -rf package-lock.json node_modules` to remove that file and directory, then `npm install` again.

You need to start the API in a separate command prompt.

`npm run api` 
 
Then you are ready to run the app or run tests.

### Running the app

`npm run serve`

### Running tests
You can run the tests from a 3rd command prompt.

You have essentially 2 options each with 2 variants. 

Run the e2e tests in headless mode or in GUI mode. 

Headless mode opens a browser behind the scenes
and outputs the results in the terminal.

GUI mode opens the nice Cypress GUI and is more suited while developing e2e tests.

Each can run their own webpack dev server or use the one that is already started by you.

#### Headless mode
`npm run test:e2e -- --headless` - this starts e2e tests and runs its own dev server

`npm run test:e2e -- --headless --url http://locahost:8080` - this runs e2e tests on the provided url

#### GUI Mode
`npm run test:e2e` - opens the Cypress GUI and runs its own dev server

`npm run test:e2e -- --url http://locahost:8080` - opens the Cypress GUI pointing to the provided url

