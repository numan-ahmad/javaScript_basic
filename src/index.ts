// Question: 2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const userName = "Numan Ahmad";
console.log(`Hello ${{userName}}, would you like to learn some Python today?1`);

// Question: 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personalName = "numan ahmad";

console.log(personalName.toUpperCase());
console.log(personalName.toLowerCase());
const titlecase = personalName.split(' ')
   .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
   .join(' ');
console.log(titlecase);

// Question 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

const authorName = 'Albert Einstein';

console.log(`${authorName} once said, "A person who never made a mistake never tried anything new."`);

// Question 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const famous_person = 'Albert Einstein';
const message = 'A person who never made a mistake never tried anything new'

console.log(message);

// Question 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const personName = '\thello\none   ';
console.log('Before stripping: ', personName);
console.log('After stripping: ', personName.replace(/\s*|\t|\r|\n/gm, ""));

// Question & and 8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(5+3);
console.log(4*2);
console.log(10-2);
console.log(16/2);

// Question 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favoriteNumber = 13; 
console.log(`My favourte number is ${favoriteNumber}, becuse in my school live my role number is 13 and I'm also live in chak 13.`)

//Question 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// This programe is print 8 number by perfoming all math opertion
console.log(5+3);
console.log(4*2);
console.log(10-2);
console.log(16/2);

// This programe print my favorite number and also print why this number is my favorite.
console.log(`My favourte number is ${favoriteNumber}, becuse in my school live my role number is 13 and I'm also live in chak 13.`)

// Question 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friensNameArray = ['usman', 'ali', 'numan', 'naeem', 'shoaib'];

for (const name of friensNameArray) {
  console.log(name);
}

// Question 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

for (const name of friensNameArray) {
  console.log(`My favorite friend is ${name}.`);
}

// Question 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const favoriteSeries = ['I would like to own a Honda motorcycle.', 'I would like to Honda civic.', 'Mercidies cars are very comfertable'];
for (const item of favoriteSeries) {
  console.log(item);
}

// Question 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const invitedGuest = ['Usman', 'Arslan', 'Israr'];
for (const guest of invitedGuest) {
  console.log(`${guest} inviting them to dinner.`);
}

// Question 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log('after update Guest list');

invitedGuest.pop();
// add new guest
invitedGuest.push('Shoaib');
for (const guest of invitedGuest) {
  console.log(`${guest} inviting them to dinner.`);
}

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

invitedGuest.splice(1, 1, 'Javeed');
console.log('After replace the name of Guest: ',invitedGuest);

// Print a second set of invitation messages, one for each person who is still in your list.

invitedGuest.push('Shoaib');
for (const guest of invitedGuest) {
  console.log(`Second list of guest after replacing. ${guest}`);
}

// Question 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
invitedGuest.unshift("numan","bilal");
console.log('people that you found a bigger dinner table.: ',invitedGuest);

//Add one new guest to the beginning of your array.
invitedGuest.unshift("hello");
console.log('add guest in the starting on guest list.: ',invitedGuest);

//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

invitedGuest.splice(2, 0, 'kashif');
invitedGuest.push('Anas')
for (const guest of invitedGuest) {
  console.log(`New Guest list. ${guest}`);
}

//Question 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

const afterShrinkList = invitedGuest.slice(0, 2);
for (const guest of afterShrinkList) {
  console.log(`After shrink still inviting guest. ${guest}`);
}


// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

afterShrinkList.length = 0;
console.log('after remove all element emoty array', afterShrinkList);


// Question 18 Seeing the World: Think of at least five places in the world you’d like to visit.


//Question 21 They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
const userDetatil = new Object ( { 
  name: 'my Name',
  age: 22,
  hobbies: ['reading', 'games', 'coding']
});
console.log(userDetatil);

// Question 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let newArray = [1,2,3];
console.log('Index not found', newArray[4]);

// Question 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'mercides';
console.log(car == 'mercides'?true : false);
console.log(car != 'mercides'?true: false);
console.log(car == 'subaru');
console.log(car ?true: false);
console.log(!car);
console.log(Array.isArray(car));
console.log(typeof(car) == 'string');
console.log(typeof(car) != 'boolean');
console.log(typeof(car) != 'number');
console.log(typeof(car) == 'number');

// Question 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

console.log(car.toLowerCase() == car);
console.log(car.toUpperCase() == car);
console.log(!car || true);
console.log(!car && true);
console.log(!Array.isArray(car));

// Question 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


let alien_color = 'green';
console.log(alien_color);
alien_color = 'yellow'
console.log(alien_color);
alien_color = 'red';
console.log(alien_color);
if(alien_color == 'green') {
  console.log('Player just earned 5 points');
}
alien_color = 'green';
if(alien_color == 'green') {
  console.log('Player just earned 5 points');
}

// question 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

if(alien_color == 'green') {
  console.log('Player just earned 5 points');
} else {
  console.log('Player just earned 10 points')
}

alien_color = 'red';

if(alien_color == 'green') {
  console.log('Player just earned 5 points');
} else {
  console.log('Player just earned 10 points')
}

// Question 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.


if(alien_color == 'green') {
  console.log('Player just earned 5 points');
} else if(alien_color == 'yellow') {
  console.log('Player just earned 10 points')
} else if(alien_color == 'red') {
  console.log('Player just earned 10 points')
}

// Questio 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

const age = 10;

if(age < 2 ) {
  console.log('The person is a baby');
} else if(age >= 2 && age < 4 ) {
  console.log('that the person is a toddler.');
} else if( age >= 4 && age < 13) {
  console.log('print a message that the person is a kid.');
} else if( age >= 13 && age < 20) {
  console.log('that the person is a teenager.');
} else if(age >= 20 && age < 65) {
  console.log('that the person is an adult.');
} else {
  console.log('the person is an elder.');
}

// Question 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 const favorite_fruite = ['bananas', 'apple', 'orange'];
 if(favorite_fruite.includes('apple')) {
  console.log('You really like Apple! ');
 }
 if(favorite_fruite.includes('bananas')) {
  console.log('You really like bananas! ');
 }

 if(favorite_fruite.includes('orange')) {
  console.log('You really like orange! ');
 }

 if(favorite_fruite.includes('mango')) {
  console.log('You really like mango! ');
 }

 if(favorite_fruite.includes('painapple')) {
  console.log('You really like painapple! ');
 }

 // Question 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

 let userList = ['admin', 'superAdmin', 'client', 'user', 'manager'];

 for (const user of userList) {
  if(user == 'admin') {
    console.log('Hello admin, would you like to see a status report?');    
  } else {
    console.log(`Hello ${user}, thank you for logging in again`);
  }
}

// Question 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
userList = [];

if(!userList.length) {
  console.log('We need to find some users!');
}

// Question 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

function checkIfDuplicateExists(arr: string[]) {
  return new Set(arr).size !== arr.length
}
console.log(checkIfDuplicateExists(userList))

const current_users = ["numan", "shoaib", "bilal", "arslan"];
const new_users = ["israr", "NUMAN", "naveed"];

for( const user of new_users) {
  let dublicate = current_users.find(oldUser => oldUser == user || oldUser.toUpperCase() == user || oldUser.toLocaleLowerCase() == user);
  if(dublicate) {
    console.log(dublicate, 'username is available');
  }
}


// Question 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

const numberList = [1,2,3,4,5,6,7,8,9];
for(const num of numberList) {
  if(num == 1) {
    console.log(`${num}st`);
  } else if(num == 2) {
    console.log(`${num}nd`);
  } else if(num == 3) {
    console.log(`${num}rd`)
  } else {
    console.log(`${num}th`); 
  }
}

// Question 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

const favoritePizza = ['hot and spicy', 'grill', 'pepperoni'];

for(const pizza of favoritePizza) {
  console.log('Pizza Name: ', pizza);
}
for(const pizza of favoritePizza) {
  console.log(`I like ${pizza} pizza`);
}
console.log("Actully I am not like pizza so I don't too much now about this");

// Question 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animalList = ['Dog', 'Cat', 'Fox'];

for(const animal of animalList) {
  console.log(animal);

  if(animal == 'Dog') {
    console.log('A dog would make a great pet.');
  } else if(animal == 'Fox') {
    console.log('The fox is very clever');
  } else {
    console.log('Cat is very cute animal');
  }
  console.log(`${animal} has four legs.`);
  console.log(`${animal} has 2 Eys`);
}

// Question 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size:number, message:string) => {
  console.log(size, message);
}
make_shirt(26, ' This size of sirt is very commen and fit everyone');

// question 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const shirt_large = (size:number, message:string = 'I love JavaScript') => {
  if(size <= 26) {
    console.log('This is medium size shirt');
    console.log(size, message);
  } else {
    console.log('This is Large size shirt');
    console.log(size, message);
  }
}
shirt_large(30, ' This size of sirt is very commen and fit everyone');

// Question 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

const describe_city = (city:string, country:string = 'Pakistan') => {
  console.log(`${city} is in ${country}`);
}

describe_city('Karachi');
describe_city('Lahore');
describe_city('Dehli', 'India');

// Question 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

const city_country = (city:string, country:string) => {
  return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Faislbad', 'Pakistan'));
console.log(city_country('Karaci', 'Pakistan'));

// Question 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

let artist_dic = [];
const make_album = (name: string, title: string) => {
  return new Object({
    name: name,
    title: title
  })
};
artist_dic.push(make_album('John', 'PhotoGrapher'));
artist_dic.push(make_album('Jorden', 'Artist'));
artist_dic.push(make_album('Harry', 'Plumber'));

console.log('Artist details: ',artist_dic);

// Question 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magiciansList = ['Erric', 'Jorden', 'Shamely', 'Harry', 'john'];

const showMagicians = (magiciansList: string[]) => {
  for(const name of magiciansList) {
    console.log('Magicican Name: ',name);
  }
}

showMagicians(magiciansList);

// Question 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const make_great = (magiciansList: string[]) => {
  magiciansList.forEach((name, index) => {
    magiciansList[index] = 'Greate ' + name;
  })
  console.log(magiciansList);
}

make_great(magiciansList);

// Question 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const show_artist = (artist_dic:any) => {
  const newArry = artist_dic.map((obj: {name:string, title:string}) =>{
    return obj.name.replace(/^/,'Great ');
  })

  console.log('Replace Name of Artists', newArry);
  console.log('Without Replace: ', artist_dic);
}

show_artist(artist_dic);

// Question 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

const orders = (user:string[], ordername: string) => {
  console.log('User list that orders: ',user, ' Order Name: ', ordername );
}

orders(['jorder', 'john', 'harry'], 'sandwich')
orders(['jorder', 'john', 'harry'], 'Burger')

orders(['jorder', 'john', 'harry'], 'Pizza')


// Question 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let carsArray:any = [];
const car_details = (manufacturer: string, model: number , color:string = '') => {
  if(color) {
    carsArray.push({
      manufacturer: manufacturer,
      model:model,
      color: color,
    })
  } else {
    carsArray.push({
      manufacturer: manufacturer,
      model:model,
    })
  }
}
car_details('Audi', 2010);
car_details('Honda', 2011, 'red');
car_details('Toyota', 2018, 'white');

console.log(carsArray);

