

const main = (req, res) => {
    return res.send("main page");
}
const signIn = (req, res) => {
    return res.send("signin page");
}

const signUp = (req, res) => {
    return res.send("sign up page");
}

const status = (req, res) => {
    return res.send("status of the candidate, employe or manager!!");
}

module.exports = {
    signIn, signUp, main, status
}
