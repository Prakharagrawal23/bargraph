const express = require('express');
const router = express.Router();

// Sample data for the grid
const gridData = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 }
];

router.get('/', (req, res) => {
    res.json(gridData);
});

module.exports = router;
