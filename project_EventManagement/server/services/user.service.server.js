module.exports = function(app, userModel) {
    app.post("/api/em/user", register);
    app.post("/api/em/userlogin", verifyLogin);
    app.post("/api/em/userpreference", savePreference);

    var users = [];
        users = [
             {	"_id":123, "firstName":"Survi",            "lastName":"Singh",
                 "username":"survi",  "password":"survi",   "roles": ["admin"]		}
         ]

    function register(req, res) {
        var user = req.body;
        userModel.createUser(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }

    function verifyLogin(req, res) {
        var user = req.body;
         var foundUser = null;
        for (var i = 0; i < users.length; i++) {
            var u = users[i];
            if (u.username == user.username && u.password == user.password) {
                foundUser = u;
             }
         }
        return res.foundUser;

        //userModel.findUserByCredential(user)
        //    .then(
        //        // login user if promise resolved
        //        function ( doc ) {
        //            //req.session.currentUser = doc;
        //            res.json(doc);
        //        },
        //        // send error if promise rejected
        //        function ( err ) {
        //            res.status(400).send(err);
        //        }
        //    );
    }


    function savePreference(req, res) {
        var user = req.body;
        userModel.updateUserPreferences(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }
}