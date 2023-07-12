import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/gremiovaisaircampeao', (request, response) => {
    response.send('Atenção terraquios, o gremio vai sair campeao! E quem é de é, é! Quem não é deixou de é!')
})

app.listen(port, () => console.log(`listening on port ${port}!`));


