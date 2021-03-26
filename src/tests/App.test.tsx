import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  test('should show the given greeting', () => {
    const greeting = 'Hola, soy Goku!';
    const wrapper = shallow(<App saludo={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });
});
