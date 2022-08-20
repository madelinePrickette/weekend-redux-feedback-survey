const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, req) => {
    let queryText = 
    `
    SELECT * FROM "feedback";
    `;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows); //OK to client
        }).catch( (error) => {
            console.log('Error in server GET', error)
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let feedback = req.body
    let queryText = 
    `
    INSERT INTO "feedback"
    ($1, $2);
    `;

    let queryValues = [
        feedback.feeling,
        feedback.understanding
        //SUPPORT
        //COMMENTS
    ]
    pool.query(queryText, queryValues)
        .then( (result) => {
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('Error in server POST', error)
            res.sendStatus(500);
        })
})

module.exports = router;