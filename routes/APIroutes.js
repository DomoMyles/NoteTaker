const express = require('express');
const fs = require('fs')
const path = require('path')
const PORT = 3002;
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (err, data) {
            if (err) throw err
            res.send(data)
            console.log(data)
        })
    })
}


