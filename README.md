This app searches live Twitch streams

**Here is the demo for this app: https://jclas.github.io/twitch-deploy**


To run it locally and have it served up by node...

1) Download this repo and unzip it.

2) You must have Node already installed on your computer. (I use Visual Studio Code which already has it.)

3) Open a command prompt in the project's root directory. (where "package.json" is)

4) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
5) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.
