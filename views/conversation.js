   var watson = require('watson-developer-cloud');

   var conversation = watson.conversation({
     username: 'e3d9134b-cb8e-455e-b9fd-52b8da19a79d',
     password: 'E5JoRLV0uJDd',
     version: 'v1',
     version_date: '2017-05-26'
   });

   conversation.message({
     workspace_id: '913bdd3f-2afe-4362-952c-df2ec621f648',
     input: {'text': 'Hello'}
   },  function(err, response) {
     if (err)
       console.log('error:', err);
     else
       console.log(JSON.stringify(response, null, 2));
       if (response.output.text.length != 0) {
           console.log(response.output.text[0]);
       }
   });
