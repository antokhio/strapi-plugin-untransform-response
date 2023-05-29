# strapi-plugin-untransform-response

##### `@strapi/* ^4.6.0`

## What it does:

Efficiently removes all the unnecessary data/attributes tags.

## Installation

```py
yarn add strapi-plugin-untransform-response

or

npm install strapi-plugin-untransform-response
```

```py
// DON'T FORGET
yarn strapi build
```

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
              "title": "Some other title"
            }
          }
        ]
      }
    }
  },
  "meta": { ... }
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
        "title": "Some other title"
      }
    ]
  },
  "meta": { ... }
}
```

### Settings

Settings are unnecessary, unless you want to disable plugin.

`/config/plugins.ts`

```ts
export default ({ env }) => ({
  ...,
  'strapi-plugin-untransform-response': {
    enabled: false,  // TO DISABLE
  },
  ...,
});
```

### Known issues

`gql` is not supported.

Currently overrides all transformResonse functions, in all controllers, so be advised.
