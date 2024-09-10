const express = require('express');
const router = express.Router();

// Sample data for the chart
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [12, 19, 3, 5, 2, 3, 7]
};

router.get('/', (req, res) => {
    res.json(chartData);
});

module.exports = router;
