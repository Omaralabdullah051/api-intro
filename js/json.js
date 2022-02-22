//Javascript Object Notation
//JSON
const user = { id: 11, name: 'Gorib amir', job: 'actor' };
// console.log(user);
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);