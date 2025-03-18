const { response, request } = require('express')
const mysql = require('../../dbconnection/mysqldb')

////user insert api for signup (and check exist user or already user in our database)

const userinsert = (request, response) => {
    try {
        if (mysql) {
            // Check if the user with the given username and password already exists
            mysql.query(`SELECT * FROM persons WHERE email = '${request.body.email}'`, (error, userData) => {
                if (error) {
                    response.json({ msg: 'Error while checking user data', error: error });
                } else {
                    if (userData.length > 0) {
                        response.json({success: false, msg: 'email already exists in db user anotherone' });
                    } else {
                     
                        mysql.query(`INSERT INTO persons(username, paswd, email) VALUES ('${request.body.username}', '${request.body.pswwword}', '${request.body.email}')`, (insertError, insertData) => {
                            if (insertError) {
                                response.json({ msg: 'Error while inserting user', error: insertError });
                            } else {
                                response.json({success: true, msg: 'User inserted successfully', Data: insertData });
                            }
                        });
                    }
                }
                
            });
        } else {
            response.json({ msg: 'Error in the database connection' });
        }
    } catch (error) {
        response.json({ msg: 'Error in insert data', error: error });
    }
}

///login api for login screen(and aalso  check  and pass Invalid username or password. Please create an account)


const login = (req, res) => {
    
    const query = `SELECT * FROM persons WHERE email = '${req.body.email}' AND paswd = '${req.body.pswwword}'`;
    mysql.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ msg: 'Error querying the database', error: err });
        }
        if (results.length > 0) {
            return res.json({ success: true, msg: 'Login successful', user: results[0] ,status:1});
        
        } else {
            return res.json({ success: false, msg: 'Invalid email or password. Please create an account.',status:1});
        }
    });
};





////this api hit all user in the homepage and it help to status and year filter


const fetchUsers = (req, res) => {
   const query = `SELECT * FROM persons where Status = 'A' OR Status = 'IN'`;

    mysql.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ msg: 'Error querying the database', error: err });
        }
        if (results.length > 0) {
            return res.json({ success: true, msg: 'Users listed successfully', users: results, status: 1 });
        } else {
            return res.json({ success: false, msg: 'No users found', status: 0 });
        }
    });
};


///delete username and pwd and email,entered date and updated date in homepage morevertical dropdown(delete)

const deleteUser = (req, res) => {
    const userId = req.body.id;
    console.log(req.body);
    const query =  `UPDATE persons SET Status = 'DEL' WHERE personid = '${userId}'`;
    mysql.query(query, (err) => {
        if (err) {
            return res.status(500).json({ msg: 'Error deleting user', error: err });
        }
        return res.json({ success: true, msg: 'User deleted successfully',status:1});
    });
};

///update username and pwd where userid   in homepage morevertical dropdown(update)

const updateuser = (request, response) => {
    try {
        if (mysql) {
            const query = `UPDATE persons SET username = '${request.body.username}', paswd = '${request.body.paswd}' WHERE personid = '${request.body.personid}'`;
            mysql.query(query, (error, result) => {
                if (error) {
                    response.json({ msg: 'Error updating user', error: error });
                } else if (result.affectedRows > 0) {
                    response.status(200).json({ msg: 'User updated successfully', status: 1 });
                } else {
                    response.status(404).json({ msg: 'User not found', status: 0 });
                }
            });
        } else {
            response.status(500).json({ msg: 'Error in the database connection', status: 0 });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({ msg: 'Error in updating user data', error: error, status: 0 });
    }
};
/////////////////activate user using togglem icon on
const activateuser = (req, res) => {
    const userId = req.body.id;
    console.log(req.body);
    const query = `UPDATE persons SET Status = 'A' WHERE personid = '${userId}'`;
    mysql.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ msg: 'Error activating user', error: err });
        }
        return res.json({ success: true, msg: 'User activated successfully', status: 1 });
    });
};


///////////////inactive user by using Toggle icon off
const inactiveuser = (req, res) => {
    const userId = req.body.id;
    console.log(req.body);
    const query =  `UPDATE persons SET Status = 'IN' WHERE personid = '${userId}'`;
    mysql.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ msg: 'Error inactivated user', error: err });
        }
        return res.json({ success: true, msg: 'User inactivated successfully',status:1});
    });
};






module.exports =  {userinsert,login,fetchUsers,deleteUser,updateuser,inactiveuser,activateuser};