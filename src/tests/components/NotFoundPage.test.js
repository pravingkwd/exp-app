import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFoundPage';

test("Shoudl run NoFounePage",()=>{
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();

});


