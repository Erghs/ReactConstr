import React from "react";
import './Header.scss'
import propTypes from 'prop-types'

//import { ReactComponent as PrintIcon } from '../../assets/img/print.svg'
const Header=({ onClick })=>{
    return(
        <header className='Header'>
        <div className="ui-container">
            <div className="Header_content">
                    <span className="Header_logo">PDF Constructor</span>
                  <button className='ui-button isLink' onClick={onClick}>
                      Печать
                  </button>

            </div>
            
        </div>
        </header>
    )
}
Header.propTypes = {
    onClick: propTypes.func,
  }
  
  Header.defaultProps = {
    onClick: () => {},
  }
export default Header;