const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = []; // list
  this.dinotypes = []; // hash
  // dinotypes: ({type: 'carnivore', quantity: 1})
  // dino = new Dinosaur('T-rex', 'carnivore', 47);
}

Park.prototype.add = function(dino) {
  let added; // false by default

  // if dinosaur diet type (eg. herbivore) already in the list, increase quantity
  for(let typeHash of this.dinotypes) {
    if(typeHash.type == dino.diet) {
      typeHash.quantity += 1;
      this.dinosaurs.push(dino);
      added = true;
    }
  }
  // if not, add new hash to list
  if(!added) {
    this.dinotypes.push({type: dino.diet, quantity: 1}); // adds 1 dino object
    this.dinosaurs.push(dino);
  }
};


Park.prototype.remove = function(dinoToRemove) {
    // dinotypes: ({type: 'carnivore', quantity: 1}, {type: 'herbivore', quantity: 2}) <- FORMAT
    // dinosaurs: [dino1, dino2, dino3]
    for(let i = this.dinotypes.length - 1; i >= 0; i--){
        if(this.dinotypes[i].type === dinoToRemove.diet){ // iterate through hashes
            this.dinotypes[i].quantity -= 1; // reduce quantity
            if(!this.dinotypes[i].quantity){ // if none left
                this.dinosaurs.splice(i, 1); // remove dinosaur
            }
            let index = this.dinosaurs.indexOf(dinoToRemove);
            if (index > -1) {
              this.dinosaurs.splice(index, 1);
            }
        }
    }
};


Park.prototype.findMostPopular = function(){
  let mostPopularDino = this.dinosaurs[0]; // very first dino in LIST
  for(var dinosaur of this.dinosaurs) {
    if(dinosaur.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay){
      mostPopularDino = dinosaur;
    }
  }
  return mostPopularDino;
}

Park.prototype.findAllDinosOfGivenSpecies = function(speciesToFind){
  let dinosOfSpecies = [];
  for(var dinosaur of this.dinosaurs) { // var ?
    if(dinosaur.species === speciesToFind){
      dinosOfSpecies.push(dinosaur);
    }
  }
  return dinosOfSpecies;
}

Park.prototype.calculateVisitorsPerDay = function(){
  let numberOfVisitors = 0;
  for(var dinosaur of this.dinosaurs) {
    numberOfVisitors += dinosaur.guestsAttractedPerDay;
  }
  return numberOfVisitors;
}

Park.prototype.calculateVisitorsPerYear = function(){
  let visitorsPerDay = this.calculateVisitorsPerDay();
  return visitorsPerDay * 365;
}

Park.prototype.calculateRevenueForYear = function(){
  let visitorsPerYear = this.calculateRevenueForYear();
  return visitorsPerYear * this.price;
}


module.exports = Park;
