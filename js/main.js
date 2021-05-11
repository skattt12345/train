class Car{

	marka = "";
	model = "";
	year = "";
	engine = "";
	color = "";
	image = "";

	constructor(marka, model,year,engine,color,image){
		this.marka = marka;
		this.model = model;
		this.year = year;
		this.engine = engine;
		this.color = color;
		this.image = image;

	}
}

class Autopark{

	carsArray = [];
	carsRowNode =	document.querySelector(".row") ;

	constructor(){}

	addCar(car){
		this.carsArray.push(car)
	}

	filterByYear(year){
		this.carsArray = this.carsArray.filter((car, index, array) => {
			return car.year === year
		})
	}

	filterByYearMore(year){
		this.carsArray = this.carsArray.filter((car, index, array) => {
			return car.year >= year
		})
	}

	filterByColor(color){
		this.carsArray = this.carsArray.filter((car,index,array) => {
			return car.color.toLowerCase() === color.toLowerCase()
		})
	}

	/* 
	<div class="car">
		<div class="car__img">
			<img src="img/audi.jpg" alt="">
		</div>
		<div class="car__marka">audi</div>
		<div class="car__model">rs</div>
		<div class="car__year">2016</div>
		<div class="car__color">red</div>
	</div>
	*/
	toHtml(){
		this.carsArray.forEach((car) => {
			const carHtml = `
				<div class="car">
					<div class="car__img">
						<img src="${car.image}" alt="">
					</div>
					<div class="car__marka">${car.marka}</div>
					<div class="car__model">${car.model}</div>
					<div class="car__year">${car.year}</div>
					<div class="car__color">${car.color}</div>
				</div>
			`;
			this.carsRowNode.insertAdjacentHTML('afterbegin', carHtml)
		})
	}

}

const audi = new Car("audi","a6",2018,"diesel","black","img/audi.jpg")
const tesla = new Car("tesla","moddel-x",2016,"electro","white","img/tesla.jpg")
const bmw = new Car("bmw","m5",2016,"benzin","grey", "img/bmw.jpeg")
const citroen = new Car("citroen","c4",2013,"benzin","black","img/citroen.jpeg")
const ford = new Car("ford","galaxy",2019,"benzin","white", "img/ford.jpg")
const fiat = new Car("fiat","doblo",2012,"benzin","grey","img/fiat.jpg")
const autopark = new Autopark()
autopark.addCar(audi)
autopark.addCar(tesla)
autopark.addCar(bmw)
autopark.addCar(citroen)
autopark.addCar(ford)
autopark.addCar(fiat)
autopark.toHtml()
