
function deck (brand, model, price, image, buyLink) { 
  this.brand = brand 
  this.model = model
  this.price = price
  this.image = image
  this.buyLink = buyLink
}

var decksArray = []

var primitive = new deck ('Primitive', 'Amigos Bastien', '54.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/p/r/primitive-amigos-bastien-skateboard-deck-8-25-bottom_1.1464279994.jpg', 'https://shop.ccs.com/primitive-amigos-bastien-skateboard-deck-8-25') 
var baker  = new deck ('Baker', 'Baker Figgy and Riley Hawk Purple Church ', '54.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/a/baker-figgy-and-riley-hawk-purple-church-skateboard-deck-8-25_1.1464279803.jpg', 'https://shop.ccs.com/baker-figgy-and-riley-hawk-purple-church-skateboard-deck-8-25') 
var antihero = new deck ('Anti-Hero', 'Beres Wild Unknown', '45.99','https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/888560094550-1.1465557883.jpg', 'https://shop.ccs.com/antihero-beres-wild-unknown-skateboard-deck-8-38') 
var blind = new deck ('Blind', 'SWarrior Series R7 Smith', '54.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/0/805538557763-1.1465558348.jpg', 'https://shop.ccs.com/blind-warrior-series-r7-smith-skateboard-deck-8-25')
var creature = new deck ('Creature', 'Partanen', '49.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/r/creature-partanen-shakra-skateboard-deck-8-2-1_1.1465300335.jpg','https://shop.ccs.com/creature-partanen-shakra-skateboard-deck-8-20')
var habitat = new deck ('Habitat', 'Dot Gain Green', '49.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/h/a/habitat-dot-gain-green-skateboard-deck-8-375-bottom_1.1464279666.jpg', 'https://shop.ccs.com/habitat-dot-gain-green-skateboard-deck-8-375')
var mystery = new deck ('Mystery', 'Cosmic Heart V2', '54.95', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/m/y/mystery-cosmic-heart-v2-skateboard-deck-8-125-1_1.1465558035.jpg', 'https://shop.ccs.com/mystery-cosmic-heart-v2-skateboard-deck-8-125')
var chocolate = new deck ('Chocolate', 'Raven Tershy Trunk Boys', '46.76', 'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolate-raven-tershy-trunk-boyz-skateboard-deck-8-375-bottom_1.1464279769.jpg', 'https://shop.ccs.com/chocolate-raven-tershy-trunk-boyz-skateboard-deck-8-375')

//Push each deck into the array
decksArray.push(primitive)
decksArray.push(baker)
decksArray.push(antihero)
decksArray.push(blind)
decksArray.push(creature)
decksArray.push(habitat)
decksArray.push(mystery)
decksArray.push(blind)


for(i = 0; i < decksArray.length; i++) {
	//loops through each deck brand
	var brand = document.createTextNode(decksArray[i].brand)
	//loops through each deck model 
	var model = document.createTextNode("Model: " + decksArray[i].model)
	//loops through each deck price
	var price = document.createTextNode("Price: $" + decksArray[i].price)
	//loops through each deck image
	var deckImage = decksArray[i].image	
	//link to buy a deck
	var buy = decksArray[i].buyLink
	//button created
	
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
	//append image to <img> ***need to add .src****
	image.src = deckImage 
	
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

	document.getElementById("decks").appendChild(newCol) 
}
























