import { TortilConfig } from '../typings/tortil'

const defaultConfig: TortilConfig = {
  protocol: 'socks5h:',
  host: 'localhost',
  port: 9050,
  siteCheckIP: 'http://ifconfig.co',
  torrc: {
    host: '127.0.0.1',
    port: 9051,
    password: process.env.PASSWORD
  }
}

export default defaultConfig
