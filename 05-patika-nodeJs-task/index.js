const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    switch(url){
        case '/':
            res.writeHead(200,{"Content-Type":"text/htm"});
            res.write('Sunucu sayfasina hos geldiniz.');
        break;
        case '/index':
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2> ${url.substr(1)} sayfasina hos geldiniz. </h2>`);
        break;
        case '/hakkimda':
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2> ${url.substr(1)} sayfasina hos geldiniz. </h2>`);
        break;
        case '/iletisim':
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h2> ${url.substr(1)} sayfasina hos geldiniz. </h2>`);
        break;
        default :
            res.writeHead(404,{ "Content-Type": "text/html" });
            res.write(`<h2> 404 SAYFA BULUNAMADI! </h2>`)
    }
    res.end();
});
const PORT =5000;
server.listen(PORT,()=>{
    console.log(`Sunucu port ${PORT} de baslatildi`);
});