async function abhi() {
  let ktmweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("22 degree");
    }, 2000);
  });

  let pokharaweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 degree");
    }, 5000);
  });

  console.log("Fetching Ktm weather Please wait ...");
  let ktmW = await ktmweather;
  let pkrW = await pokharaweather;
  console.log("Fetched ktm weather " + ktmW);
  console.log("Fetched pokhara weather is" + pkrW);
}

const gokul = () => {
  console.log("Hey i am not waiting");
};

console.log("Welcome to weather control room");
let a = abhi();
let b = gokul();
