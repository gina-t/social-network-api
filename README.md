# social-network-api

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)

## Description

A RESTful API for a social network web app built with Express.js, MongoDB and Mongoose ODM, with CRUD operations.

## Installation

1. Clone the repository

```zsh

git clone git@github.com:gina-t/social-network-api.git

```

2. 

3. Create a root package.json

```zsh

npm init

```
4. Install dependencies:

```zsh

npm install express dotenv mongoose colors

npm install --save-dev nodemon

5. Add scripts:

```zsh

"start": "node back-end/server.js",

"server": "nodemon back-end/server.js"

```

6. 


7. 

8. 

9. In server directory run the seed script:

```zsh

npm run seed

```

10. 

11. Generate a secure random string to use as JWT secret key and store in .env file. In root directory:

```zsh

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

```
11. In root run concurrently server:dev and client:dev:

```zsh

npm run start:dev

```
12. In root build the app:

```zsh

npm run build

```


## Usage

Link to walk-through video:

Screenshots of app demonstarting functionality:

### screenshot-1
![home page](./client/src/assets/screenshot-1.png)

### screenshot-2
![login page](./client/src/assets/screenshot-2.png)

### screenshot-3
![board page](./client/src/assets/screenshot-3.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Create a new branch for the commit and start a pull request.

## Testing


## Authors and Acknowledgements

[email] (ginadrcoder@gmail.com)


## Questions

For enquiries, please contact me at:

[email] (ginadrcoder@gmail.com)

[github] (https://github.com/gina-t)


