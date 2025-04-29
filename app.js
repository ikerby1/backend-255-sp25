//setup.. this is similar to when we use are our default tags in html
const express = require("express")
//we have to use cors in order to host a frontend and backend on the same device
var cors = require('cors')
//activate or tell this app variable to be an express server

const bodyParser = require('body-parser')
const Song = require("./models/song")
const app = express()
app.use(cors())

app.use(bodyParser.json())
const router = express.Router()

//grab all the songs in a database
router.get("/songs", async(req, res) =>{
    try{
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }

})

//grab a single song in the database
router.get("/songs/:id", async (req, res) =>{
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch (err){
        res.status(400).send(err)
    }
})

//router.post("/songs", async(req, res) =>{
  //  try{
    //    const newSong = await newSong(req.body)
      //  await song.save()
        //res.status(201).json(newSong)
        //console.log(song)
    //}
    //catch(err){
      //  res.status(400).send(err)

    //}
//})

router.post("/songs", (req, res) => {
    const newSong = req.body;
    //Logic to save the song goes here
    res.status(201).json(newSong);
});

//update is to update an existing record/resource/database entry..it uses a put request
router.put("/songs/:id", async (req, res) =>{
    //first we need to find and update the song the frontend wants us to update.
    //to do this, we need to request the id of the song from request
    //and the find it in the database and update it
    try{
        const song = req.body
        await Song.updateOne({_id: req.params.id},song)
        console.log(song)
        res.sendStatus(204)
    }
    catch(err){
            res.status(400).send(err)
    }
})


//all requests that usually use an api start with /api... so the URL would be localhost:3000
app.use("/api", router)
app.listen(3000)