const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require('./utils/inputCheck');

//express middleware
app.use('/api', apiRoutes);
app.use(express.urlencoded({ extended: false }));

// Use apiRoutes
app.use(express.json());

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

  
// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});












