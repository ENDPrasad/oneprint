const express = require('express');
const { print, getPrinters } = require('pdf-to-printer');

const app = express();
app.use(express.json());

// Get all printers
app.get('/printers', (req, res) => {
  const printers = getPrinters();
  res.json(printers);
});

// Print endpoint
app.post('/print', async (req, res) => {
  try {
    const { filePath, printerName } = req.body;

    await print(filePath, {
      printer: printerName,
      silent: true,
      copies: 1
    });

    res.send("Printed successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => console.log('Print Agent running on 5000'));
