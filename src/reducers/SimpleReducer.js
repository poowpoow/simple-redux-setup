/*
 src/reducers/simpleReducer.js
*/
const randomNumber = () => {
  let number = Math.random()
  return number;
}

export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: randomNumber()
      }
     default:
      return state
    }
   }