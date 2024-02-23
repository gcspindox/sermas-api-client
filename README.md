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

Set the `API_URL` env and run 

```sh
make generate
```