
function phone (brand, model, price, image, downPayment) { // we create an Object (team) and give it 2 parameters (mascot, qb)
  this.brand = brand // “this” refers to team.
  this.model = model
  this.price = price
  this.image = image
  this.downPayment = downPayment
  this.phoneBalance  = function(){
  	return this.price - this.downPayment
  }
}

var phonesArray = []

// refers to the parameters above in that order (brand, model, price, image, downPayment)
var iphone6s = new phone ('Apple', 'iphone6s', '649.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/p/r/primitive-bastien-salabanzi-red-card-skateboard-deck-8-38-bottom_1.1464393289.jpg', '200.00') 
var V10  = new phone ('LG', 'V10', '599.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/b/a/baker-figgy-and-riley-hawk-purple-church-skateboard-deck-8-25_1.1464291267.jpg', '150.00') 
var galaxy = new phone ('Samsung', 'Galaxy S6', '579.99','https://cdn.ccs.com/media/catalog/product/cache/4/image/250x/17f82f742ffe127f42dca9de82fb58b1/8/8/888560094550-1.1465564707.jpg?', '100.00') 
var onePlus = new phone ('One Plus', 'One Plus One', '450.00', 'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/8/0/805538557763-1.1465635854.jpg', '50.00')


//Push each phone into the array
phonesArray.push(iphone6s)
phonesArray.push(V10)
phonesArray.push(galaxy)
phonesArray.push(onePlus)


for(i = 0; i < phonesArray.length; i++) {
	//loops through each phone brand
	var brand = document.createTextNode(phonesArray[i].brand)
	//loops through each phone model 
	var model = document.createTextNode("Model: " + phonesArray[i].model)
	//loops through each phone price
	var price = document.createTextNode("Price: $" + phonesArray[i].price)
	//loops through each phone image
	var phoneImage = phonesArray[i].image	
	//button created
	var BuyButton = document.createElement('button')
	

	var newCol= document.createElement("DIV") 
	var newDiv = document.createElement("DIV") 
	var brandh6 = document.createElement("H6") 
	var modelh6 = document.createElement("H6")
	var priceh6 = document.createElement("H6")
	var image = document.createElement("IMG")

	//append brand to <h6>
	brandh6.appendChild(brand) 
	//append model to <h6>
	modelh6.appendChild(model) 
	//append price to <h6>
	priceh6.appendChild(price) 
	//append phone image to <img> ***need to add .src****
	image.src = phoneImage 
	BuyButton.innerHTML = ('Buy!')
	//Creates bootstrap button
	BuyButton.setAttribute("class", "btn btn-danger btn-sm text-right")

	//append 'col-sm-4' to <div>
	newCol.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12"
	
	//everything is now appended to newDiv since it is the main div
	newDiv.className = "thumbnail"
	newDiv.appendChild(image)
	newDiv.appendChild(brandh6)
	newDiv.appendChild(modelh6) 
	newDiv.appendChild(priceh6) 
	newDiv.appendChild(BuyButton)

	//newdiv is now a child of newCol. This makes each div a 4 column width.
	newCol.appendChild(newDiv) 

	document.getElementById("phones").appendChild(newCol) 
}
























