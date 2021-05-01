import ApiClient from '@src/ApiClient';

const example = async () => {
  const result = await (new ApiClient({})).get('https://google.com');
  return result;
}

console.log(example());