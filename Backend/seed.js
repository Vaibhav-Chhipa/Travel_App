require('dotenv').config();
const mongoose     = require('mongoose');
const Destination  = require('./models/Destination');
const TourPackage  = require('./models/Package');

const destinations = [
  {
    name: 'Jammu & Kashmir',
    state: 'Jammu & Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
  {
    name: 'Himachal Pradesh',
    state: 'Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
  {
    name: 'Goa',
    state: 'Goa',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
  {
    name: 'Assam',
    state: 'Assam',
    imageUrl: 'https://images.unsplash.com/photo-1615472910606-9d4f7291944f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
  {
    name: 'Maharashtra',
    state: 'Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1585889574476-af7bcb00d9c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
  {
    name: 'Kerala',
    state: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    priceFrom: 4999,
  },
];


const packages = [
  {
    title: 'Golden Temple Tour',
    slug: 'golden-temple',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 9999,
    days: 3,
    sold: 132,
  },
  {
    title: 'Amazing Kerala Tour',
    slug: 'amazing-kerala',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730430306-7c8d36cb3722?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 14999,
    days: 5,
    sold: 178,
  },
  {
    title: 'Kashmir Holiday Tour',
    slug: 'kashmir-holiday',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 18999,
    days: 6,
    sold: 201,
  },
  {
    title: 'Rajasthan Tour',
    slug: 'rajasthan',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 19999,
    days: 5,
    sold: 97,
  },
  {
    title: 'Trip to Goa',
    slug: 'goa-trip',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 8999,
    days: 4,
    sold: 254,
  },
  {
    title: 'Nainital Escape',
    slug: 'nainital',
    imageUrl: 'https://images.unsplash.com/photo-1712201649803-ab1b13dae600?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 10999,
    days: 3,
    sold: 110,
  },
];


(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Destination.deleteMany();
    await TourPackage.deleteMany();
    await Destination.insertMany(destinations);
    await TourPackage.insertMany(packages);
    console.log('Database seeded 🌱');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
