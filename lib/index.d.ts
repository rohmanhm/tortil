import { ITortil, TortilConfig } from '../typings/tortil';
declare class Tortil implements ITortil {
    config: TortilConfig;
    constructor(options?: TortilConfig);
    getIP(): Promise<string>;
    renewIP(): Promise<string | undefined>;
}
export default Tortil;
