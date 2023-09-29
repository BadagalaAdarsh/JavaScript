// IIFE -> Immediately Invoked Function Expression
 
// Here the function is called just after it was created
// we just have to wrap the function in the parenthesis
// ()() first set of parenthisis is used for wrapping the function and second set of parenthisis is used to call
// gloabl scopre can cause pollution, like variable and others and thats why we use iife
(function chai() { // it is called named IIFE
    console.log(`DB CONNECTED`);
})(); // Here it is must to use semi colon because js don't know where to end execution
// if we don't have semicolon then the below methods will give us errors


// we can do the same as the arrow function
((name) => { // Here there is no name so its called simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('adarsh');
 