import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import App from './App'

describe('Test root component rending', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
