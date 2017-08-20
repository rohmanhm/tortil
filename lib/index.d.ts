/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ITortil, TortilConfig } from './types';
declare class Tortil implements ITortil {
    config: TortilConfig;
    tor: ChildProcess;
    constructor(options?: TortilConfig);
    getIP(): Promise<string>;
    renewIP(): void;
    start(): void;
    stop(): void;
    restart(): void;
}
export default Tortil;
