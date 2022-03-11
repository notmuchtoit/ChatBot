const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const sessionId = uuid.v4();
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runIntent(projectId, requestText) {
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
);
const intentRequest = {
    session: sessionPath,
    queryInput: {
        text: {
            text: requestText,
            languageCode: 'en-US',
        },
    },
};

const responses = await sessionClient.detectIntent(intentRequest);
console.log('Detected intent');
const result = responses[0].queryResult;
console.log(`  Query: ${result.queryText}`);
console.log(`  Response: ${result.fulfillmentText}`);

return await {
        "Query": result.queryText,
        "Response": result.fulfillmentText,
        "Intent": result.intent.displayName
    };
}
  
module.exports.runIntent = runIntent;