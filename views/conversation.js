// Example 2: adds user input and detects intents.

var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'e3d9134b-cb8e-455e-b9fd-52b8da19a79d', // replace with username from service key
  password: 'E5JoRLV0uJDd', // replace with password from service key
  path: { workspace_id: '913bdd3f-2afe-4362-952c-df2ec621f648' }, // replace with workspace ID
  version_date: '2017-05-26'
});

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // If an intent was detected, log it out to the console.
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }

  // Prompt for the next round of input.
  var newMessageFromUser = prompt('>> ');
  conversation.message({
    input: { text: newMessageFromUser }
    }, processResponse)
}
