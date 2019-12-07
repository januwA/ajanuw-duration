interface DurationInterface {
    readonly days?: number;
    readonly hours?: number;
    readonly minutes?: number;
    readonly seconds?: number;
    readonly milliseconds?: number;
    readonly microseconds?: number;
}
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
export declare class Duration {
    static readonly microsecondsPerMillisecond: number;
    static readonly millisecondsPerSecond: number;
    static readonly secondsPerMinute: number;
    static readonly minutesPerHour: number;
    static readonly hoursPerDay: number;
    static readonly microsecondsPerSecond: number;
    static readonly microsecondsPerMinute: number;
    static readonly microsecondsPerHour: number;
    static readonly microsecondsPerDay: number;
    static readonly millisecondsPerMinute: number;
    static readonly millisecondsPerHour: number;
    static readonly millisecondsPerDay: number;
    static readonly secondsPerHour: number;
    static readonly secondsPerDay: number;
    static readonly minutesPerDay: number;
    private _duration;
    constructor(options: DurationInterface);
    static _microseconds(duration: number): Duration;
    /**
     * * +
     * @param a
     * @param b
     */
    add(other: Duration): Duration;
    /**
     * * -
     * @param a
     * @param b
     */
    sub(other: Duration): Duration;
    /**
     * * \*
     * @param a
     * @param b
     */
    mult(factor: number): Duration;
    /**
     * * \/
     * @param a
     * @param b
     */
    div(quotient: number): Duration;
    /**
     * * abs
     * @param a
     * @param b
     */
    abs(): Duration;
    operator(key: "<" | ">" | "<=" | ">=" | "==" | "===", other: Duration): boolean;
    get inDays(): number;
    get inHours(): number;
    get inMinutes(): number;
    get inSeconds(): number;
    get inMilliseconds(): number;
    get inMicroseconds(): number;
    /**
     * 0 | <0 | >0
     * @param other
     */
    compareTo(other: Duration): number;
    toString(): string;
    /**
     * * Returns whether this `Duration` is negative.
     */
    get isNegative(): boolean;
    /**
     * * 10 -> -10
     */
    negated(): Duration;
}
export {};
