const data = [{ name: 'lorem' }, { name: 'eliseo' }, { name: 'yosef' }];

const names = data.map((obj, i) => `${obj.name}-${i}`);

console.log(names);
console.log(data);
