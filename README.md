# excercise-tracking
An Excerise Tracker application that is built using MongoDB. The application allows a user to track their workout routine by adding exercise types, resistance or cardio, followed by data for each including sets, reps, distance, etc. The user can add multiple exercises to one workout, and their statistics will be generated showing the total duration, total reps, total sets. Data for the last 7 workouts will also be displayed which provide another visual representation in addition to their physique to track progress over time.

## Demo-video 

[Demo Video]()  

![Site Picture]()


## Heroku-Deployed

[Deployed Link]()  

# Table of Contents 

| |||
|:-:|:-:|:-:|
|[Project Introduction](#excercise-tracking) | [Table of Contents](#table-of-contents) | [Heroku](#heroku-deployed) |  [Description of Page Building](#Description-of-Page-Building)| [Code Snippets](#code-snippet) 
| [Technologies Used](#Technologies-Used) |  [Author](#author) | [License](#License)

---


## Description of Page Building 
* In server.js
   <ul> 
  <li> Requiring necessary npm packages
  <li> Setting up port and requiring models for syncing
  <li> Creating express app and configuring middleware needed for authentication
  <li> Requiring our routes
  <li> Listen to port to activate the server 
  </li>
  </ul>

* In public folder
  <ul> 
  <li> A css style with images and styling
  <li> Interface files such as exercise.html file and index.html and stats.
  <li> Clientside javascript files where it will listen to the clients request and send it to the back-end as well as poppulate chart 
  </li>
   </ul>


* In routes folder to handle when the user "visit" the page
  <ul> 
  <li> Html routes that serve up the html page when client calls
  <li> API routes to serve up JSON object use to populate the page 
  </li>
  </ul>
* In models folder
  <ul> 
  <li> excercise.js file uses mongoose to create table that content date, excercise array of type, name, duration, weight, reps, and sets
  <li> module.export Schema 
  </li> 
  </ul>


## Code Snippet
Install npm package 
npm install express

Required variables 
``` Javascript

```

Sets up the Express app to handle data parsing
``` Javascript

```

Set routes to handle when user "visit" the page 
``` Javascript

```

do this because 
``` Javascript 

```
## Technologies Used

||||||
|:-:|:-:|:-:|:-:|:-:|
|[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |[Node.js](https://nodejs.org/en/) |[Express](https://expressjs.com/)| [Heroku](https://heroku.com/) | [GitHub](https://github.com/)

<br>

## Author

| | |
| --- | --- |
|**B Tram Vu**|[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303) | [![Portfolio](https://i.stack.imgur.com/gVE0j.png) Portfolio](https://www.linkedin.com/in/b-tram-vu-866250121/)


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
