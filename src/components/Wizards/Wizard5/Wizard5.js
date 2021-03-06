import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel, updateRent, updatePropList } from '../../../ducks/reducer';
import Banner from '../../Banner/Banner';

class Wizard5 extends Component {
  constructor(props){
    super(props);

    this.state = {
      workingrent: this.props.rent
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange( event ) {
    let value = event.target.value;

    this.setState({
      workingrent: value
    });
  }

  render(){
    return(
      <div className='Wizard'>
        <Banner/>
        <div className='wizLayout Center'>
          <div className='wizName'>
            <h2>Add new listing</h2>
            <button className='button red' onClick={() => {
            this.props.cancel();
            this.props.history.push('/dash');
          }}>cancel</button>
          </div>
          <p>Step 5</p>
          <div className='progressHolder'>
            <img src={require('../../../assets/step_completed.png')} alt='Step 1 completed'/>
            <img src={require('../../../assets/step_completed.png')} alt='Step 2 completed'/>
            <img src={require('../../../assets/step_completed.png')} alt='Step 3 completed'/>
            <img src={require('../../../assets/step_completed.png')} alt='Step 4 completed'/>
            <img src={require('../../../assets/step_active.png')} alt='Step 5 active'/>
          </div>
          <div className='inputHolder'>
            <h6>Recommended Rent ${(this.props.mortgagePayment*1.25)}</h6>
            <label htmlFor='proprent'>Desired Rent</label>
            <input type='text' id='proprent' name='workingrent' className='rentInput' value={this.state.workingrent} onChange={ e => this.handleChange( e )}/>
          </div>
          <div>
            <Link to='/4'><button className='button dkgreen'>Previous Step</button></Link>
            <button className='button dkgreen' onClick={() => {
              this.props.updateRent( this.state.workingrent );
              this.props.updatePropList('create', {
                name: this.props.name,
                description: this.props.description,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zip: this.props.zip,
                imgURL: this.props.imgURL,
                loanAmmount: this.props.loanAmmount,
                mortgagePayment: this.props.mortgagePayment,
                rent: this.props.rent
              })
              this.props.history.push('/dash');
            }}>Complete</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    name: state.reducer1.name,
    description: state.reducer1.description,
    address: state.reducer1.address,
    city: state.reducer1.city,
    state: state.reducer1.state,
    zip: state.reducer1.zip,
    imgURL: state.reducer1.imgURL,
    loanAmmount: state.reducer1.loanAmmount,
    mortgagePayment: state.reducer1.mortgagePayment,
    rent: state.reducer1.rent
  }
}

export default connect(mapStateToProps, { cancel, updateRent, updatePropList })(Wizard5);