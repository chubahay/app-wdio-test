const args = require('minimist')(process.argv.slice(2))


const capabilityOpts = args => {
    switch (args) {
        case 'edge':
            capabilities = {
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
            }
            break;
        case 'firefox':
            capabilities = {
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
            };
            break;
        default:
            capabilities = {
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
            };
    } return capabilities;
}

const confSetup = args => {

    const docker = {
        hostname: 'selenium-hub',
        port: 4444,
        path: '/wd/hub'
    }

    const local = {
        hostname: 'localhost',
        port: 4444,
        path: '/'
    }

    let run = (args === 'docker') ? docker : local
    console.log(run)

    return run;
}

exports.capabilityOpts = capabilityOpts;
exports.confSetup = confSetup;
