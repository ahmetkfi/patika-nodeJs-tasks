const POSTS =[
    {postId:1,description:'javascript',date:'2023-04-19'},
    {postId:2,description:'nodeJs',date:'2023-04-19'},
    {postId:3,description:'html',date:'2023-04-19'},
];

const listPosts=()=>{
    POSTS.map((posts)=>{
        console.log(`Aciklama : ${posts.description} , post yayinlanma tarihi : ${posts.date}`);
    });
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        POSTS.push(post);
        console.log('----- Yeni Post Listesi ------'),
        resolve(POSTS);
        reject('Post oluşturulamadı!');
    });
}
async function showAllPosts(){

    try{
        await createPost({postId:4,description:'c#',date:'2023-04-20'});
        listPosts();
    }catch(err){
     console.log(err);   
    }
    
}
listPosts();
showAllPosts();

