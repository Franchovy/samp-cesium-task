import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import CreateBillboardButton from '../src/createBillboardButton'

it('shows the children when the checkbox is checked', () => {
  
  const onClick = jest.fn();
  const { getByText } = render(<CreateBillboardButton addButtonCallback={onClick}/>);

  fireEvent.click(getByText(/Enter/i));

  
  expect(onClick).toHaveBeenCalled();
  
})
