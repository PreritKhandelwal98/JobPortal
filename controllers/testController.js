export const testPostController =(req,resp)=>{
    const {name}=req.body;
    resp.status(200).send(`Your Name is ${name}`);
}

// const testGetController =(req,resp)=>{
//     resp.send("THis message is coming from controller");
// }

//  default {testPostController};