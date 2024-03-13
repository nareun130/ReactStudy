export let apiKey = 'nareun130';
export let abc = 'abc';
// export default '1234';
export default(userName,  message) => ({'userName' : "nareun130", 'message' : "hello"});

function createGreeting(userName, message = "Hello") {
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("MAX");

console.log(greeting1);

const greeting2 = createGreeting("Manuel", "Hello, What's up?");

console.log(greeting2);
