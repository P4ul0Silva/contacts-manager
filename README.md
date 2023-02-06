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
Rode as migrações para criar um banco com dados já cadastrados
```bash
yarn prisma migrate dev --name init
```
Para inciar a API
```
yarn start:dev
```
O Acesso está disponível no local configurado com o swagger, onde é possível testar todas as requisições <strong>fácilmente</strong>
```
http://localhost:3001/api
```

Ou Pelo Insomnia, através dos endpoints:
```
GET /clients
GET /clients/#id
DELETE /clients/#id
POST /clients : 
{
  "fullName": "Nome",
  "email": "nome@mail.com",
	"phone": "99999999999"
}

PATCH /clients/#id

{
  "fullName": "usuario atualizado",
  "email": "usuarioatualizado@mail.com",
  "phone": "999999999"
}

GET /contacts
GET /contacts/#id
DELETE /contacts/#id
POST /contacts
{
  "clientId": "a7e5224a-e207-4540-ba96-f04186e1b799",
  "fullName": "contato",
  "email": "contato@mail.com",
  "phone": "6666666"
}

PATCH /contacts/#id

{
  "fullName": "usuario atualizado",
  "email": "usuarioatualizado@mail.com",
  "phone": "999999999"
}

```

