const obj = {
  name: 'Yosef',
  items: ['clock', 'phone'],
  actions: {
    run: {
      speed: 100,
    },
    sleep: 8,
    mood: 'Happy',
  },
  other: true,
};

// console.log(obj);
console.log(obj['actions']['run']['speed']);
console.log(obj.actions.run.speed);
console.log(obj.items[1]);
console.log(obj.actions.sleep);

// object with key --> value (function)
const output = {
  message: function (msg) {
    return 'Output: ' + msg;
  },
  valid: true,
  other: 'This is output',
};

console.log(output.message('Yosef'));
