# Strapi plugin untransform-response

### Whati it does:

Efficently removes all the unnescessary data/attributes tags.

### Before 
```json
{
    "data": {
        "id": 1,
        "attributes": {
            "title": "Some title",
            "relations": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Some other title",
                        }
                    }
                ]
            }
        }
    },
    "meta": {}
}
```

#### After
```json
{
    "data": {
        "id": 1,
        "title": "Some title",
        "relations": [
            {
                "id": 2,
                "title": "Some other title",
            }
        ]
    }
}
```

### Installation 

```py
yarn add strapi-plugin-untransform-response
or 
npm install strapi-plugin-untransform-response
```
