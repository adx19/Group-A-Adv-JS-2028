// any

//
// 1. Takes an array as argument
// 2. Exectuor promise
// 3. [] - Error - Aggregate Error
// 4. Tries to execute the fastest Promise
// If successfull resolve
// If failed, try the next fastest promise
// If all promises are failed, then reject with Aggregate Error

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed to fetch user data ❌"), 1000);
  });
}

function fetchUserPosts(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("No Data"), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 1; // 50% chance of failure
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

function myPromiseAny(items) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(items)) {
      return reject(new TypeError("Input is not iterable"));
    }
    if (items.length === 0) {
      return reject(new AggregateError("All promises were rejected"));
    }
    const errors = new Array(items.length);
    let rejectedCount = 0;

    items.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          rejectedCount++;
          errors[index] = error;
          if (rejectedCount === items.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

myPromiseAny([fetchUserData(), fetchUserPosts(), fetchUserComments()])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
