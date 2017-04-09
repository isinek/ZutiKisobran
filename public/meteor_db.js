db.orgs.remove({});
db.orgs.insertMany([
	{"_id": ObjectId("58e97aeb83e3c33c8af6f061"), "name": "Posuere PC", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f062"), "name": "At Velit Cras Institute", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f063"), "name": "Dui Nec LLP", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f064"), "name": "Pellentesque Massa Lobortis Limited", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f065"), "name": "Fermentum Vel Mauris Foundation", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f066"), "name": "At Egestas A Ltd", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f067"), "name": "Libero Institute", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f068"), "name": "Vitae Diam Consulting", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f069"), "name": "In Hendrerit Consectetuer Industries", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06a"), "name": "Pellentesque Massa Lobortis Limited", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06b"), "name": "Fermentum Vel Mauris Foundation", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06c"), "name": "At Egestas A Ltd", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06d"), "name": "Libero Institute", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06e"), "name": "Vitae Diam Consulting", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f06f"), "name": "In Hendrerit Consectetuer Industries", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f070"), "name": "Ullamcorper Corp.", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f071"), "name": "Et Limited", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f072"), "name": "Velit In Aliquet Inc.", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f073"), "name": "Sagittis Felis Foundation", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f074"), "name": "Aenean PC", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f075"), "name": "Egestas Duis Ac Inc.", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f076"), "name": "Non Cursus LLC", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f077"), "name": "Eleifend Cras Company", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f078"), "name": "Mauris Erat Eget Company", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f079"), "name": "Ligula Aliquam Erat Limited", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07a"), "name": "Pellentesque Massa Lobortis Limited", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07b"), "name": "Fermentum Vel Mauris Foundation", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07c"), "name": "At Egestas A Ltd", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07d"), "name": "Libero Institute", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07e"), "name": "Vitae Diam Consulting", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f07f"), "name": "In Hendrerit Consectetuer Industries", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f080"), "name": "Dignissim Maecenas Ornare Consulting", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f081"), "name": "Et Limited", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f082"), "name": "Velit In Aliquet Inc.", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f083"), "name": "Sagittis Felis Foundation", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f084"), "name": "Aenean PC", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f085"), "name": "Egestas Duis Ac Inc.", "isApproved": 1},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f086"), "name": "Non Cursus LLC", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f087"), "name": "Eleifend Cras Company", "isApproved": 0},
	{"_id": ObjectId("58e97aeb83e3c33c8af6f088"), "name": "Mauris Erat Eget Company", "isApproved": 0},
]);

db.hotels.remove({});
db.hotels.insertMany([
	{ "_id" : ObjectId("58e983a583e3c33c8af6f141"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07c"), "name" : "Consequat Lectus Institute", "city" : "Dubrovnik", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06f"), "name" : "Nonummy Fusce Fermentum Company", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f156"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f061"), "name" : "Erat Semper Rutrum Foundation", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f088"), "name" : "Feugiat Inc.", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06a"), "name" : "Nascetur Ridiculus Mus Ltd", "city" : "Split", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f068"), "name" : "A LLP", "city" : "Dubrovnik", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f064"), "name" : "Congue A Corporation", "city" : "Bjelovar", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Netus Et Associates", "city" : "Rijeka", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f160"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f073"), "name" : "Natoque Penatibus Et Ltd", "city" : "Bjelovar", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f161"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f088"), "name" : "Feugiat Lorem Inc.", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f162"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07b"), "name" : "Malesuada Institute", "city" : "Split", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f163"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f064"), "name" : "In Corp.", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f164"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f069"), "name" : "Donec Nibh Foundation", "city" : "Rijeka", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f165"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f066"), "name" : "Est Mauris Eu Incorporated", "city" : "Zagreb", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f166"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f082"), "name" : "Nunc Consulting", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f167"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f062"), "name" : "Tortor Nibh Sit Company", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f168"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f081"), "name" : "Aliquam Corp.", "city" : "Split", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f169"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f080"), "name" : "Eu Tempor Foundation", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Neque Incorporated", "city" : "Split", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07f"), "name" : "Commodo Auctor Velit Industries", "city" : "Zagreb", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f075"), "name" : "Cras Eu LLP", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06a"), "name" : "Molestie Arcu Sed PC", "city" : "Dubrovnik", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07a"), "name" : "Ultricies Adipiscing Enim Consulting", "city" : "Zagreb", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f16f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f062"), "name" : "Aliquet Magna PC", "city" : "Split", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f170"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06c"), "name" : "Faucibus Orci Associates", "city" : "Bjelovar", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f171"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f065"), "name" : "Et Ultrices Posuere Consulting", "city" : "Bjelovar", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f172"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f067"), "name" : "Orci Luctus Et Incorporated", "city" : "Split", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f173"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f084"), "name" : "Integer Mollis LLP", "city" : "Bjelovar", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f174"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07d"), "name" : "Mollis Duis Associates", "city" : "Zagreb", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f175"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f081"), "name" : "Mauris Aliquam Eu Inc.", "city" : "Rijeka", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f176"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07d"), "name" : "Posuere At Foundation", "city" : "Bjelovar", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f177"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f082"), "name" : "Mus Proin Vel Industries", "city" : "Kutina", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f178"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Mi Incorporated", "city" : "Split", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f179"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Sit PC", "city" : "Bjelovar", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f063"), "name" : "Etiam Gravida Molestie Corporation", "city" : "Split", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07d"), "name" : "Et Corp.", "city" : "Rijeka", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06a"), "name" : "Est Corporation", "city" : "Zagreb", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f072"), "name" : "Dapibus Gravida Incorporated", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f085"), "name" : "Faucibus Lectus A Corporation", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f17f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f080"), "name" : "Erat Eget Consulting", "city" : "Kutina", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f180"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f066"), "name" : "Eu Nibh Limited", "city" : "Bjelovar", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f181"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f086"), "name" : "Sollicitudin Ltd", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f182"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07f"), "name" : "Felis Institute", "city" : "Kutina", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f183"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06f"), "name" : "Id Incorporated", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f184"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f081"), "name" : "Est Tempor LLC", "city" : "Split", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f185"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Molestie Orci Tincidunt Corp.", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f186"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f080"), "name" : "Mauris Sit Amet Limited", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f187"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07f"), "name" : "Et Netus LLP", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f188"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07a"), "name" : "At LLC", "city" : "Bjelovar", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f189"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f062"), "name" : "Purus Accumsan Incorporated", "city" : "Kutina", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f18a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06a"), "name" : "Lacus Etiam Industries", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f18b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f087"), "name" : "Ac LLP", "city" : "Split", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f18c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f080"), "name" : "A Dui Inc.", "city" : "Split", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f129"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06f"), "name" : "Porta Elit A Inc.", "city" : "Split", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f074"), "name" : "Nam Consequat Dolor Consulting", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f084"), "name" : "Eget Laoreet LLC", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f083"), "name" : "Phasellus Inc.", "city" : "Dubrovnik", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f078"), "name" : "Nulla Limited", "city" : "Zagreb", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07b"), "name" : "Pede Cum Inc.", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f12f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f084"), "name" : "Fermentum Risus At Incorporated", "city" : "Split", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f130"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f063"), "name" : "Amet Consectetuer Incorporated", "city" : "Kutina", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f131"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f085"), "name" : "Convallis Ltd", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f132"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07e"), "name" : "Urna Institute", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f133"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f079"), "name" : "Donec Ltd", "city" : "Kutina", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f134"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07b"), "name" : "Purus Foundation", "city" : "Bjelovar", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f135"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f077"), "name" : "Facilisis Incorporated", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f136"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f081"), "name" : "Donec Porttitor Ltd", "city" : "Kutina", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f137"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07f"), "name" : "Ut Dolor Dapibus Institute", "city" : "Dubrovnik", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f138"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07d"), "name" : "Sodales Purus In Foundation", "city" : "Kutina", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f139"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07d"), "name" : "Est Inc.", "city" : "Bjelovar", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07e"), "name" : "Nunc Mauris Ltd", "city" : "Split", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06a"), "name" : "Pellentesque Institute", "city" : "Zagreb", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f077"), "name" : "Malesuada Malesuada Integer Company", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f082"), "name" : "Mauris Ipsum Porta LLC", "city" : "Dubrovnik", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13e"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f068"), "name" : "Tristique Associates", "city" : "Bjelovar", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f13f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06b"), "name" : "Consectetuer Adipiscing Company", "city" : "Split", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f140"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f063"), "name" : "Urna Et Arcu Associates", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f142"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07f"), "name" : "Natoque Penatibus Company", "city" : "Split", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f143"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f080"), "name" : "Magna Ut Company", "city" : "Bjelovar", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f144"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f085"), "name" : "Risus Nunc Inc.", "city" : "Split", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f145"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f068"), "name" : "Aenean Massa Integer Ltd", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f146"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f086"), "name" : "Ultrices Duis Volutpat LLP", "city" : "Zagreb", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f147"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07b"), "name" : "Vestibulum Massa LLP", "city" : "Rijeka", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f148"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07b"), "name" : "Nunc Sit Ltd", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f149"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f067"), "name" : "Nibh Donec Est Company", "city" : "Zagreb", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f079"), "name" : "Lorem Ut Aliquam Institute", "city" : "Kutina", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14b"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07a"), "name" : "Suspendisse Non Inc.", "city" : "Zagreb", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14c"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f07a"), "name" : "Felis Orci Corp.", "city" : "Rijeka", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14d"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f065"), "name" : "Mus Proin Limited", "city" : "Kutina", "stars" : 1 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f14f"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f087"), "name" : "Neque Vitae Industries", "city" : "Zagreb", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f150"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f082"), "name" : "Sed Neque Corp.", "city" : "Dubrovnik", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f151"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06d"), "name" : "Nisl PC", "city" : "Dubrovnik", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f152"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f083"), "name" : "Id Erat Incorporated", "city" : "Rijeka", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f153"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f071"), "name" : "Lacus Limited", "city" : "Dubrovnik", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f154"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f062"), "name" : "Vel Ltd", "city" : "Kutina", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f155"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f06e"), "name" : "Neque Associates", "city" : "Rijeka", "stars" : 3 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f157"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f072"), "name" : "Neque In Ornare Institute", "city" : "Rijeka", "stars" : 2 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f158"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f065"), "name" : "Gravida Limited", "city" : "Zagreb", "stars" : 5 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f159"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f077"), "name" : "Aliquam Incorporated", "city" : "Zagreb", "stars" : 4 },
	{ "_id" : ObjectId("58e983a583e3c33c8af6f15a"), "orgId" : ObjectId("58e97aeb83e3c33c8af6f065"), "name" : "Iaculis Quis Pede Inc.", "city" : "Bjelovar", "stars" : 2 }
]);

db.rooms.remove({});
db.rooms.insertMany([
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f15f"),
		"name": "Viverra Donec Limited",
		"bedCount": 5,
		"price": "152.61",
		"tags": "'balkon', 'tv', 'mini bar', 'more', 'uz plažu'",
		"roomCount": 19,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f150"),
		"name": "Ac Orci Corp.",
		"bedCount": 4,
		"price": "125.84",
		"tags": "'uz plažu'",
		"roomCount": 44,
		"freeRoomCount": 5
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17a"),
		"name": "Mollis Foundation",
		"bedCount": 5,
		"price": "300.61",
		"tags": "'balkon', 'more', 'pomoćni ležaj'",
		"roomCount": 43,
		"freeRoomCount": 17
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f152"),
		"name": "Quis Pede Suspendisse Corp.",
		"bedCount": 2,
		"price": "307.07",
		"tags": "'more', 'mini bar', 'tv'",
		"roomCount": 18,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17c"),
		"name": "Scelerisque Scelerisque Dui Associates",
		"bedCount": 3,
		"price": "214.24",
		"tags": "",
		"roomCount": 38,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f183"),
		"name": "A Purus Foundation",
		"bedCount": 1,
		"price": "423.70",
		"tags": "'pomoćni ležaj', 'uz plažu', 'more', 'balkon'",
		"roomCount": 43,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f140"),
		"name": "Sed Congue Elit Inc.",
		"bedCount": 1,
		"price": "157.09",
		"tags": "",
		"roomCount": 35,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f137"),
		"name": "Nec Tempus Scelerisque Foundation",
		"bedCount": 3,
		"price": "289.87",
		"tags": "'mini bar', 'uz plažu'",
		"roomCount": 35,
		"freeRoomCount": 8
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f168"),
		"name": "Eu Euismod Ac Incorporated",
		"bedCount": 2,
		"price": "185.38",
		"tags": "'mini bar', 'balkon'",
		"roomCount": 11,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14c"),
		"name": "Arcu Aliquam Inc.",
		"bedCount": 1,
		"price": "469.17",
		"tags": "'tv', 'najbolja', 'pomoćni ležaj', 'more'",
		"roomCount": 32,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f141"),
		"name": "Sit Amet LLC",
		"bedCount": 3,
		"price": "285.86",
		"tags": "'uz plažu', 'najbolja', 'tv', 'balkon'",
		"roomCount": 10,
		"freeRoomCount": 14
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12f"),
		"name": "Velit Ltd",
		"bedCount": 5,
		"price": "30.75",
		"tags": "",
		"roomCount": 25,
		"freeRoomCount": 21
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f183"),
		"name": "Nullam Scelerisque Limited",
		"bedCount": 4,
		"price": "379.54",
		"tags": "'najbolja', 'tv', 'pomoćni ležaj'",
		"roomCount": 50,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f140"),
		"name": "Lectus Quis Massa Institute",
		"bedCount": 5,
		"price": "459.21",
		"tags": "'najbolja', 'pomoćni ležaj'",
		"roomCount": 16,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f186"),
		"name": "Ipsum Corporation",
		"bedCount": 4,
		"price": "43.84",
		"tags": "'more', 'najbolja', 'pomoćni ležaj'",
		"roomCount": 42,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f163"),
		"name": "Erat Semper Rutrum Ltd",
		"bedCount": 3,
		"price": "477.96",
		"tags": "",
		"roomCount": 15,
		"freeRoomCount": 19
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f136"),
		"name": "Convallis Ante Institute",
		"bedCount": 4,
		"price": "414.69",
		"tags": "'uz plažu'",
		"roomCount": 27,
		"freeRoomCount": 3
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f13e"),
		"name": "Ultricies Sem Magna Consulting",
		"bedCount": 5,
		"price": "348.73",
		"tags": "'balkon', 'mini bar'",
		"roomCount": 13,
		"freeRoomCount": 23
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f186"),
		"name": "Lorem Lorem Luctus Company",
		"bedCount": 1,
		"price": "127.04",
		"tags": "",
		"roomCount": 31,
		"freeRoomCount": 12
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f164"),
		"name": "Donec Nibh Corporation",
		"bedCount": 3,
		"price": "489.89",
		"tags": "'tv', 'balkon', 'najbolja', 'pomoćni ležaj', 'uz plažu'",
		"roomCount": 13,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17f"),
		"name": "Montes Nascetur Ridiculus LLP",
		"bedCount": 1,
		"price": "370.56",
		"tags": "'more', 'mini bar', 'uz plažu', 'tv'",
		"roomCount": 21,
		"freeRoomCount": 25
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14e"),
		"name": "Lacus Quisque Corp.",
		"bedCount": 2,
		"price": "462.68",
		"tags": "'pomoćni ležaj'",
		"roomCount": 12,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f174"),
		"name": "Tincidunt PC",
		"bedCount": 1,
		"price": "441.85",
		"tags": "",
		"roomCount": 24,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17f"),
		"name": "Felis Purus Ac Foundation",
		"bedCount": 4,
		"price": "172.25",
		"tags": "'uz plažu', 'balkon', 'pomoćni ležaj', 'more', 'najbolja'",
		"roomCount": 40,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12b"),
		"name": "Ipsum Dolor PC",
		"bedCount": 5,
		"price": "386.85",
		"tags": "'najbolja', 'more', 'balkon'",
		"roomCount": 17,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f171"),
		"name": "Molestie Associates",
		"bedCount": 1,
		"price": "196.16",
		"tags": "'mini bar', 'najbolja', 'balkon', 'uz plažu', 'tv'",
		"roomCount": 37,
		"freeRoomCount": 23
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14a"),
		"name": "Suspendisse Aliquet Molestie Inc.",
		"bedCount": 2,
		"price": "346.48",
		"tags": "",
		"roomCount": 26,
		"freeRoomCount": 19
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f140"),
		"name": "Etiam Gravida Ltd",
		"bedCount": 4,
		"price": "144.21",
		"tags": "",
		"roomCount": 16,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f138"),
		"name": "Proin Ultrices Duis Corporation",
		"bedCount": 1,
		"price": "194.08",
		"tags": "'pomoćni ležaj'",
		"roomCount": 34,
		"freeRoomCount": 17
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f168"),
		"name": "Cras Convallis Convallis Institute",
		"bedCount": 2,
		"price": "80.31",
		"tags": "'tv', 'pomoćni ležaj'",
		"roomCount": 34,
		"freeRoomCount": 7
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14f"),
		"name": "Auctor Odio A Associates",
		"bedCount": 2,
		"price": "237.97",
		"tags": "'tv', 'balkon', 'more', 'uz plažu', 'mini bar'",
		"roomCount": 23,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f185"),
		"name": "Arcu Associates",
		"bedCount": 5,
		"price": "283.75",
		"tags": "'uz plažu'",
		"roomCount": 18,
		"freeRoomCount": 3
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f174"),
		"name": "Eget Incorporated",
		"bedCount": 5,
		"price": "179.80",
		"tags": "'tv', 'mini bar', 'uz plažu', 'pomoćni ležaj', 'balkon'",
		"roomCount": 37,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17c"),
		"name": "Lorem Tristique Corporation",
		"bedCount": 2,
		"price": "169.78",
		"tags": "'pomoćni ležaj'",
		"roomCount": 30,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f175"),
		"name": "Eget Tincidunt Dui Foundation",
		"bedCount": 3,
		"price": "228.04",
		"tags": "",
		"roomCount": 26,
		"freeRoomCount": 8
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f147"),
		"name": "Eu Company",
		"bedCount": 3,
		"price": "128.55",
		"tags": "",
		"roomCount": 12,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f135"),
		"name": "Nunc Nulla Institute",
		"bedCount": 2,
		"price": "494.88",
		"tags": "'mini bar'",
		"roomCount": 34,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18a"),
		"name": "Tempus Corporation",
		"bedCount": 4,
		"price": "215.33",
		"tags": "'mini bar'",
		"roomCount": 40,
		"freeRoomCount": 13
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f186"),
		"name": "Id Erat Ltd",
		"bedCount": 5,
		"price": "439.77",
		"tags": "'mini bar', 'balkon', 'more', 'najbolja'",
		"roomCount": 28,
		"freeRoomCount": 6
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f16f"),
		"name": "Primis LLP",
		"bedCount": 1,
		"price": "349.08",
		"tags": "'balkon', 'more'",
		"roomCount": 39,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f143"),
		"name": "Diam Eu Company",
		"bedCount": 4,
		"price": "115.81",
		"tags": "'tv', 'mini bar', 'more'",
		"roomCount": 41,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12e"),
		"name": "Suscipit Nonummy Ltd",
		"bedCount": 2,
		"price": "448.15",
		"tags": "",
		"roomCount": 35,
		"freeRoomCount": 14
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f183"),
		"name": "Sapien LLP",
		"bedCount": 5,
		"price": "379.80",
		"tags": "'more', 'uz plažu', 'pomoćni ležaj', 'balkon'",
		"roomCount": 28,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f16f"),
		"name": "Nec Corporation",
		"bedCount": 3,
		"price": "132.24",
		"tags": "'more', 'pomoćni ležaj'",
		"roomCount": 34,
		"freeRoomCount": 1
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18b"),
		"name": "Arcu Aliquam Institute",
		"bedCount": 5,
		"price": "319.29",
		"tags": "'more'",
		"roomCount": 20,
		"freeRoomCount": 25
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f162"),
		"name": "Consectetuer Adipiscing Elit Incorporated",
		"bedCount": 3,
		"price": "36.55",
		"tags": "",
		"roomCount": 47,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18c"),
		"name": "Suspendisse Institute",
		"bedCount": 3,
		"price": "113.37",
		"tags": "'mini bar'",
		"roomCount": 34,
		"freeRoomCount": 8
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f170"),
		"name": "Morbi Ltd",
		"bedCount": 4,
		"price": "380.91",
		"tags": "'najbolja', 'mini bar', 'tv'",
		"roomCount": 28,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f147"),
		"name": "Dolor Nonummy Corp.",
		"bedCount": 2,
		"price": "431.10",
		"tags": "'mini bar', 'more', 'balkon'",
		"roomCount": 22,
		"freeRoomCount": 7
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f130"),
		"name": "Eros Nec Tellus Consulting",
		"bedCount": 4,
		"price": "409.01",
		"tags": "'najbolja'",
		"roomCount": 16,
		"freeRoomCount": 5
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f172"),
		"name": "Vitae Sodales Nisi Incorporated",
		"bedCount": 1,
		"price": "284.52",
		"tags": "",
		"roomCount": 12,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12d"),
		"name": "Risus Varius Limited",
		"bedCount": 2,
		"price": "41.59",
		"tags": "'tv'",
		"roomCount": 45,
		"freeRoomCount": 14
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f15e"),
		"name": "Quis Pede Praesent LLC",
		"bedCount": 1,
		"price": "393.02",
		"tags": "",
		"roomCount": 12,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f141"),
		"name": "Mauris Non Dui Foundation",
		"bedCount": 2,
		"price": "336.13",
		"tags": "'more', 'uz plažu', 'pomoćni ležaj', 'balkon'",
		"roomCount": 13,
		"freeRoomCount": 21
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f174"),
		"name": "Amet Corp.",
		"bedCount": 5,
		"price": "378.58",
		"tags": "",
		"roomCount": 35,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f13e"),
		"name": "Quis Turpis Vitae Associates",
		"bedCount": 1,
		"price": "130.47",
		"tags": "'tv', 'more', 'balkon', 'mini bar', 'najbolja'",
		"roomCount": 28,
		"freeRoomCount": 12
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f16d"),
		"name": "Mattis Velit Justo Institute",
		"bedCount": 2,
		"price": "424.89",
		"tags": "",
		"roomCount": 30,
		"freeRoomCount": 13
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17d"),
		"name": "Vulputate Nisi Sem LLP",
		"bedCount": 3,
		"price": "27.44",
		"tags": "'uz plažu', 'balkon', 'more', 'pomoćni ležaj', 'najbolja'",
		"roomCount": 39,
		"freeRoomCount": 24
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f133"),
		"name": "At Nisi Foundation",
		"bedCount": 5,
		"price": "52.11",
		"tags": "'pomoćni ležaj'",
		"roomCount": 37,
		"freeRoomCount": 8
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f174"),
		"name": "Feugiat Corp.",
		"bedCount": 5,
		"price": "78.05",
		"tags": "'najbolja', 'mini bar'",
		"roomCount": 15,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f168"),
		"name": "Sed Libero Institute",
		"bedCount": 1,
		"price": "465.09",
		"tags": "'uz plažu'",
		"roomCount": 35,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f187"),
		"name": "Orci Foundation",
		"bedCount": 2,
		"price": "223.16",
		"tags": "'balkon'",
		"roomCount": 50,
		"freeRoomCount": 24
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f188"),
		"name": "Dictum Eu Placerat Institute",
		"bedCount": 5,
		"price": "91.41",
		"tags": "'pomoćni ležaj', 'more', 'najbolja', 'tv', 'uz plažu'",
		"roomCount": 12,
		"freeRoomCount": 19
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f188"),
		"name": "Amet Ultricies Ltd",
		"bedCount": 4,
		"price": "306.16",
		"tags": "'more', 'najbolja', 'uz plažu', 'balkon', 'pomoćni ležaj'",
		"roomCount": 50,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f135"),
		"name": "Quisque Libero Lacus Associates",
		"bedCount": 3,
		"price": "85.08",
		"tags": "",
		"roomCount": 29,
		"freeRoomCount": 17
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f187"),
		"name": "Nisi Magna Sed PC",
		"bedCount": 5,
		"price": "375.09",
		"tags": "'tv'",
		"roomCount": 18,
		"freeRoomCount": 13
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f138"),
		"name": "Vulputate Nisi Sem PC",
		"bedCount": 3,
		"price": "184.46",
		"tags": "'mini bar', 'najbolja', 'more', 'balkon', 'uz plažu'",
		"roomCount": 12,
		"freeRoomCount": 12
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f177"),
		"name": "Lectus Ante Dictum Associates",
		"bedCount": 2,
		"price": "352.49",
		"tags": "'uz plažu', 'najbolja', 'more', 'pomoćni ležaj', 'balkon'",
		"roomCount": 14,
		"freeRoomCount": 19
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f145"),
		"name": "Gravida Nunc Sed Corporation",
		"bedCount": 4,
		"price": "465.39",
		"tags": "'balkon', 'mini bar', 'more'",
		"roomCount": 33,
		"freeRoomCount": 19
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f129"),
		"name": "Interdum Nunc Sollicitudin Inc.",
		"bedCount": 4,
		"price": "451.99",
		"tags": "'tv', 'mini bar'",
		"roomCount": 10,
		"freeRoomCount": 5
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f149"),
		"name": "Eros PC",
		"bedCount": 3,
		"price": "133.74",
		"tags": "'pomoćni ležaj', 'balkon', 'najbolja'",
		"roomCount": 20,
		"freeRoomCount": 20
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18b"),
		"name": "Ultricies Ornare Elit Consulting",
		"bedCount": 2,
		"price": "440.18",
		"tags": "'balkon', 'najbolja', 'tv'",
		"roomCount": 17,
		"freeRoomCount": 18
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f170"),
		"name": "Eget Tincidunt Dui LLC",
		"bedCount": 1,
		"price": "431.73",
		"tags": "'pomoćni ležaj', 'more', 'balkon', 'mini bar'",
		"roomCount": 39,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f13a"),
		"name": "Ac Urna Associates",
		"bedCount": 4,
		"price": "462.99",
		"tags": "",
		"roomCount": 27,
		"freeRoomCount": 18
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f15d"),
		"name": "Aliquam Fringilla Cursus Consulting",
		"bedCount": 4,
		"price": "474.28",
		"tags": "",
		"roomCount": 18,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f170"),
		"name": "Porttitor Institute",
		"bedCount": 2,
		"price": "185.70",
		"tags": "'pomoćni ležaj', 'more', 'tv'",
		"roomCount": 29,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14f"),
		"name": "Ut Inc.",
		"bedCount": 4,
		"price": "252.61",
		"tags": "'more', 'balkon', 'uz plažu', 'pomoćni ležaj', 'najbolja'",
		"roomCount": 26,
		"freeRoomCount": 6
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17e"),
		"name": "Ultrices Posuere Ltd",
		"bedCount": 5,
		"price": "285.26",
		"tags": "'more', 'pomoćni ležaj', 'najbolja', 'tv', 'uz plažu'",
		"roomCount": 41,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f186"),
		"name": "Vestibulum Nec Euismod LLP",
		"bedCount": 5,
		"price": "33.05",
		"tags": "'najbolja', 'balkon', 'mini bar'",
		"roomCount": 19,
		"freeRoomCount": 9
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12f"),
		"name": "Fringilla Incorporated",
		"bedCount": 3,
		"price": "46.30",
		"tags": "",
		"roomCount": 16,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f16a"),
		"name": "Iaculis Enim LLP",
		"bedCount": 5,
		"price": "438.75",
		"tags": "'najbolja', 'pomoćni ležaj', 'tv', 'more', 'balkon'",
		"roomCount": 26,
		"freeRoomCount": 1
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f134"),
		"name": "Nisi Sem Semper Consulting",
		"bedCount": 2,
		"price": "227.80",
		"tags": "'balkon'",
		"roomCount": 41,
		"freeRoomCount": 11
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f16f"),
		"name": "Gravida Institute",
		"bedCount": 4,
		"price": "190.92",
		"tags": "'more', 'pomoćni ležaj', 'balkon'",
		"roomCount": 47,
		"freeRoomCount": 15
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14e"),
		"name": "Fermentum Risus Corp.",
		"bedCount": 5,
		"price": "373.38",
		"tags": "'mini bar', 'tv'",
		"roomCount": 44,
		"freeRoomCount": 18
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f14a"),
		"name": "Mollis Foundation",
		"bedCount": 2,
		"price": "111.17",
		"tags": "",
		"roomCount": 22,
		"freeRoomCount": 3
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f162"),
		"name": "Risus Donec Corporation",
		"bedCount": 4,
		"price": "420.78",
		"tags": "'tv', 'uz plažu', 'mini bar', 'balkon'",
		"roomCount": 39,
		"freeRoomCount": 16
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f159"),
		"name": "Sed Limited",
		"bedCount": 4,
		"price": "372.86",
		"tags": "'uz plažu', 'mini bar', 'tv'",
		"roomCount": 12,
		"freeRoomCount": 20
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f177"),
		"name": "Eget Lacus Mauris Associates",
		"bedCount": 5,
		"price": "199.82",
		"tags": "'najbolja', 'tv', 'mini bar'",
		"roomCount": 43,
		"freeRoomCount": 12
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18a"),
		"name": "Nulla LLC",
		"bedCount": 4,
		"price": "137.94",
		"tags": "'pomoćni ležaj', 'balkon', 'uz plažu', 'najbolja', 'more'",
		"roomCount": 32,
		"freeRoomCount": 15
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f136"),
		"name": "Suspendisse Aliquet Sem Inc.",
		"bedCount": 5,
		"price": "111.32",
		"tags": "'najbolja', 'more', 'pomoćni ležaj', 'tv', 'mini bar'",
		"roomCount": 12,
		"freeRoomCount": 4
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f156"),
		"name": "Sapien Institute",
		"bedCount": 4,
		"price": "204.86",
		"tags": "",
		"roomCount": 24,
		"freeRoomCount": 23
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f13b"),
		"name": "At Iaculis Associates",
		"bedCount": 4,
		"price": "211.79",
		"tags": "'balkon'",
		"roomCount": 36,
		"freeRoomCount": 10
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f17c"),
		"name": "Rhoncus Proin Corporation",
		"bedCount": 1,
		"price": "402.38",
		"tags": "'tv', 'najbolja', 'balkon'",
		"roomCount": 29,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18c"),
		"name": "Malesuada Fames Ac PC",
		"bedCount": 4,
		"price": "115.89",
		"tags": "'mini bar'",
		"roomCount": 22,
		"freeRoomCount": 2
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f184"),
		"name": "Molestie Arcu Consulting",
		"bedCount": 4,
		"price": "232.63",
		"tags": "'najbolja', 'balkon'",
		"roomCount": 42,
		"freeRoomCount": 22
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f12d"),
		"name": "Molestie Arcu Limited",
		"bedCount": 1,
		"price": "112.65",
		"tags": "",
		"roomCount": 27,
		"freeRoomCount": 24
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f137"),
		"name": "Laoreet Ipsum Curabitur Industries",
		"bedCount": 4,
		"price": "65.78",
		"tags": "'mini bar', 'tv', 'balkon'",
		"roomCount": 26,
		"freeRoomCount": 6
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f161"),
		"name": "Quam Dignissim Pharetra Associates",
		"bedCount": 2,
		"price": "426.65",
		"tags": "'tv', 'more', 'balkon'",
		"roomCount": 26,
		"freeRoomCount": 23
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f18a"),
		"name": "Orci Consectetuer Euismod Foundation",
		"bedCount": 4,
		"price": "236.10",
		"tags": "'mini bar'",
		"roomCount": 14,
		"freeRoomCount": 14
	},
	{
		"hotelId": ObjectId("58e983a583e3c33c8af6f132"),
		"name": "Molestie Tellus Aenean Company",
		"bedCount": 3,
		"price": "222.90",
		"tags": "'pomoćni ležaj', 'balkon', 'tv'",
		"roomCount": 24,
		"freeRoomCount": 6
	}
]);


/*
db.hotels.aggregate([
    {
      $lookup:
        {
          from: "rooms",
          localField: "_id",
          foreignField: "hotelId",
          as: "rooms"
        }
   },
   {
      $match: { "_id": ObjectId("58e983a583e3c33c8af6f132") }
   }
]);
*/