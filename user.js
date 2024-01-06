const uname = "admin"
const password = "12345"
const user = {
    age: 20,
    ara: "ara"
}

const greeting = (a) => {
    // console.log("Hello "+a);
    return `hello ${a}`;
}

module.exports = { uname, password, user, greeting }