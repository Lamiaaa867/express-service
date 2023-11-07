 const express= require('express');
 const app= express();
  const users=[
    {
        id:50,
        name :"lamia",
        email :"lamia@gmail.com",
         age:40
    },
    {
        id:51,
        name :"ahmed",
        email :"ahmed@gmail.com",
         age:45
    },
    {
        id:51,
        name :"hossam",
        email :"hoassam@gmail.com",
         age:45
    }

  ]
  //get all users 
  app.get('/getallusers',(req,res,next)=>{
   // console.log(req)
   res.json({users})

  })
  app.use(express.json())
  // add new user 
  app.post('/adduser',(req,res,next)=>{
    const {id}= req.body;
    const check =users.find((user)=>{
        return user.id ==id;
    })
    if (check){
        res.json({message:'user is already added'})
        console.log(users)
    }else {
        users.push(req.body)
        res.json({message:'user is added successfully', users})
    }


  })
  //update user info 
  app.put ('/update',(req,res ,next )=>{
const {id}=req.body;
const usercheck=users.find((user)=>{
    return user.id==id 
})
if (usercheck){
const index=users.indexOf(usercheck);
users[index]=req.body;
res.json({message :"updated successfully"})
console.log(users)

}
else {
    res.json({message :"user not found ", users})

}
  } )
  //delete user 
  app.delete ('/delete',(req,res ,next )=>{
    const {id}=req.body;
    const usercheck=users.find((user)=>{
        return user.id==id 
    })
    if (usercheck){
    const index=users.indexOf(usercheck);
    users.splice(index,1)
    res.json({message :"deleted succesfully "})
    console.log(users)
    
    }
    else {
        res.json({message :"user not found ", users})
    
    }
      } )
      //////////////////////////////////////////////////////////
      app.get('/search',(req,res, next)=>{
        const {id}=req.body;
const usercheck=users.find((user)=>{
    return user.id==id 
})
if (usercheck){
const index=users.indexOf(usercheck);
const searcheditem= users[index];
res.json({searcheditem }  )
console.log(users)
}
else {
    res.json({message :"not found "}  )    
}
      })
      /////sorted 
      app.get ('/sorted', (req,res,next )=>{
        const sorted=users.sort((a, b) => a.name.localeCompare(b.name))
        res.json({sorted})
        console.log(sorted)
      })
 app.listen(3000,()=>{
console.log('app is running ')
 })
//////////////////////////post array 
const post=
[
    {
        id:83,
        points:885,
        postType:"photo"
    },
    {
        id:85,
        points:85,
        postType:"aext"
    },
    {
        id:82,
        points:5,
        postType:"video"
    }

]
app.get('/getallposts',(req,res,next)=>{
    // console.log(req)
    res.json({post})
 
   })
   app.use(express.json())
   // add new user 
   app.post('/addpost',(req,res,next)=>{
     const {id}= req.body;
     const check =post.find((post)=>{
         return post.id ==id;
     })
     if (check){
         res.json({message:'post is already added'})
         console.log(post)
     }else {
         users.push(req.body)
         res.json({message:'post is added successfully', post})
     }
 
 
   })
   //update post info 
   app.put ('/updatepost',(req,res ,next )=>{
 const {id}=req.body;
 const usercheck=post.find((Post)=>{
     return Post.id==id 
 })
 if (usercheck){
 const index=post.indexOf(usercheck);
 post[index]=req.body;
 res.json({message :"updated successfully"})
 console.log(post)
 
 }
 else {
     res.json({message :"post not found ", post})
 
 }
   } )
   //delete user 
   app.delete ('/deletepost',(req,res ,next )=>{
     const {id}=req.body;
     const usercheck=post.find((Post)=>{
         return Post.id==id 
     })
     if (usercheck){
     const index=post.indexOf(usercheck);
     post.splice(index,1)
     res.json({message :"deleted succesfully "})
     console.log(post)
     
     }
     else {
         res.json({message :"user not found ", post})
     
     }
       } )
       //////////////////////////////////////////////////////////
       app.get('/searchpost',(req,res, next)=>{
         const {id}=req.body;
 const usercheck=post.find((Post)=>{
     return Post.id==id 
 })
 if (usercheck){
 const index=post.indexOf(usercheck);
 const searcheditem= post[index];
 res.json({searcheditem }  )
 console.log(post)
 }
 else {
     res.json({message :"not found "}  )    
 }
       })
       /////sorted 
       app.get ('/sortedrev', (req,res,next )=>{
         const sorted=post.sort((a, b) => a.postType.localeCompare(b.postType))
         const reverse= sorted.reverse();
         res.json({reverse})
         console.log(reverse)
       })
app.listen(4000,()=>{
    console.log("post is running")
})