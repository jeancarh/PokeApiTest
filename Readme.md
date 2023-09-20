# POKEDEX API NODE JS AND EXPRESS JS

This project is a test for waco company to begin you will need to install the next things

```bash
Node js v18
```

## Installation

```bash
npm install
```
```bash
The node API will hear in localhost:3000
```

## Api Usage

### Get list of Users

### Request

`GET /api/users`

### Response
```json
[
    {
        "_id": "6509541d99b2ca2262331ec6",
        "username": "jean",
        "email": "jean",
        "password": "jean",
        "__v": 0,
        "favorites": []
    },
    {
        "_id": "650a262831f564e1b1bfeb63",
        "username": "jean100",
        "email": "jean1",
        "password": "$2b$10$sKJsEsB1pu5PaLYtpBbke.ZOm7adVUvEvblZaNg/zVeN3Pngm1rli",
        "age": "100",
        "__v": 0,
        "favorites": [
            {
                "name": "pidgeot",
                "url": "https://pokeapi.co/api/v2/pokemon/18/"
            },
            {
                "name": "rattata",
                "url": "https://pokeapi.co/api/v2/pokemon/19/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            }
        ]
    }
]

```

### Create User

### Request

`POST /api/users`
```json
{
    "username": "jean10023",
    "password": "jean1"
}
```

### Response
```json
{
    "username": "jean10023",
    "password": "$2b$10$zQB36/zfGhUG1lrz2vt6Lu5zSGuR1edStzwTcyTIqD.e52gF/C5Oa",
    "favorites": [],
    "_id": "650abafe6a894eb6e0db49e7",
    "__v": 0
}
```
### Login

### Request

`POST /api/users`
```json
{
    "username": "jean100",
    "password": "jean1"
}
```

### Response
```json
{
    "user": {
        "_id": "650a262831f564e1b1bfeb63",
        "username": "jean100",
        "email": "jean1",
        "password": "$2b$10$sKJsEsB1pu5PaLYtpBbke.ZOm7adVUvEvblZaNg/zVeN3Pngm1rli",
        "age": "100",
        "__v": 0,
        "favorites": [
            {
                "name": "pidgeot",
                "url": "https://pokeapi.co/api/v2/pokemon/18/"
            },
            {
                "name": "rattata",
                "url": "https://pokeapi.co/api/v2/pokemon/19/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            }
        ]
    },
    "token": "<yourTokenWillBeHere>"
}
```


### Get Pokemons

### Request

`POST /api/pokemons`

### Response
```json
{
    "count": 1281,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
    ]
}
```

### Post Favorite Pokemons

### Request

`POST /api/pokemons`
```json
{
    "username": "jean100",
    "favorites": [
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        }
    ]
}
```
### Response
```json
{
    "message": "Row Updated Succesfully"
}
```

### Get Favorites Pokemons

### Request

`POST /api/users/favorites?id=<yourIdHere>`

### Response
```json
[
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
    }
]
```