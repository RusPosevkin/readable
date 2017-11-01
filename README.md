# Readable

It's a content and comment web app. Users are able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users are also able to edit and delete posts and comments.

## How to start
1. Clone this repository
  ```bash
  $> git clone https://github.com/RusPosevkin/readable.git
  ```

2. Install dependencies
  ```bash
  $> cd ./readable
  $> yarn
  ```

3. Start backend server
  ```bash
  $> node server
  ```

4. Start server
  ```bash
  $> yarn start
  ```

5. Open a browser and visit http://localhost:3000/

## Data
There are three types of objects stored on the server:

* Categories
* Posts
* Comments

## Start Developing

To get started developing right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, use Create React App to scaffold out the front-end
    - `create-react-app frontend`
    - `cd frontend`
    - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
