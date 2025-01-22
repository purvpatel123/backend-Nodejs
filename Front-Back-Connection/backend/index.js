import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send("server is ready");
})
app.get('/api/jokes', (req, res) => {
   const jokes= [
        {
            "id": 1,
            "title": "Why don't skeletons fight?",
            "content": "Because they don't have the guts!"
        },
        {
            "id": 2,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta!"
        },
        {
            "id": 3,
            "title": "Why did the math book look sad?",
            "content": "Because it had too many problems."
        },
        {
            "id": 4,
            "title": "Why don’t scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 5,
            "title": "Why couldn’t the bicycle stand up by itself?",
            "content": "It was two tired!"
        }
    ]

    res.send(jokes);

});

const Port = 3000;
app.listen(Port, () => {
    console.log(`serve at http://localhost:${Port}`);
})