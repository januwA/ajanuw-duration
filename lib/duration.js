"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * * 模拟[Dart]的[Duration]
 *
 * ## Example
 *
 * ```ts
 * const d = new Duration({ days: 1 });
 * console.log(d.inHours); // 24
 *
 * let d2 = d.add(new Duration({ hours: 3, seconds: 10 }));
 * console.log(d2.toString()); /// 27:00:10.000000
 * ```
 * ---
 *
 * See also:
 *
 * https://api.dartlang.org/dev/2.0.0-dev.69.0/dart-core/Duration-class.html
 */
class Duration {
    constructor(options) {
        // static readonly  zero:Duration = Duration(seconds: 0);
        /*
         * 此Duration对象的值，以微秒为单位。
         */
        this._duration = 0;
        const days = options.days || 0;
        const hours = options.hours || 0;
        const minutes = options.minutes || 0;
        const seconds = options.seconds || 0;
        const milliseconds = options.milliseconds || 0;
        const microseconds = options.microseconds || 0;
        this._duration =
            Duration.microsecondsPerDay * days +
                Duration.microsecondsPerHour * hours +
                Duration.microsecondsPerMinute * minutes +
                Duration.microsecondsPerSecond * seconds +
                Duration.microsecondsPerMillisecond * milliseconds +
                microseconds;
    }
    static _microseconds(duration) {
        const d = new Duration({});
        d._duration = duration;
        return d;
    }
    /**
     * * +
     * @param a
     * @param b
     */
    add(other) {
        return Duration._microseconds(this._duration + other._duration);
    }
    /**
     * * -
     * @param a
     * @param b
     */
    sub(other) {
        return Duration._microseconds(this._duration - other._duration);
    }
    /**
     * * \*
     * @param a
     * @param b
     */
    mult(factor) {
        return Duration._microseconds(Math.round(this._duration * factor));
    }
    /**
     * * \/
     * @param a
     * @param b
     */
    div(quotient) {
        if (quotient === 0)
            throw Error("Infinity");
        return Duration._microseconds(Math.floor(this._duration / quotient));
    }
    /**
     * * abs
     * @param a
     * @param b
     */
    abs() {
        return Duration._microseconds(Math.abs(this._duration));
    }
    operator(key, other) {
        switch (key) {
            case "<":
                return this._duration < other._duration;
            case ">":
                return this._duration > other._duration;
            case "<=":
                return this._duration <= other._duration;
            case ">=":
                return this._duration >= other._duration;
            case "==":
                return this._duration == other._duration;
            case "===":
                return this._duration === other._duration;
        }
    }
    get inDays() {
        return Math.floor(this._duration / Duration.microsecondsPerDay);
    }
    get inHours() {
        return Math.floor(this._duration / Duration.microsecondsPerHour);
    }
    get inMinutes() {
        return Math.floor(this._duration / Duration.microsecondsPerMinute);
    }
    get inSeconds() {
        return Math.floor(this._duration / Duration.microsecondsPerSecond);
    }
    get inMilliseconds() {
        return Math.floor(this._duration / Duration.microsecondsPerMillisecond);
    }
    get inMicroseconds() {
        return this._duration;
    }
    /**
     * 0 | <0 | >0
     * @param other
     */
    compareTo(other) {
        return other._duration - this._duration;
    }
    toString() {
        function sixDigits(n) {
            if (n >= 100000)
                return `${n}`;
            if (n >= 10000)
                return `0${n}`;
            if (n >= 1000)
                return `00${n}`;
            if (n >= 100)
                return `000${n}`;
            if (n >= 10)
                return `0000${n}`;
            return `00000${n}`;
        }
        function twoDigits(n) {
            if (n >= 10)
                return `${n}`;
            return `0${n}`;
        }
        if (this.inMicroseconds < 0) {
            return "-${-this}";
        }
        const twoDigitMinutes = twoDigits(this.inMinutes % Duration.minutesPerHour);
        const twoDigitSeconds = twoDigits(this.inSeconds % Duration.secondsPerMinute);
        const sixDigitUs = sixDigits(this.inMicroseconds % Duration.microsecondsPerSecond);
        return `${this.inHours}:${twoDigitMinutes}:${twoDigitSeconds}.${sixDigitUs}`;
    }
    /**
     * * Returns whether this `Duration` is negative.
     */
    get isNegative() {
        return this._duration < 0;
    }
    /**
     * * 10 -> -10
     */
    negated() {
        return Duration._microseconds(0 - this._duration);
    }
}
exports.Duration = Duration;
Duration.microsecondsPerMillisecond = 1000;
Duration.millisecondsPerSecond = 1000;
Duration.secondsPerMinute = 60;
Duration.minutesPerHour = 60;
Duration.hoursPerDay = 24;
Duration.microsecondsPerSecond = Duration.microsecondsPerMillisecond * Duration.millisecondsPerSecond;
Duration.microsecondsPerMinute = Duration.microsecondsPerSecond * Duration.secondsPerMinute;
Duration.microsecondsPerHour = Duration.microsecondsPerMinute * Duration.minutesPerHour;
Duration.microsecondsPerDay = Duration.microsecondsPerHour * Duration.hoursPerDay;
Duration.millisecondsPerMinute = Duration.millisecondsPerSecond * Duration.secondsPerMinute;
Duration.millisecondsPerHour = Duration.millisecondsPerMinute * Duration.minutesPerHour;
Duration.millisecondsPerDay = Duration.millisecondsPerHour * Duration.hoursPerDay;
Duration.secondsPerHour = Duration.secondsPerMinute * Duration.minutesPerHour;
Duration.secondsPerDay = Duration.secondsPerHour * Duration.hoursPerDay;
Duration.minutesPerDay = Duration.minutesPerHour * Duration.hoursPerDay;
//# sourceMappingURL=duration.js.map