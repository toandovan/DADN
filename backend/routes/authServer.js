// require('dotenv').config()

const express = require('express')
var router = express.Router();
const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET = "123"
const REFRESH_TOKEN_SECRET = "aaa"

// app.use(express.json())

let refreshTokens = []

// get the data from the database
const posts = [
    {
        username: 'Kyle',
        password: '1234',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        password: '1235',
        title: 'Post 2'
    }
]
// tesing authentication
router.get('/posts', authenticateToken, (req, res) => {
    console.log(req.user.name)
    res.json(posts.filter(post => post.username === req.user.name && post.password === req.user.pass))
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

// use refresh token to create new access token when it forbidden
router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

// logout to delete the token exist
router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(200)
})

// let ACCESS_TOKEN_SECRET="1fae7e72915ed4e4a6493b71d460fe544e03338c406b4d6f5c0e0c8447575589497945df226e0685e0bc8148c8ac8d9908d7693730f1a4106cdacb2efa018970"
function generateAccessToken(user) {
    // console.log(process.env.ACCESS_TOKEN_SECRET)
    // bug because .env does not read
    // console.log(JSON.parse(JSON.stringify(process.env.ACCESS_TOKEN_SECRET)))
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '10h' })
}

// generate the access token and refresh token for users
router.post('/login', (req, res) => {
    // Authenticate User

    const username = req.body.username
    const password = req.body.password
    console.log(username + " " + password);

    let User = posts.filter(post => post.username === username && post.password === password)
    console.log(User);

    if (User.length == 0) { res.json({ valid: 0 }) }
    else {
        // console.log(username)
        const user = { name: username, pass: password }

        const accessToken = generateAccessToken(user)
        // console.log(accessToken)
        const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET)
        // console.log(refreshToken)
        refreshTokens.push(refreshToken)
        res.json({ valid: 1, accessToken: accessToken, refreshToken: refreshToken })
    }
})



module.exports = router;