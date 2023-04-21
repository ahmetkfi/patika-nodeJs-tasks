const Koa=require('koa');
const app=new Koa();

app.use(ctx=>{
    const path=ctx.path;
    switch(path){
        case '/':
            ctx.type='text/html';
            ctx.body='<h1> INDEX SAYFASINA HOSGELDINIZ </h1>';
        break;
        case '/hakkimda':
            ctx.type='text/html';
            ctx.body=`<h1> ${path.substring(1).toUpperCase()} SAYFASINA HOSGELDINIZ </h1>`;
        break;
        case '/iletisim':
            ctx.type='text/html';
            ctx.body=`<h1> ${path.substring(1).toUpperCase()} SAYFASINA HOSGELDINIZ </h1>`;
        break;
        default :
            ctx.throw=404;
            ctx.body=`404 SAYFA BULUNAMADI`;
        break;
    }
}).listen(3000);

