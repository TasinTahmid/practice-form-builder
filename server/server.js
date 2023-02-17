const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/user.model');
const Form = require('./models/form.model');
const Submission = require('./models/submission.model');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form-builder');


app.use(cors());
app.use(express.json());

app.get('/api/users', (req, res)=>{
  res.send('All users are shown here...');
});

app.post('/api/register', async (req,res) => {
  console.log(req.body);
  try{
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const justCreatedUser = await User.find().sort({_id:-1}).limit(1);
    const user_id = justCreatedUser[0]._id;

    res.json({status: 'ok'});
  }
  catch(err){
    res.json({status: 'error', error: 'Duplicate email'});
  }
  
});

app.post('/api/add-submission', async (req,res) => {
  console.log(req.body);
  
    const test = await Submission.create({
      formName: req.body.formName,
      formId: req.body.formId,
      values: req.body.formData,
    });

    const form_id = test._id;
    res.json({form_id,status: 'ok'});
  
});

app.post('/api/create-form', async (req,res) => {
  console.log(req.body);
  
    const test = await Form.create({
      name: req.body.name,
      fields: req.body.fields,
    });
    
    const form_id = test._id;
    res.json({form_id,status: 'ok'});
  
});

let currentUser;

app.post('/api/login', async (req,res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if(user){
    currentUser = user;
    const token = jwt.sign({
      userId: user._id,
      name: user.name,
      email: user.email,

    },'secret123');

    return res.json({ status: 'ok', user: token });
  }
  res.json({ status: 'error', user: false });
  
});

app.get('/api/login', (req, res) => {
  res.send(currentUser);
});

app.get('/api/form-fields/:id',  (req, res) =>{
  const id = req.params.id;
  console.log('haha',id);
  Form.findById(id)
  .then(form => {
    if(!form) return res.status(404).end();
    console.log(form)
    return res.status(200).json(form);
  })
  .catch(err => next(err));
});

app.delete('/api/users/:id', (req, res) =>{
  const id = req.params.id;
  User.findOneAndRemove({_id: id}, (err) =>{
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    console.log('User deleted successfully...');
    return res.status(200).send();
  })
});



app.listen('5000',() => {
  console.log('Listening on port 5000...');
});