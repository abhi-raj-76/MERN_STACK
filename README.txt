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

