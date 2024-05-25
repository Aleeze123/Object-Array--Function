//Assignment 2:Manipulating an Array: Rearranging Words
/*Scrambled Array:
o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).

• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
  
//Start with an array of elements in a scrambled order  
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

//use Methods 
scrambledArray.splice(3,1);
scrambledArray.splice(2,1);
scrambledArray.unshift("I");
scrambledArray.splice(1,1)
scrambledArray.splice(1,1)
scrambledArray.splice(3 , 2, "student", "of" )
scrambledArray.push("Giaic")
//use join() to combine elements into a single string
const result = scrambledArray.join(' ');
console.log(result); // Output: "I am a student of GIAIC"

