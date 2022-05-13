const sorting = require('./sortWeights.json');

const yeet = 'md:max-w-full y container cont md:max-h-full md:py-4';

// Array with regex's that will be able to regex the correct tailwind items, the
// order of the regex is the order in which this extension will sort
const orderArray = [/container/, /md:([^;]*)/];

//Give the string that needs to be sorted and the sortorder and return a sorted class
const sortClass = (classString, sortOrder) => {
  //split the classes on space
  // let classArray = classString.split(' ')

  //TODO: Create function to remove duplicates

  //split by space
  const classArray = classString.split(' ');
  //Create new array to add the correct order too.
  const newArray = [];
  //Sort the classes
  // TODO: find out what to do with values that don't match the regex, remove
  // them or just paste them at the end of the class
  orderArray.map((orderItem) => {
    //Map over the items in the class
    for (let i = 0; i < classArray.length; i++) {
      // Check if the classItem matches one of the order values, if so they are
      // added to the new array. This will be the correct order since the
      // tailwind order will be the order in which the array is made.
      // console.log('classItem', orderItem, classItem, orderItem.test(classItem));
      if (orderItem.test(classArray[i])) {
        newArray.push(classArray[i]);
      }
    }
  });

  //Remove specific array index that was added to the new array
  const leftItems = classArray.filter((item) => !newArray.includes(item));

  // Paste the extra items at the end so they are not lost and it's easy to see
  // which items were written wrong or don't exist
  newArray.push(...leftItems);

  return newArray.join(' ');
};

const test = sortClass(yeet, {});
console.log('test', test);
