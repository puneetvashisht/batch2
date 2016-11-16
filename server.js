var express = require('express')
var app = express()

app.use(express.static('webcontent'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', function(req,res){
    var users = [{name:'Ravi', role:'SE'},
                {name:'Priya', role: 'QA'},
                {name: 'Ridhi', role:'IT'}];
    res.json(users);
    
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})