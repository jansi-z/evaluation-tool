## About

The frontend client for an evaluation tool I made as a final project for my programming course. It allows the user (a teacher presumably) to create batches of students and evaluate their progress. In addition, the app features a button that selects a random student for a question. The random selector is weighted towards students whose recent evaluation has been red (negative). I made it with React using Redux and some other cool plugins. It interacts with a Feathers API, which you can find here: https://github.com/shakahari/evaluation-tool-api.

This project taught me how to build my own React-Redux app from the ground up. When I got the hang of it I really liked the way Redux reducers work. On top of that, I managed to make it look (mostly) not horrible, so I like to think I got a bit of styling expertise out of it as well!

## Running the app

0. Make sure you have the API up and running: https://github.com/shakahari/evaluation-tool-api

1. Clone or download the repo

2. CD into the directory and run yarn install (or npm install if NPM has your preference)

3. Browse to http://localhost:3000
