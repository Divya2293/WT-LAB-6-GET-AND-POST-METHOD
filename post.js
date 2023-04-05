var http=require('http');
var querystring=require('querystring');
var name,mail;
http.createServer(function(req,res){
    var data1="";
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("Data is string"+data1);
    });
    req.on('end',function(){
        q=querystring.parse(data1);
        console.log(q);
        name=q['name'];
        mail=q['mail'];
        password=q['password'];

        res.write("Hello " +name+ ", your mail id is " +mail+" Thank you for logging");
        res.end();
    });
}).listen(8060);
console.log("Server has started..");
