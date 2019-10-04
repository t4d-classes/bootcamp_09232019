import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { ViewCarRow } from './ViewCarRow';

const carTableConfig = [
  { field: 'id', caption: 'Id' },
  { field: 'make', caption: 'Make' },
  { field: 'model', caption: 'Model' },
  { field: 'year', caption: 'Production Year', type:'number' },
  { field: 'color', caption: 'Body Color' },
  { field: 'price', caption: 'Cost', type:'number' },
];

describe('<ViewCarRow /> Enzyme Static HTML', () => {

  let car;

  beforeEach(() => {

   car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

  });

  test('<ViewCarRow /> renders', () => {
    
    const component = JSON.stringify(render(
      <table>
        <tbody>
          <ViewCarRow car={car} config={carTableConfig} onDeleteCar={() => null} onEditCar={() => null} />
        </tbody>
      </table>
    ).html());
    
    expect(component).toMatchSnapshot();
  });

});

describe('<ViewCarRow /> Enzyme Mock DOM', () => {

  const eventHandlers = {
    deleteCar: () => null,
    editCar: () => null,
  };

  let car;
  let deleteCarSpy;
  let editCarSpy;
  let component;

  beforeEach(() => {

    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.spyOn(eventHandlers, 'deleteCar');
    editCarSpy = jest.spyOn(eventHandlers, 'editCar');

    component = mount(<table><tbody>
      <ViewCarRow car={car}
        config={carTableConfig}
        onDeleteCar={eventHandlers.deleteCar}
        onEditCar={eventHandlers.editCar} />
    </tbody></table>).find(ViewCarRow);

  });

  test('<ViewCarRow /> renders', () => {

    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    component.find('td').slice(0,6).forEach( (node, index) => {
      const carField = String(car[columns[index]]);
      expect(node.text()).toBe(carField);
    } );

  });

  test('<ViewCarRow /> delete car button', () => {

    component.find('button').first().simulate('click');
    component.find('button').last().simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledWith(car.id);

  });

});

describe('<ViewCarRow /> Shallow with Enzyme', () => {

  const eventHandlers = {
    deleteCar: () => null,
    editCar: () => null,
  };

  let car;
  let deleteCarSpy;
  let editCarSpy;
  let wrapper;

  beforeEach(() => {

    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.spyOn(eventHandlers, 'deleteCar');
    editCarSpy = jest.spyOn(eventHandlers, 'editCar');

    wrapper = shallow(<ViewCarRow car={car}
      config={carTableConfig}
      onDeleteCar={eventHandlers.deleteCar}
      onEditCar={eventHandlers.editCar} />);

  });

  test('<ViewCarRow /> renders', () => {

    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    wrapper.find('td').slice(0,6).forEach( (node, index) => {
      const carField = String(car[columns[index]]);
      expect(node.text()).toBe(carField);
    } );

  });

  test('<ViewCarRow /> buttons', () => {

    wrapper.find('button').first().simulate('click');
    wrapper.find('button').last().simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledWith(car.id);

  });



});

