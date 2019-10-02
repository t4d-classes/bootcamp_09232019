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
  Mutation: {
    appendCar: async (_, args, context) => {

      const res = await fetch(
        context.restURL + '/cars',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(args.car),
        }
      );

      return await res.json();
    },
  },
};
