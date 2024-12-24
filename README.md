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

6. Create cluster in MongoDB Atlas cloud platform

7. Create database, social_network_db and add collection names:

thoughts

users

8. Create new connection with Compass

9. Create config/db.js

10. Create models for User, Thought

11. Create schema for Reaction and export to Thought model

12. Add a virtual field named friendCount to UserSchema

13. Add a virtual field named reactionCount to ThoughtSchema



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


