
const add =(a,b) => a+b;

const generateGreetings = (name = '') =>  `Hello ${name}` ;

test("Should add two numbers",()=>{
    const result = add(3,4);

    expect(result).toBe(7);
    
});

test("Shuld run generate greetins ", ()=>{
    const result = generateGreetings('Pravin');
    expect(result).toBe('Hello Pravin');
});

test ("Shouls run generate greetings fro no name",()=>{
    const result = generateGreetings();
    expect(result).toBe('Hello ');
});