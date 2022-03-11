var router = require('express').Router();
var runIntent = require("./dialogflow.js").runIntent;

router.post("/requestText", function(req, res){
    (async() => { 
        var result = await runIntent(req.body.projectID, req.body.content);
        return res.send(
            {
                "responseMessage": result.Response,
                "originalQuery": result.Query,
                "intent": result.intent
            });
    })()   
});
module.exports = router;