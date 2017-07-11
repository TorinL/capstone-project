'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('homes').insert([
      {
        id: 1,
        location: 'Ballard',
        address: '3612 NW 60th St.',
        zip_code: '98107',
        img_url: 'https://www.homepower.com/sites/default/files/styles/featured_hero/public/articles/images/HP177-36a-Magwood.jpg?itok=NsPsovL1',
        square_footage: '1,870 sqft':
        bedrooms: '3',
        bathrooms: '2',
        value: 1025000,
        user_id: 1,
      },
      {
        id: 2,
        location: 'Ballard',
        address: '3438 NW 64th St',
        zip_code: '98107',
        img_url: 'https://photos.zillowstatic.com/p_e/IS6qfjr3o1ij3a1000000000.jpg',
        square_footage: '1,700 sqft':
        bedrooms: '3',
        bathrooms: '2',
        value: 995000,
        user_id: 2,
      },
      {
        id: 3,
        location: 'Ballard',
        address: '7541 32nd Ave NW',
        zip_code: '98117',
        img_url: 'https://s3.amazonaws.com/tourvista.com/property-media/500/597/f597_1355522751_805492.jpg',
        square_footage: '2,120 sqft':
        bedrooms: '4',
        bathrooms: '1',
        value: 786000,
        user_id: 4,
      },
      {
        id: 4,
        location: 'Ballard',
        address: '7706 28th Ave NW',
        zip_code: '98117',
        img_url: 'http://theinspiredroom.net/wp-content/uploads/2015/08/Seattle-House.jpg',
        square_footage: '840 sqft':
        bedrooms: '2',
        bathrooms: '1',
        value: 680000,
        user_id: 5,
      },
      {
        id: 5,
        location: 'Ballard',
        address: '7001 21st Ave NW',
        zip_code: '98117',
        img_url: 'http://www.bnbfinder.com/innImages/75153.jpg',
        square_footage: '2,040 sqft',
        bedrooms: '4',
        bathrooms: '2',
        value: 909500,
        user_id: 8,
      },
      {
        id: 6,
        location: 'Ballard',
        address: '1727 NW 63rd St',
        zip_code: '98107',
        img_url: '',
        square_footage: '1,960 sqft':
        bedrooms: '3',
        bathrooms: '3',
        value: 906000,
        user_id: 10,
      },
      {
        id: 7,
        location: 'Queen Anne',
        address: '22 Howe St',
        zip_code: '98109',
        img_url: 'http://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/7/1/0/CI-Valspar_ivory-white-and-aqua-home-exterior.jpg.rend.hgtvcom.616.462.jpeg',
        square_footage: '2,825 sqft':
        bedrooms: '3',
        bathrooms: '2',
        value: 2350000,
        user_id: 11,
      },
      {
        id: 8,
        location: 'Queen Anne',
        address: '1512 3rd Ave W',
        zip_code: '98119',
        img_url: 'https://photos.zillowstatic.com/p_e/IS2bxb0478l9h81000000000.jpg',
        square_footage: '1,410 sqft':
        bedrooms: '3',
        bathrooms: '1',
        value: 980000,
        user_id: 12,
      },
      {
        id: 9,
        location: 'Queen Anne',
        address: '3442 14th Ave W',
        zip_code: '98119',
        img_url: 'http://www.contemporist.com/photos/seattle_mod_360_01.jpg',
        square_footage: '3,390 sqft':
        bedrooms: '5',
        bathrooms: '4',
        value: 1300000,
        user_id: 13,
      },
      {
        id: 10,
        location: 'Queen Anne',
        address: '706 W Cremona St',
        zip_code: '98119',
        img_url: 'http://i2.cdn.turner.com/money/dam/assets/161017142146-trump-queens-home-exterior-780x439.jpg',
        square_footage: '1,730 sqft':
        bedrooms: '3',
        bathrooms: '2',
        value: 950000,
        user_id: 14,
      },
      {
        id: 11,
        location: 'Queen Anne',
        address: '2018 12th Ave W',
        zip_code: '98119',
        img_url: 'https://www.amerifirst.com/hubfs/images/blog_images_2016/2016-real-estate-trends-attitudes-among-millennial-home-buyers_1.jpg',
        square_footage: '1,440':
        bedrooms: '3',
        bathrooms: '2.5',
        value: 757000,
        user_id: 15,
      },
    ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('homes_id_seq', (SELECT MAX(id) FROM homes));"
      )
    })
};
