import express from "express";
const app = express();
const port = 3000;

const contacts = [
    {
        name: "Davi",
        email: "davioliveira@gmail.com"
    },
    {
        name: "Bruno",
        email: "brunosantos@gmail.com"
    }
]

app.get("/contacts", (req, res) => {
    res.send(contacts);
})

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})