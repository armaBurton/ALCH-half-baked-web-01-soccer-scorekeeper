# Soccer Scorekeeper

## Learning Objectives
- Model out examples of state that might be tracked using an array of objects
- Use an object to create a data model for an item in the human world
- Use the FormData  constructor to grab multiple named values from an HTML form.
- Use the submit handler with e.preventDefault() to manage form submissions.
- Use the type attribute on input tags to create email , number , password , and numerous other inputs.
- Create an object of primitive values and access any item in that object by key using dot and bracket notation
- Create an array of complex values (objects or arrays) and access any item in that array by index using bracket notation
- Describe the difference between val & ref
- Identify what data types are passed by reference vs passed by value
- Write a render function that takes in an object (modeled after a real-world item) and returns a DOM element based on that item.
- Call a render function and append its return value to a grabbed element in the DOM
- Use a for/of loop to loop through an array and for each item, append an element to the DOM using a render function
- Create modular code using import and export with named exports.
- Update multiple pieces of numerical state, each of which can be incremented or decremented on click (i.e, times clicked for multiple buttons).

[Buggy Soccer Scorekeeper](https://github.com/alchemycodelab/buggy-js-soccer-scorekeeper)

### Live Example:
https://alchemycodelab.github.io/web-01-soccer-scorekeeper/


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        1 |

| Events                                                                               |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load, see a form and empty current game div                                             |        1 |
| On submit, add the team names to the current game div                                      |        1 |
| On clicking add or subtract, increment and decrement the correct score in the current game div|     1 |
| On clicking finish, empty the current game div and add the current game to the "past games" div. All past games should be visible in this div. |2|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `displayCurrentGameEl()` | 1|
| IMPURE: `displayAllGames()` : clears out and appends to games div | 1|
| PURE: `renderGame(game)` : returns DOM node | 1|
| PURE: `renderTeam(name, score)` :  return DOM node | 1|
