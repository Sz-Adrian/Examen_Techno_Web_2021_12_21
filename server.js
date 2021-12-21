let express = require('express');

let app = express();

//route
app.get('/' , (req , res)=>{

   res.render('home.ejs', {name: "Paul"});

});
//url
app.get('/index',(request,response) => {
    //response.send("Bonjour " + request.query.name);
    response.render('home.ejs', {name: request.query.name});
});
//param

app.get('/index/:name',(request,response) => {
    // response.send("Bonjour " + request.params.name);
    response.render('home.ejs', {name: request.params.name});
});

//

// app.use(express.urlencoded());


// app.get('/',(req,res) =>{
//     res.render('form.ejs');
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send("Hello Peter "+req.body.myname);
// });


// app.use(express.static('public'));




//Launch serv

app.listen(3000, function() {
    console.log('server open on 3000')
});
