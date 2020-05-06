'use strict';

module.exports.auth = async event => {
  console.log(event);
  try {
    return process.env.NEEDED_GROUP_MEMBERSHIP.split('|').some(x => event['request']['userAttributes']['custom:Groups'].includes(x)) ?
      { statusCode: 200, body: 'User is allowed to access the app.' } :
      { statusCode: 403, body: 'User is NOT allowed to access the app.' };
  } catch (e) { console.log(e); return { statusCode: 403, body: `Group membership check failed. This user CANNOT access the app.` } }
};
