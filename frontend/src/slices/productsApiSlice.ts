import apiSlice from "./apiSlice";
// We are going to inject different endpoints to our root apiSlice endpoint and
// Any endpoint that we want to hit that has to do with products api can go in the builder function. 
const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({}),
});

export default productsApiSlice;
