import express from 'express';

const app = express();

app.use(express.json()); // This line is necessary for parsing JSON request bodies

app.listen(5001, () => console.log('API running on port 5001'));

app.get('/', (req, res) => res.json('My API running :)'));

app.post('/package', async (req, res) => {
  try{
    const packageData = req.body; // Access the parsed JSON body
    // Save the package or process it as needed
    console.log(packageData);
    res.status(201).json({
      message: 'Package created successfully',
      package: packageData
    });
  } 
  catch {
    console.log("ERROR");
  }
  });

app.get('/package', async (req, res) => {
  res.status(201).json({
    message: 'Get worked successfully'
  });
});