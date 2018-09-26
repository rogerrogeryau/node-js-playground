// console.log('Our Express App will go here!');


const express =require("express");
const app = express();


// send back result to users, depending on their request  
app.get("/", function(req,res){
	console.log("Someone visits home page");
	res.send("Hi there! this is home page");
	
});


app.get("/bye", function(req,res){
	console.log("Someone visits bye page");
	res.send("Good Bye");
});

app.get("/page1", function(req,res){
    console.log("Someone visits page 1");
	res.send("Page 1 is here");
});



// routes
app.get("/r/:subreddit/", function(req,res){
    var subreddit = req.params['subreddit'];
    console.log("Someone visits subreddit with prarma: " + subreddit);
	res.send("Subreddit page : " + subreddit.toUpperCase());
});

app.get("/r/:subreddit/comments/:id/:title/", function(req,res){
    console.log("Someone visits subreddit comment page");
    console.log("request params:");
    console.log(req.params);
	res.send("Subreddit page comment page");
});

// exercise

// animals
function animalSound(animal){
    if (animal === 'pig') {
        return ('Oink!');
    }else if(animal === 'cow'){
        return ('Moo!');
    }else if(animal === 'dog'){
        return ('Woof Woof!');
    }else{
        return ('animal unrecognized');
    }
}

app.get("/speak/:animals/", function(req,res){
    var animal = req.params['animals'];
    console.log("someone visits animal page: " + animal);
	res.send(animalSound(animal));
});

// repetitive hellos /blahs
function helloAndblah(soundType,times) {
    // body...
    var message = "";
    if (soundType === "hello") {
        for (var i = 0; i < times; i++) {
            message += "hello "+ "\n";
        }
        return (message);
    } else if (soundType === "blah"){
        for (var i = 0; i < times; i++) {
            message += "blah "+ "\n";
        }
        return (message);
    }
    
}

app.get("/:soundType/:times", function(req,res){
    var soundType = req.params['soundType'];
    var times = req.params['times'];
    
    console.log("hello/ blah page visited!")
    console.log("soundType: " + soundType + "\n" + "times: " + times );
	res.send(helloAndblah(soundType,times));
//     res.send("hello");
});




// catch the request of non-existing page 
app.get("*", function(req,res){
    console.log("someone visits 404 not found page");
	res.send("Sorry page not found .......");
});


// tell express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function () {
	console.log('server is up and running...');
});


