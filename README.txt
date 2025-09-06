------------------------------------------------------------------------------------------
For package: npm init -y
For downloading express: npm install express
For running file : node server.js
------------------------------------------------------------------------------------------
: npm install -g nodemon

(Nodemon is a utility that automatically restarts your Node.js 
application when it detects file changes in the directory. 
It's invaluable for development because you don't have to 
manually stop and restart your server every time you edit your code)

Now run the .js file with: nodemon server.js
------------------------------------------------------------------------------------------
In package.json file if we create dev
"dev":"nodemon server.js"
so we can also run the sever.js file through npm
: npm run dev
------------------------------------------------------------------------------------------
We use 'environment variable' for hidding data
like hide port number, Database connectivity etc

we hardcoded port number directly below there
app.listen(4000,() =>{
    console.log('listening on port 4000')
})

create .env file and store there 
PORT = 4000
: npm install dotenv
------------------------------------------------------------------------------------------
Want to react to the request 
req : request, res : response
'/'  for local host

app.get('/',(req,res) => {
    res.json({mssg: 'Welcome to the app'})
})

get request automatically send whenever we are on enter 
page 
But for post, del request we need javascript on the front 
end to send those request


------------------------------------------------------------------------------------------
Second video: Express Router & API Routes (Interact with database)
------------------------------------------------------------------------------------------

GET : Gets all the documents from the database and send them all back in json format to the browser
POST : Create a new documents into the database
GET (id) : Get a single documents from the database
DELETE (id) : Deletes a single document from the database
PATCH (id) : Updates a single document into the database
------------------------------------------------------------------------------------------
Handle a POST or PATCH request we can't access
the data from 'req' object we use middleware express.json()
: app.use(express.json())

------------------------------------------------------------------------------------------
Third video: MongoDB Atlas & Mongoose
------------------------------------------------------------------------------------------

I need to create a database at mongoDB atlas and then 
copy the connection link from that.
and i storing this link in environment variable called 
as MONGO_URI

also need to install mongoose
: npm install mongoose

For connectivity need to add in server.js

Now i am putting listening port into database connectivity
because util it will not connected to database i don't 
want to listen the API request

------------------------------------------------------------------------------------------
Fourth video: MongoDB Schemas
------------------------------------------------------------------------------------------

const mongoose = require('mongoose')

Why: Mongoose is a library that helps interact with MongoDB using a simpler and more structured way.

Use: It allows you to create schemas, models, and run queries easily without manually writing MongoDB commands.
------------------------------------------------------------------------------------------

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required :true
    }
},{timestamps: true})

Why: MongoDB by default is “schema-less” (documents can have any shape).
A schema enforces consistent structure so all workout documents have the same fields and types.

Use:

type: String/Number → Ensures only that type of data can be stored.

required: true → Prevents saving documents with missing fields.

timestamps: true → Automatically adds createdAt and updatedAt for tracking changes.
------------------------------------------------------------------------------------------

module.exports = mongoose.model('Workout',workoutSchema)

Why: The model is a wrapper around the schema that connects it to a MongoDB collection.

Use:

Automatically creates a collection named workouts (pluralized form).

Provides methods like .create(), .find(), .findById(), .updateOne(), .deleteOne() to interact with the database.
------------------------------------------------------------------------------------------

const Workout = require('../models/workoutModel')

Why: We need the model in our route file to actually talk to the database.

Use: This gives access to database operations for the workouts collection.
------------------------------------------------------------------------------------------

const {title, load, reps} = req.body

Why: This extracts the data sent by the client in the request.

Use: Makes it easy to pass this data directly to the .create() function.
------------------------------------------------------------------------------------------

const workout = await Workout.create({title,load,reps})

Why: .create() is a shortcut to insert a new document into the database.

Use:

Automatically validates the data against the schema.

Returns the newly created document (including _id, createdAt, updatedAt).
------------------------------------------------------------------------------------------

res.status(200).json(workout);

Why: After successful creation, we must let the client know what happened.

Use:

Status 200 → means success.

Sends the created document back, so the frontend knows what was stored.