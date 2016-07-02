
function shirt (brand, model, price, image, buyLink) { // we create an Object (team) and give it 2 parameters (mascot, qb)
  this.brand = brand // “this” refers to team.
  this.model = model
  this.price = price
  this.image = image
  this.buyLink = buyLink
}

var shirtArray = []


// refers to the parameters above in that order (brand, model, price, image, downPayment)
var Industrees = new shirt ('Industrees', ' Bite This ', '26.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/4/848434001817-1.1464279968.jpg', 'https://shop.ccs.com/casual-industrees-bite-this-t-shirt-black') 
var Vans  = new shirt ('Vans', 'Jungle Fever', '19.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-twist-up-t-shirt-black-1xx.1464279750.jpg', 'https://shop.ccs.com/vans-twist-up-t-shirt-black') 
var Neff = new shirt ('Neff', 'Mind Control', '22.99','https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/888259707860-1.1467198292.jpg', 'https://shop.ccs.com/neff-mind-control-t-shirt-white') 
var LRG = new shirt ('LRG', 'RC Live', '25.99', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/r/lrg-rc-live-for-today-t-shirt-black-1.1464279896.jpg', 'https://shop.ccs.com/lrg-rc-live-for-today-t-shirt-black')
var hundreds = new shirt ('The Hundreds', 'Forever Bar', '24.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/t/h/the-hundreds-forever-bar-t-shirt-charcoal-heather-1.1464279904.jpg', 'https://shop.ccs.com/the-hundreds-forever-bar-t-shirt-charcoal-heather' )
var welcome = new shirt ('Welcome', 'Miller Faces', '22.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/w/e/welcome-miller-faces-t-shirt-teal-2.1464279896.jpg', 'https://shop.ccs.com/welcome-miller-faces-t-shirt-teal')
var enjoi = new shirt ('Enjoi', 'No Brainer', '19.60', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/e/n/enjoi-no-brainer-t-shirt-white-1.1464279896.jpg', 'https://shop.ccs.com/enjoi-no-brainer-t-shirt-white')
var santaCruz = new shirt ('Santa Cruz', 'Warp Dot', '19.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/s/a/santa-cruz-warp-dot-t-shirt-black-1.1464279904.jpg', 'https://shop.ccs.com/santa-cruz-warp-dot-t-shirt-black')
//Push each phone into the array
shirtArray.push(Industrees)
shirtArray.push(Vans)
shirtArray.push(Neff)
shirtArray.push(LRG)


shirtArray.push(hundreds)
shirtArray.push(welcome)
shirtArray.push(enjoi)
shirtArray.push(santaCruz)

for(i = 0; i < shirtArray.length; i++) {
	//loops through each phone brand
	var brand = document.createTextNode(shirtArray[i].brand)
	//loops through each phone model 
	var model = document.createTextNode("Model: " + shirtArray[i].model)
	//loops through each phone price
	var price = document.createTextNode("Price: $" + shirtArray[i].price)
	//loops through each phone image
	var shirtImage = shirtArray[i].image
	//loops through each link
	var buy = shirtArray[i].buyLink	
	//button created
	var BuyButton = document.createElement('button')
	
	var newCol= document.createElement("DIV") 
	var newDiv = document.createElement("DIV") 
	var brandh3 = document.createElement("H3") 
	var modelh6 = document.createElement("H6")
	var priceh6 = document.createElement("H6")
	var image = document.createElement("IMG")
	var	newAtag = document.createElement('a')
	
	brandh3.className = 'brandFont'
	brandh3.appendChild(brand) 

	modelh6.className = 'modelFont'
	modelh6.appendChild(model) 

	priceh6.className = 'priceFont'
	priceh6.appendChild(price) 
	
	//append shirtimage to <img> ***need to add .src****
	image.src = shirtImage 
	

	//Add "buy!" text to button
	newAtag.innerHTML = ('Buy')
	//Create a link for button
	newAtag.setAttribute('href', buy)
	//Opens up on a new page
	newAtag.setAttribute('target', '_blank')
	//Creates bootstrap button
	newAtag.setAttribute("class", "btn btn-danger btn-sm text-right")
	



	//append 'col-sm-4' to <div>
	newCol.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12"
	
	//everything is now appended to newDiv since it is the main div
	newDiv.className = "background thumbnail text-center"
	newDiv.appendChild(image)
	newDiv.appendChild(brandh3)
	newDiv.appendChild(modelh6) 
	newDiv.appendChild(priceh6) 
	newDiv.appendChild(newAtag)

	//newdiv is now a child of newCol. This makes each div a 4 column width.
	newCol.appendChild(newDiv) 

	document.getElementById("shirts").appendChild(newCol) 
}























