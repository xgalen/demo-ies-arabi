# Demo IES Arabi

This is a TypeScript-based Express project that exposes 2 GET endpoints with their respective controllers.

## Project Structure

```
demo-ies-arabi
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── getController1.ts
│   │   ├── getController2.ts
│   └── routes
│       ├── getRoute1.ts
│       ├── getRoute2.ts
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

## Project Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Build the TypeScript files by running `npm run build`.
4. Start the server by running `npm start`.

## Endpoints

The project exposes the following GET endpoints:

1. Endpoint 1: `/prices`
   - Controller: `GetController1`
   - Description: Handles the logic for the first GET endpoint.

2. Endpoint 2: `/users`
   - Controller: `GetController2`
   - Description: Handles the logic for the second GET endpoint.

## Development

During development, you can use the following npm scripts:

- `npm run dev`: Starts the server with nodemon, which automatically restarts the server when changes are made to the source code.

## Test it manually

Call the endpoints with `curl localhost:3000/users` or `curl localhost:3000/prices/2/sku1`
You can use curl (or any other toool) or just write the endpoint in your browser.

Watch the server logs and if you call for the same pair of tariff+sku you will see the time diff like this:

```
Server is running on port 3000
Querying: 2:sku1
db hit
query: 478.548ms
Querying: 2:sku1
cache hit
query: 0.227ms
```

Extra: maybe you want to stress the server using [wrk](https://github.com/wg/wrk), [autocannon](https://github.com/mcollina/autocannon)
or [loadtest](https://github.com/alexfernandez/loadtest)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.