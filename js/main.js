

$(document).ready(function(){
console.log(123);
class Animal{


	constructor(name,color){
		this.name = name;
		this.color = color;
	}
	showAnimal(){
		console.log("My name is " + this.name + " and my color is" + this.color)
	}

}

class Zoo{
	animalZoo = [];

	constructor(){

	}
	addZoo(){
		this.animalZoo.push("bear")
	}
	deleteZoo(){
		this.animalZoo.pop()
	}
}

const cat = new Animal("cat","black");
const bear = new Animal("bear","brown")
const animals = new Zoo();
animals.addZoo(cat)
animals.addZoo(bear)



});