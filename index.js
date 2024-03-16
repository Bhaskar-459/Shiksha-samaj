const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
const port = 3000;
file = __dirname
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/user', (req, res)=>{
    if(req.body.user=="student"){
    res.sendFile(path.join(__dirname+'/studenthome.html'))
    }
    else{
        res.send(path.join(__dirname+'/teacherhome.html'))
    }
});


const studentRouter = require('./routes/student');
app.use('/student', studentRouter);

const teacherRouter = require('./routes/teacher');
app.use('/teacher', teacherRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});