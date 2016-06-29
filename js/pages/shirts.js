
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
var iphone6s = new phone ('Blind', 'Curious George', '24.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/l/clsc-bathing-george-t-shirt-white-1.1464280744.jpg', '200.00') 
var V10  = new phone ('Primitive', 'Jungle Fever', '24.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/p/r/primitive-top-shelf-t-shirt-black-1.1464279977.jpg', '150.00') 
var galaxy = new phone ('Diamond Supply Co.', 'gold jewelry', '22.99','https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond-supply-co-jewelers-row-t-shirt-navy-1.1464279976.jpg', '100.00') 
var onePlus = new phone ('Chocolate', 'Bunny', '25.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate-solitary-animals-premium-t-shirt-black-2.1465840253.jpg', '50.00')


//Push each phone into the array
phonesArray.push(iphone6s)
phonesArray.push(V10)
phonesArray.push(galaxy)
phonesArray.push(onePlus)


for(i = 0; i < phonesArray.length; i++) {
	//loops through each phone brand
	var brand = document.createTextNode("Brand: " + phonesArray[i].brand)
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

	document.getElementById("shirts").appendChild(newCol) 
}
























