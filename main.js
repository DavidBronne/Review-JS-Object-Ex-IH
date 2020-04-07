'use strcict'

function main () {
  console.log('ei')
  
  // Exercise 1 (Objects)
  myPenguin = {
    name: "Alfred",
    orgin: "Zig et Puce",
    author: "Alain Saint-Ogan",
    xxx: this
  }

  console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`)
  myPenguin.canFly = false;
  console.log(myPenguin.canFly);
  myPenguin.chirp = () => console.log("CHIRP CHIRP! Is this what penguins sound like?")
  console.log('myPenguin', myPenguin);
  myPenguin.chirp();
  myPenguin.sayHello = () => {console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`)}
  myPenguin.sayHello()
  myPenguin.name = "Penguin McPenguinFace";
  myPenguin.sayHello()
  myPenguin.fly = ()  => {
    if (myPenguin.canFly === true) { console.log("I can fly!") } 
    else { console.log("No flying for me!")}
  }
  myPenguin.fly()
  myPenguin.canFly = true;
  myPenguin.fly()

  // for (const feature in myPenguin) {
  //   console.log(`${feature}`)
  // }

  for (const feature in myPenguin) {
    console.log(`${myPenguin[feature]}`)
  }

  // Exercise 2 (Objects and Arrays)


  myPenguin.favoriteFoods = ['cat','fish','puri']
  console.log(`${myPenguin.favoriteFoods[1]}`);

  let firstFavFood = myPenguin.favoriteFoods[0]
  console.log('firstFavFood', firstFavFood)

  myPenguin.favoriteFoods.push('dog')
  console.log(myPenguin.favoriteFoods.length);

  myPenguin.favoriteFoods[3] = "pineapples";

  let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1]
  console.log('lastFavFood', lastFavFood)
  
  for ( let i = 0 ; i < myPenguin.favoriteFoods.length ; i++) {
    
    console.log(`${myPenguin.favoriteFoods[i]}`)
  }

    // Exercise 3 (Objects and Objects)

    myPenguin.outfit = {
      hat:"baseball cap", 
      shirt:"Hawaiian shirt", 
      pants:"cargo shorts", 
      shoes:"flip-flops"
    }

    let penguinHatType = myPenguin.outfit.hat;
    console.log('penguinHatType', penguinHatType)

    myPenguin.outfit.accessory = "pocket watch";

    myPenguin.outfit.hat = "top hat";

    delete myPenguin.outfit.pants;

    for (const thing in myPenguin.outfit) {
      console.log(`${myPenguin.outfit[thing]}`)
    }

    // Exercise 4 (Arrays and Objects)

    var gunter = {
      name: "Gunter",
      origin: "Adventure Time",
      canFly: false,
      sayHello: function () {
        console.log("QUACK!!!");
      }
    };
    
    var ramon = {
      name: "Ramón",
      origin: "Happy Feet",
      canFly: true,
      sayHello: function () {
        console.log("Estoy encantado de conocerle.");
      }
    };
    
    var fred = {
      name: "Fred",
      origin: "Sitting Ducks",
      canFly: false,
      sayHello: function () {
        console.log("Hi there!");
      }
    };

    let penguins = [gunter, ramon, fred];

    console.log(penguins[0])

    let secondPenguin = penguins[1]
    console.log(secondPenguin)

    console.log(penguins[penguins.length - 1].name)

    penguins.push(myPenguin)
    console.log(penguins.length);
    
    penguins[0].canFly = true;
    console.log(penguins[0]);
    
    penguins[0].sayHello();

    for (let i = 0 ; i < penguins.length ; i++ ) {
      penguins[i].numberOfFeet = 2;
    }

    console.log(penguins[0]);


    for (let i = 0 ; i < penguins.length ; i++ ) {
      if (penguins[i].canFly === true) {
        console.log(`${penguins[i].name} can fly!`);
        
      }
    }
    
    


};

window.addEventListener('load', main);