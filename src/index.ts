import { ChildProcess } from 'child_process'
import * as execa from 'execa'
import defaultConfig from './config'
import {
  ITortil,
  TortilConfig,
  TorrcConfig
} from './types'

class Tortil implements ITortil {
  public config: TortilConfig
  public tor: ChildProcess

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

  public renewIP () {
    return
  }

  public start () {
    if (this.config.cmd) {
      this.tor = execa(this.config.cmd)
    }
  }

  public stop () {
    if (this.config.cmd) {
      this.tor.kill()
    }
  }

  public restart () {
    this.stop()
    this.start()
  }
}

export default Tortil
