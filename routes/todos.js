var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

// GET Todos
router.get('/', function(req, res, next) {
  Todo.find(function(err, docs) {
    if(err) {
      return next(err);
    }
    res.json(docs);
  });
});

/* POST /todos */
router.post('/', (req, res, next) => {
  Todo.create(req.body, (err, post) => {
    if(err) {
      return next(err);
    }
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', (req, res, next) => {
  Todo.findById(req.params.id, (err, post) => {
    if(err) {
      return next(err);
    }

    return res.json(post);
  })
});

/* PUT /todos/id */
router.put('/:id', (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if(err) {
      return next(err);
    }

    return res.json(post);
  });
});

/* DELETE /todos/id */
router.delete('/:id', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if(err) {
      return next(err);
    }

    return res.json(post);
  });
});


module.exports = router;
