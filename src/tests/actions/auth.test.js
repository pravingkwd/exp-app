import { login, logout } from '../../actions/auth';

test("Should generate login actions objects",()=>{

    const uid='121';
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })


});

test("Shoud generate logout objects",()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
});