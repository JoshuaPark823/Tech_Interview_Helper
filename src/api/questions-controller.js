const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
    try {
        // test the leetcode fetch here
        response.send('fetch all received');
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.get('/:id', (request, response) => {
    response.send('fetch all by id: ' + request.params.id);
});

module.exports = router;