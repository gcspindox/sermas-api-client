API_URL?=http://localhost:8080

ASYNCAPI_URL?=${API_URL}/api/async-json
OPENAPI_URL?=${API_URL}/api/swagger-json

generate: openapi asyncapi build

openapi/download:
	curl '${OPENAPI_URL}' -k -o ./openapi.json

openapi/generate:
	npm run generate:openapi

openapi/generate/dev:
	npm run generate:openapi:dev

openapi: openapi/download openapi/generate

asyncapi/download:
	curl '${ASYNCAPI_URL}' -k -o ./asyncapi.json

asyncapi/generate:
	npm run generate:asyncapi

asyncapi/generate/dev:
	npm run generate:asyncapi:dev

asyncapi: asyncapi/download asyncapi/generate

build:
	npm run build

build/watch:
	npm run build:watch
