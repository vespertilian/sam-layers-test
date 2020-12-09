// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const bcrypt = require('bcrypt')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        const bcrypted = await bcrypt.hash('foo bar boo', 10)
        const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
        // const randomName = 'not working'
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `hello world ${bcrypted} ${randomName}`,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
