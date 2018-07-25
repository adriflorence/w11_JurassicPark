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

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add(dino1);
    const actual = park.dinosaurs[0];
    assert.strictEqual(actual, dino1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add(dino1);
    park.remove(dino1);
    assert.strictEqual(park.dinosaurs.length, 0);
    assert.strictEqual(park.dinotypes[0].quantity, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    assert.strictEqual(dino3, park.findMostPopular());
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    const actual = [dino4, dino5];
    assert.deepStrictEqual(actual, park.findAllDinosOfGivenSpecies('Omnivosaurus'));
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    assert.strictEqual(park.calculateVisitorsPerDay(), 170);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    assert.strictEqual(park.calculateVisitorsPerYear(), 62050);
  });

  it('should be able to calculate revenue for a year', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    assert.strictEqual(park.calculateRevenueForYear(), 620500);
  });

  it('should be able to return hash of diet types', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    assert.deepStrictEqual(park.formatDinoTypes(), { 'carnivore': 2, 'herbivore': 1, 'omnivore': 2 });
  });


});
