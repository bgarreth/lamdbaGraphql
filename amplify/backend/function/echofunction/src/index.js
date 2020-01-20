/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiLambdagraphqlGraphQLAPIIdOutput = process.env.API_LAMBDAGRAPHQL_GRAPHQLAPIIDOUTPUT
var apiLambdagraphqlGraphQLAPIEndpointOutput = process.env.API_LAMBDAGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = function (event, context) {
  context.done(null, event.arguments.msg);
};
