import React from 'react';
import PropTypes from 'prop-types';

const getInitialCar = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export class CarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = getInitialCar();

    // this.change = this.change.bind(this);
    // this.submitCar = this.submitCar.bind(this);
  }

  change = (e) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });    
  }

  submitCar = () => {
    this.props.onSubmitCar({ ...this.state });
    this.setState(getInitialCar());
  }

  render() {
    return <form>

      <div>
        <label htmlFor="make-input">Make</label>
        <input type="text" id="make-input" name="make"
          value={this.state.make} onChange={this.change} />
      </div>

      <div>
        <label htmlFor="model-input">Model</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.change} />
      </div>

      <div>
        <label htmlFor="year-input">Year</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.change} />
      </div>

      <div>
        <label htmlFor="color-input">Color</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.change} />
      </div>

      <div>
        <label htmlFor="price-input">Price</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.change} />
      </div>

      <button type="button" onClick={this.submitCar}>{this.props.buttonText}</button>

    </form>;
  }
}

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};