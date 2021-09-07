export interface Product {
	id: string;
	url: string;
  urlDetails: string;
  name: string;
  brewery: string;
	description: string; 
  price: number;
  amount: number;
}

export const products: Product[] = [{
	id: '1',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3P0eSoXiTYlcZcGAHrtoZn/7f8214f4aaee2bbced7dcf72022a1457/xmas_override_keg.png',
  urlDetails: "https://product-cdn.systembolaget.se/productimages/24410181/24410181_400.png",
  name:'Xmas override',
  brewery: 'NerdBrewing',
	description: 'Malty, nuanced taste with sweetness, hints of orange chocolate, breadcrumbs, espresso coffee, hazelnuts, vanilla and dark syrup.Malty, nuanced taste with sweetness, hints of orange chocolate, breadcrumbs, espresso coffee, hazelnuts, vanilla and dark syrup.',
  price: 50,
  amount: 0,
},{
  id: '2',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3z1cIyZyQiRzQai8T4dXme/da793e16f1368654775ea502a09b15ff/infix_vanilla_keg.png',
  urlDetails: "https://product-cdn.systembolaget.se/productimages/24547950/24547950_400.png",
  name:'Infix',
  brewery: 'NerdBrewing',
	description: 'Roasted, malty, very sweet taste with hints of coffee, raisins, licorice fudge, vanilla, cocoa, dark syrup and pepper.',
  price: 25,
  amount: 0,
},{
  id: '3',
	url: 'https://images.ctfassets.net/ngqihdllh70f/2LG9W4iIh1cx7FVLVkuJSx/ed141228625c2aa4a725c94ba1895179/override_keg.png?w=1200&h=1086&q=50',
  urlDetails: "https://product-cdn.systembolaget.se/productimages/24559455/24559455_400.png",
  name:'Override',
  brewery: 'NerdBrewing',
	description: 'Malty, very sweet taste with hints of chocolate cake, coconut, dark syrup, coffee, raisins and vanilla.',
  price: 25,
  amount: 0,
},{
  id: '4',
	url: 'https://images.ctfassets.net/ngqihdllh70f/I94udkQjJdnvbgt5PNlHT/9bd852a3cbc40c5bc148132c121d9840/dipa_untappd.png?w=871&h=732&q=50',
  urlDetails: 'https://glasbanken.se/wp-content/uploads/Nerdbrewing_Switch.png',
  name:'Switch',
  brewery: 'NerdBrewing',
	description: 'New England DIPA with citra, mosaic and  el dorado hops.',
  price: 35,
  amount: 0,
},{
  id: '5',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3hlH6fFSibHy0KrIfWRczo/416b16f67414361a6d0b13aa7ebf35a6/extends_carrot_cake_keg.png',
  urlDetails: "https://glasbanken.se/wp-content/uploads/Nerdbrewing_Extends_Carrotcake-1500x1500.png",
  name:'Extends',
  brewery: 'NerdBrewing',
	description: 'Malty, very sweet taste with hints of aged imperial oatmeal stout with carrots and spices.',
  price: 25,
  amount: 0,
},{
  id: '6',
  url:'https://images.ctfassets.net/ngqihdllh70f/1spxSMkx68CFqTPWycn1W8/ecdfa7451a15f6e0b65e77fd96b6d59c/apple_pie_keg.png',
  urlDetails: 'https://image-cache.beerizer.com/4x8UL6rd-Mr9bOFpbQOdDCQ6vZ8=/trim/fit-in/400x400/https%3A%2F%2Fbeer-images.beerizer.com%2Fraw%2F28%2F5%2F52099.jpg',
  name:'Break',
  brewery: 'NerdBrewing',
	description: 'Imperial milk stout with apple, cinnamon and vanilla.',
  price: 30,
  amount: 0,
},{
  id: '7',
  url:'https://images.ctfassets.net/ngqihdllh70f/1lrHon2fjTPvw3Txoqbbck/08c9cff92d31adcfcc493f3137ed105c/keg.png',
  urlDetails: 'https://image-cache.beerizer.com/62ykZUHSAoJD-nQYTUl-Xk_n55w=/trim/fit-in/400x400/https%3A%2F%2Fbeer-images.beerizer.com%2Fraw%2F28%2F4%2F42916.jpg',
  name:'When',
  brewery: 'NerdBrewing',
	description: 'Imperial milk stout with marshmallows aged on roasted peanuts and vanilla.',
  price: 35,
  amount: 0,
},{
  id: '8',
  url:'https://images.ctfassets.net/ngqihdllh70f/2mKXxechzROZljGo4qaUzN/601e489b8f6b0b6cdbcdf81a9d692cc5/implements_coconut_chili_keg.png',
  urlDetails: 'https://glasbanken.se/wp-content/uploads/Nerdbrewing_implements_coconut_chili-1500x1500.png',
  name:'Implements',
  brewery: 'NerdBrewing',
	description: 'Imperial stout aged on roasted cocoa nibs, coconut and chili.',
  price: 35,
  amount: 0,
},{
  id: '9',
  url:'https://images.ctfassets.net/ngqihdllh70f/3F136UswljjPoRDYqfABRq/bcd97205c61ebd5e7f37266628b32116/keg.png',
  urlDetails: 'https://beerbay.net/img/beer/nerdbrewing/indexoutofbounds-oa-imperial-vanilla-stout-optimized.webp',
  name:'Indexoutofbounds',
  brewery: 'NerdBrewing',
	description: 'Oak aged imperial stout with vanilla and cold brewed vietnamese coffee.',
  price: 35,
  amount: 0,
}];

