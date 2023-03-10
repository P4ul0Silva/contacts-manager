# contacts-manager
Simple fullstack CRUD application where user can have multiple contacts associated.



# Instalação

Navegue para 
```bash
cd back_end
```

Rode o comando para instalar as dependencias
```bash
yarn
```
Para inciar a API
```
yarn start:dev
```
<br>

#### O back-end já vem com alguns dados, para testar as requisições. Tente adicionar um contato à um cliente.

<br>

O Acesso está disponível no local configurado com o <strong>[Swagger](http://localhost:3001/api)</strong>, onde é possível testar todas as requisições <strong>fácilmente</strong>.

<br>

```bash
http://localhost:3001/api
```

Ou Pelo Insomnia, através dos endpoints:
# /Clients
```
GET /clients
GET /clients/#id
DELETE /clients/#id

```
POST /clients : 
```js
{
  "fullName": "Nome",
  "email": "nome@mail.com",
  "phone": "99999999999"
}
```

PATCH /clients/#id
```js

{
  "fullName": "usuario atualizado",
  "email": "usuarioatualizado@mail.com",
  "phone": "999999999"
}
```
# /contacts
```
GET /contacts
GET /contacts/#id
DELETE /contacts/#id

```
POST /contacts
```js
{
  "clientId": "a7e5224a-e207-4540-ba96-f04186e1b799",
  "fullName": "contato",
  "email": "contato@mail.com",
  "phone": "6666666"
}
```

PATCH /contacts/#id

```js
{
  "fullName": "usuario atualizado",
  "email": "usuarioatualizado@mail.com",
  "phone": "999999999"
}
```

