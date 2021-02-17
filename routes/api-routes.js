// require What should I require here? 
//
module.exports = function (app){


// get last workout
// app.get("/api/workouts", (req,res)=>{
//   // what you want to get? a query to grab the documents from the workout collection
//   db.Workouts.find({//find the last workout... }),
// })



// target that id to put 
// you are trying to add the work out that is already there
app.put("/api/workouts/:id", (req,res)=>{
  db.nameofCollection.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $push? 
    }
)



});
// create new WORKOUT 
  // the route you want to get 
  app.post("/api/workouts", (req,res)=>{
    // what do you want to post-body
  req.body 
  })




// get workout in range 
app.get("/api/workouts/range", (req, res)=>{
db.Workouts.find({}, {})
})

}

