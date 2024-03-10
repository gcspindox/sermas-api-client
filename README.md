# Sermas typescript API client

## Installation

```sh
npm i -s @sermas/api-client
```

## Usage

```ts
import {createSermasClient} from '@sermas/api-client'


const main = async () => {

    const client = await createSermasClient({
        appId: 'my-app',
        access_token: '<token>',
        refresh_token: '<token>',
        domain: 'http://localhost:8080',
    })

    const res = await client.api.authentication.whoami()

    console.log(`Hello from ${res.preferred_username}`)

}

main().catch(e => console.error(e))
```


## Development

Generate the clients and DTO from the API

**Note:** Set the `API_URL` env to change the reference to the SERMAS API

```sh
make generate
```

Then build the client

```sh
make build
```