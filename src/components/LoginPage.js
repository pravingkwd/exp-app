import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

 export const LoginPage = ({startLogin}) => 
     (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1>Expensify App</h1>
        <p className="box-layout__title">you can control your expenses</p>
        <button className="button" onClick={startLogin} >Login with Google</button>
        </div>
        </div>
    )

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage);
 
