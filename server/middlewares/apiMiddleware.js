/* eslint-disable no-underscore-dangle */
const express = require('express');
const fs = require('fs');
const router = express.Router();
const BASE_DIR = __dirname.replace('middlewares', '');
const jsonMeetingsPath = `${BASE_DIR}\\data\\meetingsData.json`;
const jsonParticipantsPath = `${BASE_DIR}\\data\\participantsData.json`;
const jsonMatchmakersPath = `${BASE_DIR}\\data\\matchmakersData.json`;
const bodyParser = require('body-parser');

router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.use(bodyParser.json());
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/Meetingslist', (req, res) => {
  console.log('this is list api');
  fs.readFile(jsonMeetingsPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

router.get('/Participantslist', (req, res) => {
  console.log('this is list api');
  fs.readFile(jsonParticipantsPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

router.get('/getMeeting/:id', (req, res) => {
  debugger;
  fs.readFile(jsonMeetingsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const item = _getItem(list, id);
    res.end(JSON.stringify(item));
  });
});

router.get('/getParticipant/:id', (req, res) => {
  fs.readFile(jsonParticipantsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const item = _getItem(list, id);
    res.end(JSON.stringify(item));
  });
});

router.post('/addMeeting', (req, res) => {
  fs.readFile(jsonMeetingsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _addItem(list, item);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonMeetingsPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/addParticipant', (req, res) => {
  fs.readFile(jsonParticipantsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _addItem(list, item);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonParticipantsPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/updateParticipant/:id', (req, res) => {
  fs.readFile(jsonParticipantsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _updateItem(list, item);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonParticipantsPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/deleteMeeting/:id', (req, res) => {
  fs.readFile(jsonMeetingsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const newList = _deleteItem(list, id);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonMeetingsPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/deleteParticipant/:id', (req, res) => {
  fs.readFile(jsonParticipantsPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const newList = _deleteItem(list, id);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonParticipantsPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.get('/getUser/:name&:password', (req, res) => {
  fs.readFile(jsonMatchmakersPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { name, password } = req.params;
    const item = _getValidatedItem(list, name, password);
    res.end(JSON.stringify(item));
  });
});


// Private functions
const _getItem = (list, id) => {
  debugger;
  const currentItem = list.find(item => item.id.toString() === id.toString());
  return currentItem;
};

const _getValidatedItem = (list, name, password) => {
  const currentItem = list.find(item => (item.name.toString() === name.toString() && item.password.toString() === password.toString()));
  return currentItem;
};

const _updateItem = (list, updatedItem) => {
  const newList = [...list];
  const currentItemIndex = newList.findIndex(
    item => item.id.toString() === updatedItem.id.toString(),
  );
  newList[currentItemIndex] = updatedItem;
  return newList;
};

const _deleteItem = (list, id) => {
  const newList = [...list];
  const currentItemIndex = list.findIndex(
    item => item.id.toString() === id.toString(),
  );
  newList.splice(currentItemIndex, 1);
  return newList;
};

const _addItem = (list, addedItem) => {
  console.log(addedItem);
  let lastId = 0;
  if (list.length > 0) {
    const id = list[list.length - 1].id.toString();
    lastId = parseInt(id, 10);
  }
  const item = { id: lastId + 1, ...addedItem };
  const newList = [...list];
  newList.push(item);
  return newList;
};

module.exports = router;
