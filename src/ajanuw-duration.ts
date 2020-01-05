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
export class Duration {
  static readonly microsecondsPerMillisecond: number = 1000;

  static readonly millisecondsPerSecond: number = 1000;
  static readonly secondsPerMinute: number = 60;
  static readonly minutesPerHour: number = 60;
  static readonly hoursPerDay: number = 24;

  static readonly microsecondsPerSecond: number =
    Duration.microsecondsPerMillisecond * Duration.millisecondsPerSecond;
  static readonly microsecondsPerMinute: number =
    Duration.microsecondsPerSecond * Duration.secondsPerMinute;
  static readonly microsecondsPerHour: number =
    Duration.microsecondsPerMinute * Duration.minutesPerHour;
  static readonly microsecondsPerDay: number =
    Duration.microsecondsPerHour * Duration.hoursPerDay;

  static readonly millisecondsPerMinute: number =
    Duration.millisecondsPerSecond * Duration.secondsPerMinute;
  static readonly millisecondsPerHour: number =
    Duration.millisecondsPerMinute * Duration.minutesPerHour;
  static readonly millisecondsPerDay: number =
    Duration.millisecondsPerHour * Duration.hoursPerDay;

  static readonly secondsPerHour: number =
    Duration.secondsPerMinute * Duration.minutesPerHour;
  static readonly secondsPerDay: number =
    Duration.secondsPerHour * Duration.hoursPerDay;

  static readonly minutesPerDay: number =
    Duration.minutesPerHour * Duration.hoursPerDay;

  // static readonly  zero:Duration = Duration(seconds: 0);

  /*
   * 此Duration对象的值，以微秒为单位。
   */
  private _duration: number = 0;

  constructor(options: DurationInterface) {
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

  static _microseconds(duration: number): Duration {
    const d = new Duration({});
    d._duration = duration;
    return d;
  }

  /**
   * * +
   * @param a
   * @param b
   */
  add(other: Duration): Duration {
    return Duration._microseconds(this._duration + other._duration);
  }

  /**
   * * -
   * @param a
   * @param b
   */
  sub(other: Duration): Duration {
    return Duration._microseconds(this._duration - other._duration);
  }

  /**
   * * \*
   * @param a
   * @param b
   */
  mult(factor: number): Duration {
    return Duration._microseconds(Math.round(this._duration * factor));
  }

  /**
   * * \/
   * @param a
   * @param b
   */
  div(quotient: number): Duration {
    if (quotient === 0) throw Error("Infinity");
    return Duration._microseconds(Math.floor(this._duration / quotient));
  }

  /**
   * * abs
   * @param a
   * @param b
   */
  abs(): Duration {
    return Duration._microseconds(Math.abs(this._duration));
  }

  operator(
    key: "<" | ">" | "<=" | ">=" | "==" | "===",
    other: Duration
  ): boolean {
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

  get inDays(): number {
    return Math.floor(this._duration / Duration.microsecondsPerDay);
  }
  get inHours(): number {
    return Math.floor(this._duration / Duration.microsecondsPerHour);
  }
  get inMinutes(): number {
    return Math.floor(this._duration / Duration.microsecondsPerMinute);
  }
  get inSeconds(): number {
    return Math.floor(this._duration / Duration.microsecondsPerSecond);
  }
  get inMilliseconds(): number {
    return Math.floor(this._duration / Duration.microsecondsPerMillisecond);
  }
  get inMicroseconds(): number {
    return this._duration;
  }

  /**
   * 0 | <0 | >0
   * @param other
   */
  compareTo(other: Duration): number {
    return other._duration - this._duration;
  }

  toString(): string {
    function sixDigits(n: number): string {
      if (n >= 100000) return `${n}`;
      if (n >= 10000) return `0${n}`;
      if (n >= 1000) return `00${n}`;
      if (n >= 100) return `000${n}`;
      if (n >= 10) return `0000${n}`;
      return `00000${n}`;
    }

    function twoDigits(n: number): string {
      if (n >= 10) return `${n}`;
      return `0${n}`;
    }

    if (this.inMicroseconds < 0) {
      return "-${-this}";
    }
    const twoDigitMinutes: string = twoDigits(
      this.inMinutes % Duration.minutesPerHour
    );
    const twoDigitSeconds: string = twoDigits(
      this.inSeconds % Duration.secondsPerMinute
    );
    const sixDigitUs: string = sixDigits(
      this.inMicroseconds % Duration.microsecondsPerSecond
    );
    return `${this.inHours}:${twoDigitMinutes}:${twoDigitSeconds}.${sixDigitUs}`;
  }

  /**
   * * Returns whether this `Duration` is negative.
   */
  get isNegative(): boolean {
    return this._duration < 0;
  }

  /**
   * * 10 -> -10
   */
  negated(): Duration {
    return Duration._microseconds(0 - this._duration);
  }
}
