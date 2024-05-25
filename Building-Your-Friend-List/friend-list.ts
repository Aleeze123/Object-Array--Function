//Assignment 1: Building Your Friend List
/*Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName, 
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your 
friend list.*/

//Define an object named people containing an empty array called friends

const people={
  friends:[] as
  {
      firstName:string;
      lastName:string;
      id?:number;

  }[]
}
//Create three separate objects
const friend1 = {
  firstName:"Hoorain",
   lastName:"Ali",
   id:1710
  };

const friend2 ={
  firstName:"Rahima",
  lastName:"Khan",
  id:2010
   };

const friend3 ={
  firstName:"Hania",
  lastName:"Khan",
  };

//add these friend objects to the friends array within the people object
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

//Output the entire people object 
console.log(people);