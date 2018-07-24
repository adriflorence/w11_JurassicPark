const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
      park = new Park('Dino World', 10);
      dino1 = new Dinosaur('T-rex', 'carnivore', 47);
      dino2 = new Dinosaur('Carnivosaurus', 'carnivore', 11);
      dino3 = new Dinosaur('Plantosaurus', 'herbivore', 51);
      dino4 = new Dinosaur('Omnivosaurus', 'omnivore', 34);
      dino5 = new Dinosaur('Omnivosaurus', 'omnivore', 27);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino World');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs'); // ?

  it('should be able to add a dinosaur to its collection', function(){
    park.add(dino1);
    const actual = park.dinosaurs[0];
    assert.strictEqual(actual, dino1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add(dino1);
    park.remove(dino1);
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    const actual = park.dinosaurs[0];
    assert.strictEqual(dino3, park.findMostPopular());
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    const actual = [dino4, dino5];
    assert.strictEqual(actual, park.findAllDinosOfGivenSpecies('Omnivosaurus'));
  });


});
