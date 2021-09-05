export interface Product {
	id: string;
	url: string;
  name: string;
  brewery: string;
	description: string; 
  price: number;
  amount: number;
}

export const products: Product[] = [{
	id: '1',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3P0eSoXiTYlcZcGAHrtoZn/7f8214f4aaee2bbced7dcf72022a1457/xmas_override_keg.png',
  name:'Xmas override',
  brewery: 'NerdBrewing',
	description: 'Malty, nuanced taste with sweetness, hints of orange chocolate, breadcrumbs, espresso coffee, hazelnuts, vanilla and dark syrup.Malty, nuanced taste with sweetness, hints of orange chocolate, breadcrumbs, espresso coffee, hazelnuts, vanilla and dark syrup.',
  price: 50,
  amount: 0,
},{
  id: '2',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3z1cIyZyQiRzQai8T4dXme/da793e16f1368654775ea502a09b15ff/infix_vanilla_keg.png',
  name:'Infix',
  brewery: 'NerdBrewing',
	description: 'Roasted, malty, very sweet taste with hints of coffee, raisins, licorice fudge, vanilla, cocoa, dark syrup and pepper.',
  price: 25,
  amount: 0,
},{
  id: '3',
	url: 'https://images.ctfassets.net/ngqihdllh70f/2LG9W4iIh1cx7FVLVkuJSx/ed141228625c2aa4a725c94ba1895179/override_keg.png?w=1200&h=1086&q=50',
  name:'Override',
  brewery: 'NerdBrewing',
	description: 'Malty, very sweet taste with hints of chocolate cake, coconut, dark syrup, coffee, raisins and vanilla.',
  price: 25,
  amount: 0,
},{
  id: '4',
	url: 'https://images.ctfassets.net/ngqihdllh70f/I94udkQjJdnvbgt5PNlHT/9bd852a3cbc40c5bc148132c121d9840/dipa_untappd.png?w=871&h=732&q=50',
  name:'Switch',
  brewery: 'NerdBrewing',
	description: 'New England DIPA with citra, mosaic and  el dorado hops.',
  price: 35,
  amount: 0,
},{
  id: '5',
	url: 'https://images.ctfassets.net/ngqihdllh70f/3hlH6fFSibHy0KrIfWRczo/416b16f67414361a6d0b13aa7ebf35a6/extends_carrot_cake_keg.png',
  name:'Extends',
  brewery: 'NerdBrewing',
	description: 'Malty, very sweet taste with hints of aged imperial oatmeal stout with carrots and spices.',
  price: 25,
  amount: 0,
}];
