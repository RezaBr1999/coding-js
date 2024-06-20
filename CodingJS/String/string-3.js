// 102
function countWordsEndingInYorZ(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Split the string into words using regex to include words followed by non-alphabetic characters
  let words = str.split(/[^a-z]+/);

  // Initialize the counter
  let count = 0;

  // Loop through each word to check the condition
  words.forEach((word) => {
    if (word.endsWith("y") || word.endsWith("z")) {
      count++;
    }
  });

  return count;
}

// 103
function withoutString(base, remove) {
  let result = "";
  let removeLower = remove.toLowerCase(); // Convert the remove string to lowercase for case-insensitive comparison
  let i = 0;

  while (i < base.length) {
    // Extract the substring from base of the same length as remove for comparison
    let sub = base.slice(i, i + remove.length).toLowerCase();

    if (sub === removeLower) {
      // If the substring matches the remove string, skip over it
      i += remove.length;
    } else {
      // If it doesn't match, add the current character to the result
      result += base[i];
      i++;
    }
  }

  return result;
}

// 104
function equalIsNot(str) {
  let isCount = 0;
  let notCount = 0;
  let index = 0;

  while (index < str.length) {
    let isSub = str.substring(index, index + 2);
    let notSub = str.substring(index, index + 3);

    console.log(isSub, notSub);
    if (notSub === "not") {
      notCount++;
    }

    if (isSub === "is") {
      isCount++;
    }

    index++;
  }
  return isCount === notCount;
}

// 105
function gHappy(str) {
  let index = 0;
  while (index < str.length) {
    if (str[index] === "g") {
      if (str[index - 1] !== "g" && str[index + 1] !== "g") {
        return false;
      }
    }
    index++;
  }
  return true;
}

