# Using Redux Toolkit

<!-- Redux Theory -->

## 1. Install @reduxjs/toolkit && react-redux

## 2. Creating a Store:

in store.ts import {configureStore} function from redux toolkit
The configureStore function takes in an object. In which a reducer key is passed whose value is empty object for the initial.

## 3. Integrating redux toolkit with react app using Provider from react-redux

The store is than passed in the Provider which is used to wrap all the components in the main.tsx file.

## Creating Slices

4. In redux toolkit we create slices. Its a way to organize your application state. Slices are a collection of reducers and actions that are related to each other.
5. We can create multiple slices in redux and each slice will have its own state.

## Creating apiSlice as root/parent slice which will connect with child slice

6. Here we are working with a backend api so we will have a root api slice(this will be root/parent slice), then we are going to extend the root api slice with products api slice, users api slice and orders api slice.
7. To create a slice which does not uses an asynchronous request we use 'createSlice' function imported from redux/toolkit. Since we are using a backend API to fetch data we are going to use "createAPI" function and "fetchBaseQuery" which will help us to make the request to our backend.
8. Creating children api e.g ProductApiSlice which we will inject in main api
