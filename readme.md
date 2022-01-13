<h1>This is a selenium based framework for running ui tests via a selenium grid</h1>


<h2>Getting started</h2>

```````docker-compose up```````

your selenium hub can be found -> http://localhost:4444/ui/index.html#/

<h2>Run commands</h2>

To run on chrome (default);

```````npm run test```````

```````npm run test -- --browser="chrome"```````

To run on edge;

```````npm run test -- --browser="edge"```````

To run on firefox;

```````npm run test -- --browser="firefox"```````

To run via wdio's wdio-docker-service;

```````npm run test-wdio-docker```````