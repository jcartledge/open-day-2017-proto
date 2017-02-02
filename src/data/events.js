import faker from 'faker';

const size = 200;
const events = Array(size).fill(0).map(fakeEvent);

function fakeEvent () {
  return {
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: faker.image.image(300, 200),
    link: faker.internet.url
  };
}

export default events;
