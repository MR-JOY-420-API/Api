const express = require('express');
const { Imgur } = require('imgur-uploader-api')
const { alldl } = require('aryan-videos-downloader');
const path = require('path');
const axios = require('axios')

const app = express(); // Initialize app here
const port = 3000;



app.get('/alldl', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'ArYAN ALL-DOWNLOADER API RUNNING' });
    }

    try {
        const data = await alldl(url);
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to download media' });
    }
});

app.get('/imgur', async (req, res) => {
  const url = req.query.Url; 

  if (!url) {
    return res.status(400).json({ error: 'IMGUR API RUNNING' });
  }

  try {
    
    const result = await Imgur(url);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server is running`);
});
