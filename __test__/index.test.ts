import Tortil from '../src'
import * as isIP from 'is-ip'

const tor = new Tortil()

beforeAll(() => {
  tor.start()
})

describe('Normal', () => {
  it('should getIP', async () => {
    const ip = await tor.getIP()
    expect(typeof ip).toBe('string')
    expect(isIP(ip)).toBeTruthy()
  })
})

afterAll(() => {
  tor.stop()
})
