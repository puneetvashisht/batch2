var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

app.use(cors())

app.use(express.static('webcontent'))
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World!')
})

var employees = [];

app.post('/emps', function(req, res){
    console.log(req.body);
    employees.push(req.body);
    res.json({success:true});
})

app.get('/emps', function(req, res){
    res.json(employees);
})

app.get('/users', function(req,res){
    var users = [{name:'Ravi', role:'SE'},
                {name:'Priya', role: 'QA'},
                {name: 'Ridhi', role:'IT'}];
    res.json(users);
    
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})