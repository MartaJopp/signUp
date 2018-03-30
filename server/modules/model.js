var DB = require('./db').DB,
    knex = DB.knex;

var User = DB.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    Google: function () {
        return this.hasOne(Google, 'id');
    }
});

var Google = DB.Model.extend({
    tableName: 'google',
    idAttribute: 'id',
    User: function () {
        return this.belongsTo(User, 'id');
    }
});

// ------------------------------
// createNewUser
// ------------------------------
// Makes a new user in the database with 
// automatic incremented ID. Then, returns
// that user's ID after the user is created.
function createNewUser(callback) {
    new User().save().then(function (user) {
        callback(user.toJSON().id);
    });
}

// ------------------------------
// grabUserCredentials
// ------------------------------
// Returns a JSON list of a single user like this:
// {
//     local: {
//          username: 'sampleun'
//          password: 'samplepw'
//     },
//     facebook: {
//          ...
//     },
//     twitter: {
//          ...
//     },
//     google: {
//          ...
//     },
// }
function grabUserCredentials(userId, callback) {
    // Skeleton JSON
    var loginUser = {
        local: {
            username: null,
            password: null,
        },
        google: {
            id: userId,
            token: null,
            googleId: null,
            email: null,
            name: null,
        }
    };

    // SQL joins to get all credentials/tokens of a single user
    // to fill in loginUser JSON.
    knex.select('users.id', 'users.username', 'users.password',
        'google.token as g_token', 'google.google_id as g_id', 'google.email as g_email', 'google.name as g_name')
        .from('users')

        .leftOuterJoin('google', 'google.id', '=', 'users.id')
        .where('users.id', '=', userId).then(function (row) {
            row = row[0];

            if (!row) {
                callback('Could not find user with that ID', null);
            } else {
                // Fill in loginUser JSON
                loginUser.local.username = row.username;
                loginUser.local.password = row.password;

                loginUser.google.token = row.g_token;
                loginUser.google.googleId = row.g_id;
                loginUser.google.email = row.g_email;
                loginUser.google.name = row.g_name;

                callback(null, loginUser);
            }
        });
};

module.exports = {
    createNewUser: createNewUser,
    grabUserCredentials: grabUserCredentials,
    User: User,
    Google: Google
};