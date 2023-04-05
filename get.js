var http=require('http');
var url=require('url');
var q=require('querystring');
function on_request(request,response){
    var path=url.parse(request .url).pathname;
    console.log('Request for'+path+'received');
    var query =url.parse(request.url).query;
    console.log(query);
    var name=q.parse(query)['name'];
    var mail=q.parse(query)['mail'];
    var password=q.parse(query)['password'];
    response.write("hello "+name+" your mail-id "+mail);
    response.end();

}
http.createServer(on_request).listen(8010);
console.log("Account logged in");