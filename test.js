const nam = "abror"
const greet = (req) => {
    console.log(`hello, ${req(nam)}`);
};

greet(callMyName)

function callMyName(n){
    return n
}