export const typeDefs = `
  type Query {
    message: String
    cars: [Car]
    car(carId: ID): Car
  }

  type Mutation {
    appendCar(car: AppendCar): Car
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }  
`;
