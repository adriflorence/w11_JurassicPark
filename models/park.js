const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.add = function(dino) {
  this.dinosaurs.push(dino);
}

Park.prototype.remove = function(dino) {
  if(this.dinosaurs.includes(dino)){
    var index = this.dinosaurs.indexOf(dino);
    if (index > -1) {
      this.dinosaurs.splice(index, (index + 1));
    }
  }
};

Park.prototype.findMostPopular = function(){
  var mostPopularDino = this.dinosaurs[0];
  for(var dino of this.dinosaurs) {
    if(dino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay){
      mostPopularDino = dino;
    }
  }
  return mostPopularDino;
}

Park.prototype.findAllDinosOfGivenSpecies = function(species){
  var DinosOfSpecies = [];
  for(var dino of this.dinosaurs) {
    if(dino.species === species){
      DinosOfSpecies.push(dino);
    }
  }
  return DinosOfSpecies;
}


module.exports = Park;
