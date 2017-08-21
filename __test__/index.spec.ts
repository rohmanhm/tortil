import * as isIP from 'is-ip'
import Tortil from '../src'

describe('Tortil Spec', () => {
  const tor = new Tortil()
  let torIP: string

  beforeAll(async () => {
    torIP = await tor.getIP()
  })

  describe('getIP', () => {
    it('IP should a string', async () => {
      expect(typeof torIP).toBe('string')
    })

    it('should valid an IP', async () => {
      expect(isIP(torIP)).toBeTruthy()
    })
  })

  describe('renewIP', () => {
    let oldTorIP: string

    beforeAll(async () => {
      oldTorIP = torIP
      torIP = await tor.renewIP()
    }, 20000)

    it('new IP should a string', async () => {
      expect(typeof torIP).toBe('string')
    })

    it('new IP should valid an IP', async () => {
      expect(isIP(torIP)).toBeTruthy()
    })

    it('new IP different from older IP', async () => {
      expect(torIP).not.toBe(oldTorIP)
    })
  })

})
