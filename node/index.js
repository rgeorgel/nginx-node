const express = require('express');
const fakerator = require('fakerator');
const peopleService = require('./service/people.service');
const database = require('./db');

const run = async () => {
  try {
    await database.sync();
  } catch (error) {
    console.log(error);
  }
};

run();

const app = express();
const port = 3000;

app.get('/', async (req,res) => {
  const name = fakerator().names.name();
  await peopleService.add(name);

  const list = await peopleService.list();

  let peopleList = '';
  list.forEach((item) => {
    peopleList += `- ${item.name} <br />`;
  })

  res.send(`<h1>Full Cycle Rocks!</h1>${peopleList}`);
});

app.listen(port, ()=> {
  console.log(`Running on port: ${port}`);
});
