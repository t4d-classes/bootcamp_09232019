import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    cars: (_1, _2, context) => {
      return fetch(context.restURL + '/cars')
        .then(res => res.json());
    } ,
    car: (_, args, context) => {
      return fetch(context.restURL + '/cars/' + args.carId)
        .then(res => res.json());
    } 
  },
};
