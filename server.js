
const { randomUUID } = require('crypto');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3006;
require('./routes/APIroutes')(app)
app.use(express.static('public'));


//set where the first page opens to
app.get('/', (req, res) => res.send('/notes'));

app.get('/', (req, res) => res.send('/notes'));


const bodyParser = require('body-parser');
const { isPromise } = require('util/types');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded\

////GOING FOFF OF HERE MIO+OTHER CFUFDU

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('/html/api/notes', (req, res) => {
  // Send a message to the client



  res.status(200).json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});


//creates the content setup to be set int he db
app.post('/api/notes', (req, res) => {

  const { title, text } = req.body;
  console.log(title, text)

  if (title && text) {
    const newNote = {
      title,
      text,
      id: randomUUID(),
      ContentType: 4,
    }



    //send input to db
    fs.readFile(path.join(__dirname, '/db/db.json'), (err, data) => {
      if (err) {
        console.error(err);
      } else {


        const savedNote = JSON.parse(data);

        savedNote.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(savedNote, null, 4),
          (writeErr) => {
            writeErr
              ? console.error(writeErr)
              : console.info('Sucesfully updated thing')
            res.status(201).json(response);

          }
        )
      }
    })

    app.delete('/', (req, res) => {
      res.send("DELETE Request Called")
    })

    //    /WHEN I click on the Write icon in the navigation at the top of the page
    //  THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

    const response = {
      status: 'sucess',
      body: newNote,
    };

    console.log(response);

  } else {
    res.status(500).json('Error in posting review');
  }
});



//grabes the node /notes and say when clicked go to public noteshtml


app.get('/api/notes/id', (req, res) => {
  res.json({
    term: 'api',
    description:
      'application'
  });
})
  ;


//set the port to listen on the port defined above
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

app.post('/api/reviews', (req, res) => {
  const { title, text } = req.body
  const newNote = {
    title,
    text,
    id
  }

})


app.delete('/:id', (req, res) => {
  // delete a category by its id value
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
