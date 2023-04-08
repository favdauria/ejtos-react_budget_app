import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles.css';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
        alert(val)
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	

  return (
    <div className='alert alert-secondary justify-content-center'>
        <Dropdown>
            <Dropdown.Toggle  style={{backgroundColor: '#A5E1A0', border: 'none'}} id="dropdown-basic">
            Currency ($ Dollar)
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor: '#A5E1A0', border: 'none'}}>
            <Dropdown.Item className="buttonDropdown"  onClick={(event)=>changeCurrency("$")}>$ Dollar</Dropdown.Item>
            <Dropdown.Item className="buttonDropdown" onClick={(event)=>changeCurrency("£")}>£ Pound</Dropdown.Item>
            <Dropdown.Item className="buttonDropdown" onClick={(event)=>changeCurrency("€")}>€ Euro</Dropdown.Item>
            <Dropdown.Item className="buttonDropdown" onClick={(event)=>changeCurrency("₹")}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
    
	// 	<div className='alert alert-secondary'>
    //   <select name="currency" class="form-select form-select-sm" id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
    //     <option value="£">$ Dollar</option>
    //     <option value="$">£ Pound</option>
    //     <option value="€">€ Euro</option>
    //     <option value="₹">₹ Ruppee</option>
    //   </select>		
    // </div>
	);
};

export default Currency;