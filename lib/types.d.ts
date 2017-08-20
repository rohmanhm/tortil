export declare type TorrcConfig = {
    password?: string;
    host?: string;
    port?: number;
};
export declare type TortilConfig = {
    cmd?: string;
    protocol?: string;
    host?: string;
    port?: number;
    siteCheckIP?: string;
    torrc?: null | TorrcConfig;
};
export interface ITortil {
    options?: TortilConfig;
    restart(): void;
    start(): void;
    stop(): void;
    getIP(): Promise<string>;
}
