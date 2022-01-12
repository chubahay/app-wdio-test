const minimist = require('minimist') //chrome

const capabilityOpts = args => {
    const browser = minimist(process.argv.slice(2))
    
    switch (browser) {
        case 'edge':
            return [{
                maxInstances: 5,
                acceptInsecureCerts: true,
                browserName: 'MicrosoftEdge', 'ms:edgeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--headless',
                        '--disable-gpu',
                        '--window-size=1440,735'
                    ]
                }
            }];
            break;
        case 'firefox':
            return [{
                maxInstances: 5,
                acceptInsecureCerts: true,
                browserName: 'firefox', 'moz:firefoxOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--headless',
                        '--disable-gpu',
                        '--window-size=1440,735'
                    ]
                }
            }];
            break;
        default:
            return [{
                maxInstances: 5,
                acceptInsecureCerts: true,
                browserName: 'chrome', 'goog:chromeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--headless',
                        '--disable-gpu',
                        '--window-size=1440,735'
                    ]
                }
            }];
    }
}

exports.capabilityOpts = capabilityOpts;
