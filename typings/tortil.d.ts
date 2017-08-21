export type TorrcConfig = {
  password?: string
  host?: string
  port?: number
}

export type TortilConfig = {
  protocol?: string
  host?: string
  port?: number
  siteCheckIP?: string
  torrc?: null | TorrcConfig
}

export interface ITortil {
  options?: TortilConfig
  getIP (): Promise<string>
  renewIP (): Promise<string|void>
}
