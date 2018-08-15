# Mock API

## Purpose
Want to develop offline? Go for it!

Create your own mock api. You can model it after any api you like. Simply create a json export in the config, create a new controller, and register an endpoint!

## How to run

```
nvm use
npm i -g nodemon
npm install
npm start
```

## How to test
```
curl http://localhost:8082/api/sample
```
Expected output
```
{"sample":{"key":"value"}}
```

## How to customize
If you want to change the URL registered, simply change the package.json script
```
"serve": "nodemon index.js /my/custom/endpoint/
```

## Note
This project is optionally docker-ized. Feel free to play around in that sandbox.

## Resources
[node](https://nodejs.org/en/)

[nvm](https://github.com/creationix/nvm)

[express](https://expressjs.com/)

[docker](https://www.docker.com/)
