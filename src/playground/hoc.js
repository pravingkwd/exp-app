import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>{props.info}</p>
    </div>
)

const adminWarning = (WrapperComponent) => {
    
    return (props) => (
            <div>
            <h1>Admin Warning</h1>
            {props.isAdmin  && <p>This is admin information</p>}
            <WrapperComponent {...props} />
            </div>
    )

}

const requirAuth = (WrapperComponent) => {
    return (props) => (
        <div>
        <h1>Admin Auth</h1>
        {props.isAuth  && <p>This is auth information</p> }
        <WrapperComponent {...props} />
        </div>
    )
}

const Student = (props) =>  (
    <div>
    <p>Studet Info </p>
    {props.name}
    </div>

);

const studentDetails = (WrapperComponent) => {

    return (props) => (
        <div>
        <p>Wrapper Component</p>
        {props.islogin ? ( <p><WrapperComponent /></p>) : (<p>Please login to view detilas </p>) }
        </div>
    );

}



const AdminInfo = adminWarning(Info) ;

const AuthInfo = requirAuth(Info);

const StudentAuth = studentDetails(Student);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is the info comp" />, document.getElementById('app'));
//ReactDOM.render(<AuthInfo isAuth={true} info="This is the auth comp" />, document.getElementById('app'));
ReactDOM.render(<StudentAuth islogin={true} name="Pravin"/>, document.getElementById('app'));




