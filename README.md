# ajanuw-duration

 * 模拟[Dart]的[Duration]
 
 ## Install
 ```
 λ npm i ajanuw-duration -S
 ```

 ## Usage
 ```html
<script src="../dist/ajanuw-duration.js"></script>
<script>
    const { Duration } = AjanuwDuration;
    const d = new Duration({ days: 1 });
    console.log(d.inHours); // 24

    let d2 = d.add(new Duration({ hours: 3, seconds: 10 }));
    console.log(d2.toString()); /// 27:00:10.000000
</script>
 ```
 ---
 
 See also:
 
 https://api.dartlang.org/dev/2.0.0-dev.69.0/dart-core/Duration-class.htm