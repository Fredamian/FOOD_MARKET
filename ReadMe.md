# Getting Started with FOOD MARKET APP

## Intro

I thought about this project, so that it mainly helps people who manage their homes on a daily basis, and want to always have fresh food, or even the most sought after ones, so basically this software is an indirect exchange platform, which allows users buy or sell in the same. This allows for an exhaustive search for any product, and with just two clicks you will know where to find what you want.


## Environment Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4900](http://localhost:4900) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Seller routes to follow

route: `/newSeller`
method type: `post`
description: to create a new seller

route: `/getSellers`
method type: `get`
description: to return a list of all the sellers

route: `/removeSeller`
method type: `delete`
description: to delete a seller passed in the body


## Client routes to follow

route: `/newClient`
method type: `post`
description: to create a new client

route: `/getClients`
method type: `get`
description: to return a list of all the clients

route: `/removeClient`
method type: `delete`
description: to delete a client passed in the body

route: `/getSellers`
method type: post
description: to return a list of all the sellers

route: `/login`
method type: `post`
description: to create a new client wich does assign a token wich will be combined with the secret code

route: `/register`
method type: `post`
description: when you do create the client, you will now, when logged, pass the email and password


## Count all the seller and clients

route: `/counts`
method type: `get`
description: to return a list of all sellers and clients

## Product routes to follow

route: `/getProducts`
method type: `get`
description: to return a list of all the products

route: `/newProduct`
method type: `post`
description: to create a new product connected to a seller id

## Buy routes to follow
route: `/products/:productId`
method type: `get`
description: it return just an only product for the given id