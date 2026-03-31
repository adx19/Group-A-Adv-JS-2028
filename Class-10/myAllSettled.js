// allSettled

//
// 1. Takes an array as argument
// 2. Executer promise
// 3. The result order is should be maintained
// 4. Result - array
// 5. Settlement of promises must be done inside an object  -
// Success - {status: "fulfilled", value: result}
// Failure - {status: "rejected", reason: error}
// 6. Edge case - if no promises are passed, it should return an empty array
// 7. Edge case - if non iterable are passed, it should return TypeError

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

function fetchUserPosts(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0; // 50% chance of failure
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

function myPromiseAllSettled(items) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(items)) {
      return reject(new TypeError("Input is not iterable"));
    }
    if (items.length === 0) {
      resolve([]);
    }

    const results = new Array(items.length);
    let compltedCount = 0;
    items.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          compltedCount++;
          if (compltedCount === items.length) {
            resolve(results);
          }
        });
    });
  });
}

myPromiseAllSettled([fetchUserData(), fetchUserPosts(), fetchUserComments()])
  .then(function (results){
    console.log(results);
  })
  .catch(function (err){
    console.log(err);
  });

