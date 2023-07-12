## Configuração básica para API nodeJS
# Rodar comandos no terminal
Inicializa gerenciador de pacotes
```
npm init -y
```
Inicia o git
```
git init
```
# Instalação de pacotes
Instalar typescript e ts-node (transpilador)
```
npm i -D tsc typescript ts-node
```
Instalar nodemon (reiniciar servidor automatico)
```
npm i -D nodemon
```
Criar arquivo de configurações do typescript
```
npx tsc --init
```
Instalar express (servidor)
```
npm i express
```
Instalar types para identificação de código
```
npm i @types/express @types/node
```
Instalar dotenv para gerenciar variaveis de ambiente
```
npm -D dotenv
```
# Gerenciar arquivos
Criar arquivo .gitignore
```
nano .gitignore
```
Colar no arquivo .gitignore
```
node_modules
.env
```
Criar arquivo .env
```
nano .env
```
Colar no arquivo .env
```
PORT=3333
```
# Estrutura do projeto
Criar pasta src
```
mkdir src
```
Criar arquivo server.ts
```
nano src/server.ts
```
Colar no arquivo server.ts
```
console.log('Bora devs');
```
Adicionar script no arquivo package.json
```
"start:dev": "nodemon --watch 'src/' --exec ts-node src/server.ts -e ts"
```
# Testar servidor
Colar no arquivo server.ts
```
import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3333

app.get('/', (request, response) => {
    response.send('Hello devs');
})

app.listen(port, () => console.log(`listening on port ${port}!`))
```
# Rodar o servidor
```
npm run start:dev
```
# Comitar codigo
```
git add .
```
```
git commit -m 'chore: api typescript'
```
```
git branch -M main
```
```
git remote add origin https://github.com/username/new_repo.git
```
```
git push -u origin main
```
