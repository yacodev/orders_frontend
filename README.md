# FRONTEND ORDERS

Implement fronted to Orders using React.

## Demo

You can view the demo [here](https://yacodev.github.io/orders_frontend/).

## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── UI                 # UI components: Button, Counter, Image, Input and Typography.
            ├── CartItem           # Component
            ├── LoginForm           # Component
            ├── MainContainer       # Component
            ├── ProductCard         # Component 
            ├── SearchForm          # Component 
        ├── Page
            ├── Cart                # Page show product add into the cart.
            ├── Login               # Page from login and  create user.
            ├── Home                # Page show all products
            ├── ProductDetail       # Page Show details of one product.
        ├── Routes                      
            ├── ProtectedRoute              
        ├── Context                      
            ├── SessionContext       #save the token and  Id of the user.
        ├── Hooks                      
            ├── useSessionReducer    # Reducer to manage user session.
            ├── useTotalReducer      # Reducer to calculate total order
        ├── services
            ├── order_fecther         # Service to post order.
            ├── product_fecther        # Service to get all products.
            ├── session_fecther        # Service to create and delete session.
            ├── user_fecther          # Service to create new User.
        ├── static
            ├── icon and images             # Images and Icons to header home pages.
        ├── utils                      
            ├── capitalizeString            # Function to capitalize a string
    └── README.md                   # README


## Details

* Using React hooks.
* Using React components.
* Using React Reducer.
* Using React Context.

## Library

* gh-pages -> to generate a github pages.
* emotion-styled  -> to write css directly in the component
* react-test-renderer  -> render to test.

## Request

* Git
* Node.js 14.15.2
* yarn


## Inicio de la aplicación

* Clone the repository.
* yarn add
* yarn start

## Tests

* testing-library/react, for execute  `yarn test`