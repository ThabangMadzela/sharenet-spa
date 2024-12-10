const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allow frontend to access backend

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enables cross-origin requests
app.use(bodyParser.json()); // Parses incoming JSON requests
require('dotenv').config();

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,         // database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1);
  }
  console.log('Connected to the database');
});

// Route to get all venues with workshops
app.get('/venues', (req, res) => {
  const query = `
    SELECT venues.id AS venueId, venues.name, venues.location, 
      workshops.id AS workshopId, workshops.date, workshops.seats_available
    FROM venues
    LEFT JOIN workshops ON venues.id = workshops.venue_id
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching venues', error: err });
    }

    const venues = [];
    results.forEach((row) => {
      let venue = venues.find((v) => v.id === row.venueId);
      if (!venue) {
        venue = {
          id: row.venueId,
          name: row.name,
          location: row.location,
          workshops: [],
        };
        venues.push(venue);
      }
      venue.workshops.push({
        id: row.workshopId,
        date: row.date,
        seatsAvailable: row.seats_available,
      });
    });
    res.json(venues);
  });
});

// Route to book a workshop
app.post('/book', (req, res) => {
  const { venueId, workshopId } = req.body;

  // Check if the workshop has available seats
  db.query('SELECT seats_available FROM workshops WHERE id = ?', [workshopId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking seat availability', error: err });
    }

    const workshop = results[0];
    if (workshop.seats_available > 0) {
      // Decrease available seats
      db.query('UPDATE workshops SET seats_available = seats_available - 1 WHERE id = ?', [workshopId], (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error updating seat availability', error: err });
        }
        res.json({ success: true });
      });
    } else {
      res.json({ success: false, message: 'No seats available' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
