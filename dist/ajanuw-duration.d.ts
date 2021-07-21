interface DurationInterface {
    readonly days?: number;
    readonly hours?: number;
    readonly minutes?: number;
    readonly seconds?: number;
    readonly milliseconds?: number;
    readonly microseconds?: number;
}
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
    add(other: Duration): Duration;
    sub(other: Duration): Duration;
    mult(factor: number): Duration;
    div(quotient: number): Duration;
    abs(): Duration;
    operator(key: "<" | ">" | "<=" | ">=" | "==" | "===", other: Duration): boolean;
    get inDays(): number;
    get inHours(): number;
    get inMinutes(): number;
    get inSeconds(): number;
    get inMilliseconds(): number;
    get inMicroseconds(): number;
    compareTo(other: Duration): number;
    toString(): string;
    get isNegative(): boolean;
    negated(): Duration;
}
export {};
//# sourceMappingURL=ajanuw-duration.d.ts.map