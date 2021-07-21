const { Duration } = require("./dist/ajanuw-duration");
const d = new Duration({ days: 1 });
console.log(d.inHours); // 24

let d2 = d.add(new Duration({ hours: 3, seconds: 10 }));
console.log(d2.toString()); /// 27:00:10.000000

let date1 = new Duration({ minutes: 19, seconds: 20 });

// 毫秒
console.log(date1.inMilliseconds);

// 微秒
console.log(date1.inMicroseconds);
