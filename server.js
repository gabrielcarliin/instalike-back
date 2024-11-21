import express from "express";


const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 3,
        descricao: "Paisagem com um gato",
        imagem: "https://picsum.photos/id/237/400/300"
    },
    {
        id: 4,
        descricao: "Gatinho dormindo",
        imagem: "https://source.unsplash.com/random/400x300/?cat,sleep"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://unsplash.com/photos/2c-YfqnnjJQ"
    },
    {
        id: 6,
        descricao: "Gato preto em uma rua escura",
        imagem: "https://source.unsplash.com/random/400x300/?cat,black,night"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});