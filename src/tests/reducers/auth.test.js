import authReducers from '../../reducers/auth';

test("Should set uid for login",()=>{
    const action = {
        type:'LOGIN',
        uid:'123456'
    }

    const state = authReducers({}, action);
    expect(state.uid).toBe(action.uid);
});

test("Should clear uid fro logout ",()=>{

    const action = {
        type:'LOGOUT'
    }

    const state = authReducers({ uid:'11' },action);
    expect(state).toEqual({});

});