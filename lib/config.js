"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultConfig = {
    protocol: 'socks5h:',
    host: 'localhost',
    port: 9050,
    siteCheckIP: 'http://ifconfig.co',
    torrc: {
        host: '127.0.0.1',
        port: 9051,
        password: process.env.PASSWORD
    }
};
exports.default = defaultConfig;
//# sourceMappingURL=config.js.map