import * as execa from 'execa'

import defaultConfig from './config'
import { ITortil, TortilConfig, TorrcConfig } from '../typings/tortil'

class Tortil implements ITortil {
  public config: TortilConfig

  constructor (options?: TortilConfig) {
    this.config = Object.assign({}, defaultConfig, options)
  }

  public async getIP () {
    return await execa.stdout('curl', [
      '--proxy',
      `${this.config.protocol}//${this.config.host}:${this.config.port}`,
      `${this.config.siteCheckIP}`
    ])
  }

  public async renewIP () {
    if (this.config.torrc) {
      const auth = `AUTHENTICATE \"${this.config.torrc.password}\"\r\nsignal NEWNYM\r\nQUIT`
      const stream = execa('nc', [
        '-v',
        `${this.config.torrc.host}`,
        `${this.config.torrc.port}`
      ]).stdin
      stream.write(auth)

      return await this.getIP()
    }
  }
}

export default Tortil
