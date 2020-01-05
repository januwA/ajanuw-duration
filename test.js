const { Duration } = require('./dist/ajanuw-duration');
const d = new Duration({ days: 1 });
console.log(d.inHours); // 24

let d2 = d.add(new Duration({ hours: 3, seconds: 10 }));
console.log(d2.toString()); /// 27:00:10.000000