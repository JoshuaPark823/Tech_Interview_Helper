const express = require('express');
const { readFile } = require('fs/promises');
const router = express.Router();
// const fetch = require('node-fetch');

// Temporary, TODO: move to service
router.get('/', async (request, response) => {
    try {
        response.send(await readFile('src/cache/all-questions.txt', 'utf-8'));
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.get('/:id', (request, response) => {
    response.send('fetch all by id: ' + request.params.id);
});

module.exports = router;