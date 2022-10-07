import express from 'express'
const app = express()
app.use(express.jason())
const port = process.env.PORT || 3000;

let user = [];

function randomNumber() {
    return math.floor(math.random() * 1000000000000);
}

app.post('/user', (req, res) => {
    console.log(req.bady);

    let newUser = {
        id: randomNumber(),
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    user.push(newUser);
    res.send('user is created')

})
app.get('/user:userId', (req, res) => {
    let userId = req.params.userId;
    let isfound = false;

    for (let i = 0; i < array.length; i++) {

        if (user[i].id == userId) {
            res.send(user[i]);
            isfound = true;
            break;
        }
        if (!isfound) {
            res.send("user not found")
        }

    }

})
app.get('/users', (req, res) => {
    res.send(user)
})
app.put('/user:userId', (req, res) => {
    let userId = req.params.userId;
    let index = -1;

    for (let i = 0; i < array.length; i++) {

        if (user[i].id == userId) {
            res.send(user[i]);
            if (index == -1) {
                res.send("user not found")
            } else {
                if (req.body.fullname) {
                    user[index].fullname = user.req.body.fullname
                }
                if (req.body.username) {
                    user[index].username = user.req.body.username
                }
                if (req.body.email) {
                    user[index].email = user.req.body.email
                }
                if (req.body.password) {
                    user[index].password = user.req.body.password
                }
                res.send(user[index])
                res.send("user is modified")
            }
            break;
        }
    }
})
app.delete('/user:userId', (req, res) => {
    let userId = req.params.userId;
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if ( user[i] == userId){
            index = i;
            break ;
        }
        if (index === -1){
            res.send("user not found")
        }else{
            user.splice(index ,1)
            res.send("user is deleted")
        }
        
    }
})
app.delete('/users', (req, res) => {
    user = [];
    res.send("all user deleted")
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})