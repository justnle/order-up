# Order Up

## User Story

As a restaurant business owner, I would want my restaurant to be organized and provide customers with good dining experience. With a restaurant ordering system, I will be able to track food orders, make sure we don't lose order tickets. Also I will be able to keep track of employee working shifts, inventories, and also update new dish to the menu.


![inAction1](https://user-images.githubusercontent.com/56751349/81463932-5feeb480-9172-11ea-82fc-a72b7863b33c.png) 
![inAction1](https://user-images.githubusercontent.com/56751349/81463943-8dd3f900-9172-11ea-9d0f-da6ba7a5c148.png) 


## Table of Contents

* [Description](#description)
* [Take a look inside](#take-a-look-inside)
* [UML](#uml)
* [Deployment](#deployment)
* [Technologies Used](#technologies-used)
* [Authors](#authors)

## Description

Our restaurant ordering system is a platform for point of digital ordering, employee management, inventory management, floor planning and food preparing.


## Take a look inside

1. Home page -- employees are able to clock in and out
2. Menu page -- manager is able to add or edit dishes to menu  
3. Inventory page -- manager is alble to check the inventories
4. Employees page -- displays the information of employees, for example their PIN number, permission ect.
   Also allows manager to edit employee information.
5. Shifts page -- presents the clock in & out time of employees
6. Front of house page -- enables server to make orders from customers
7. Back of house page -- enables chef to receive orders and can start preparing
8. Floor plan page -- enables host to identify available and reserved tables 

## UML

![inAction1](https://user-images.githubusercontent.com/56751349/81464224-73028400-9174-11ea-8ad0-bb715f7ffc8d.png) 


## Deployment

To install and use locally,

1. `git clone` this repository to a local directory
2. In the terminal, `cd` to the repository directory and run

```bash
npm i
```

3. Then run the application with:

```bash
npm start
```

4. Your browser will open to [http://localhost:3000/](http://localhost:3000/)
5. The deployed application can be found on Heroku at https://order-up-jkrtr.herokuapp.com/

- Github: https://github.com/twopcz/order-up

## Technologies Used

* [Axios](https://github.com/axios/axios) - Promise based HTTP client
* [Bootstrap](https://getbootstrap.com/) - CSS library
* [JavaScript](https://www.javascript.com/)
* [MongoDB](https://www.mongodb.com/) - Document-oriented database program
* [Express.js](https://expressjs.com/) - Web application framework for Node.js
* [React.js](https://reactjs.org/) - Frontend JavaScript library
* [Node.js](https://nodejs.org/en/) - JavaScript runtime

Dependencies:
```
  "dependencies": {
    "axios": "^0.19.2",
    "bootstrap": "^4.4.1",
    "date-fns": "^2.12.0",
    "express": "^4.17.1",
    "if-env": "^1.0.4",
    "mongoose": "^5.9.10"
    "react": "^16.13.1",
    "react-bootstrap": "^1.0.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1"
  }
```

* [date-fns](https://date-fns.org/) - JavaScript date utility library
* [if-env](https://github.com/ericclemmons/if-env#readme) - dev & production script handler
* [mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling tool
* [react-bootstrap](https://react-bootstrap.github.io/) - Bootstrap built as React Components
* [react-router-dom](https://github.com/ReactTraining/react-router#readme) - Declarative routing for React

## Authors

- [Justin Le](https://github.com/twopcz)
- [Kaitlyn Carlson](https://github.com/KaitlynCarlson)
- [Rachel Rohrbach](https://github.com/rachelrohrbach)
- [Richard Wang](https://github.com/phaggio)
- [Teresa Liu](https://github.com/teresaliuu)
