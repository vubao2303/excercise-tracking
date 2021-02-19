 // require workouts model form model 
const router = require("express").Router()
const db = require("../models/excercise.js");
// module.exports = function (app){
  router.get("/api/workouts", (req,res)=>{
    db.find({}) //
    .then(dbWorkouts =>{
      res.json(dbWorkouts)
    })
    .catch(err =>{
      res.json(err);
    });
  });

  // this is where it get the info from new workout and send it up to clients
  router.put("/api/workouts/:id", (req,res)=>{
    db.findOneAndUpdate (
      { _id: req.params.id
      },
      {
        $push: { exercises: req.body }
      }, 
      { new: true, upsert: true })
      .then(dbWorkouts =>{
        res.json(dbWorkouts)
      })
      .catch(err =>{
        res.json(err);
      });   
  });

  // create new WORKOUT 
    router.post("/api/workouts", ( { body },res)=>{
      console.log(body);
      db.create(body)

      .then(dbWorkouts =>{
        // console.log(dbWorkouts);
        res.json(dbWorkouts)
      })
      .catch(err =>{
        res.json(err);
      });
    })




  // Get last 7 workouts.
  router.get('/api/workouts/range', (req, res) => {
    db.find({}).limit(7)
      .then(sevenWorkouts => {
        console.log("banana");
        console.log(sevenWorkouts);
        res.json(sevenWorkouts);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  })
  // router.get("/api/workouts/range", (req, res) => {
  //   db.find({}, null, { sort: { day: 1 } })
  //     .populate("exercises")
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  // // get workout in range, this will show in the stats html
  // router.get("/api/workouts/range", (req, res)=>{
  //   db.find({})
  //   .then(dbWorkouts =>{
  //     // // find the total of last 7 worksout 
  //     // const totalWorkouts = 7 

  //     //  let seven =[];
  //     //  for (i=0; i < 7; i++)
  //     // if (dbWorkouts)
  //     // seven.push(dbworkoutout[i])
  //     // res.json(seven)

  //     res.json(dbWorkouts)

  //   })
  //   .catch(err =>{
  //     res.json(err);
  //   });
  // });

  module.exports = router

// // BTYRING 

// // require workouts model form model 
// const db = require("../models/excercise.js");
// module.exports = function (app){
//   app.get("/api/workouts", (req,res)=>{
//     db.find({})
//     .then(dbWorkouts =>{
//       res.json(dbWorkouts)
//     })
//     .catch(err =>{
//       res.json(err);
//     });
//   });

//   app.put("/api/workouts/:id", (req,res)=>{
//     db.findOneAndUpdate (
//       { _id: req.params.id
//       },
//       {
//         $push: { excersices: req.body }
//       }, 
//       { new: true })
//       .then(dbWorkouts =>{
//         res.json(dbWorkouts)
//       })
//       .catch(err =>{
//         res.json(err);
//       });   
//   });

//   // create new WORKOUT 
//     app.post("/api/workouts", ( { body },res)=>{
//       db.create(body)
//       .then(dbWorkouts =>{
//         res.json(dbWorkouts)
//       })
//       .catch(err =>{
//         res.json(err);
//       });
//     })

//   // // get workout in range, this will show in the stats html
//   app.get("/api/workouts/range", (req, res)=>{
//     db.find({})
//     .then(dbWorkouts =>{
      

//       res.json(dbWorkouts)
//     })
//     .catch(err =>{
//       res.json(err);
//     });
//   });

// }

// 100th try 


// // adds a dynamically-created property to schema
// db.virtual("totalDuration").get(function () {
//   //this.exercises is going to be an array of exercises that match the users query.
//   console.log(this.exercises);

//   this.exercises.forEach(element => {
//     console.log(element.duration);
//   });
//   //The amount that will be sent to the client is returned here. (I set it to 0 for now.)
//   return 0;
// });

// // require workouts model form model 
// const db = require("../models/excercise");
// module.exports = function (app){


//   // // get last workout, this routes come from api.js client side javascript 
//   app.get("/api/workouts", (req,res)=>{
    
//     db.Workouts.find({})
//     // you can call this anything but in this case it is dbWorkout
//     // 15 tell you to do this 
//     .then(dbWorkouts =>{
//       res.json(dbWorkouts)
//     })
//     .catch(err =>{
//       res.json(err);
//     });
//   });

//   // // 9 tell you to do this 
//   // app.get("/api/workouts", (req,res)=>{
//   //   db.Workouts.find({}, (err, dbWorkouts)=>{
//   //     if(err){
//   //       console.log(err);
//   //     } else {
//   //       res.json(dbWorkouts)
//   //     }
//   //   });
//   // });
//   // it is ok to find all, because the clientside (api line 11)will serve up only last one 
//   // add function 

//   // target that id to put 
//   // you are trying to add the work out that is already there
//   // again, think of this as your "hobbies", there are many thigs in here, and you want to add now one in 
//   app.put("/api/workouts/:id", (req,res)=>{
//     db.Workouts.findOneAndUpdate (
//       {
//         _id: mongojs.ObjectId(params.id)
//       },
//       {
//         //add workout to excersice array in model 
//         $push: { excersices: req.body }
//       }, 
//       { new: true })
//       .then(dbWorkouts =>{
//         res.json(dbWorkouts)
//       })
//       .catch(err =>{
//         res.json(err);
//       });
      
//   });


//   // create new WORKOUT 
//     // the route you want to get 
//     app.post("/api/workouts", ( { body },res)=>{
//       // create 
//       // what do you want to post- i want to post body
//       // what is in this body? 
//       db.Workouts.create(body)
//       .then(dbWorkouts =>{
//         res.json(dbWorkouts)
//       })
//       .catch(err =>{
//         res.json(err);
//       });

//     })




//   // get workout in range 
//   app.get("/api/workouts/range", (req, res)=>{
//     db.Workouts.find({})
//     .then(dbWorkouts =>{
//       res.json(dbWorkouts)
//     })
//     .catch(err =>{
//       res.json(err);
//     });
//   });

// }//close module.export function 


// app.the request here(get/post/put/delete) ("then here is the route"), (req,res)=>{
//   do whatever you need to do in here 
// }, phẩy 1 cái xong rồi tới cái này 
// CÁCH 1 
// .then(dbWorkouts =>{
//   res.json(dbWorkouts)
// })
// .catch(err =>{
//   res.json(err);
// });
// CÁCH 2 
// (err,data)=>{
//       if(err){
//         console.log(err);
//         res.send(err);
//       } else{
//         console.log(data);
//         // show this to the page
//         res.send(data);
//       }
//     }//cái này là đóng cùa cái function err,data
// )cái này là đóng cùa cái sự gì đó mình làm ở line 65
// )} cái này là đóng của req,res 
