// Discord epoch (2015-01-01T00:00:00.000Z)
const EPOCH = 1420070400000;
let INCREMENT = 0;

export class SnowflakeUtil {
    static generate(timestamp: Date | number): string {
        if (timestamp instanceof Date) timestamp = timestamp.getTime();
        if (typeof timestamp !== 'number' || isNaN(timestamp)) {
            throw new TypeError(
                `"timestamp" argument must be a number (received ${isNaN(timestamp) ? 'NaN' : typeof timestamp})`,
            );
        }
        if (INCREMENT >= 4095) INCREMENT = 0;
        const BINARY = `${(timestamp - EPOCH).toString(2).padStart(42, '0')}0000100000${(INCREMENT++)
                .toString(2)
                .padStart(12, '0')}`;
            return this.binaryToID(BINARY);
    }

    static deconstruct(snowflake: string): DeconstructedSnowflake {
        const BINARY = this.idToBinary(snowflake)
            .toString(2)
            .padStart(64, '0');
        const res = {
            timestamp: parseInt(BINARY.substring(0, 42), 2) + EPOCH,
            workerID: parseInt(BINARY.substring(42, 47), 2),
            processID: parseInt(BINARY.substring(47, 52), 2),
            increment: parseInt(BINARY.substring(52, 64), 2),
            binary: BINARY,
        };
        const decSnowflake = new DeconstructedSnowflake(
            res.timestamp,
            res.workerID,
            res.processID,
            res.increment,
            res.binary
        );
        return decSnowflake;
    }

    static binaryToID(number: string): string {
        let dec = '';

        while (number.length > 50) {
            const high = parseInt(number.slice(0, -32), 2);
            const low = parseInt((high % 10).toString(2) + number.slice(-32), 2);

            dec = (low % 10).toString() + dec;
            number = Math.floor(high / 10).toString(2) +
                    Math.floor(low / 10)
                        .toString(2)
                        .padStart(32, '0');
        }

        let num = parseInt(number, 2);
        while (num > 0) {
            dec = (num % 10).toString() + dec;
            num = Math.floor(num /10);
        }

        return dec;
    }

    static idToBinary(num: any): number {
        let bin = '';
        let high = parseInt(num.slice(0, -10)) || 0;
        let low = parseInt(num.slice(-10));
        while (low > 0 || high > 0) {
          bin = String(low & 1) + bin;
          low = Math.floor(low / 2);
          if (high > 0) {
            low += 5000000000 * (high % 2);
            high = Math.floor(high / 2);
          }
        }
        return parseInt(bin);
      }
}

export class DeconstructedSnowflake {
    private timestamp: number;
    private date: Date;
    private internalWorkerID: number;
    private internalProcessID: number;
    private increment: number;
    private binary: string;

    constructor(
        timestamp: number, 
        internalWorkerID: number,
        internalProcessID: number,
        increment: number,
        binary: string) 
    {
        this.timestamp = timestamp,
        this.date = new Date(timestamp),
        this.internalWorkerID = internalWorkerID,
        this.internalProcessID = internalProcessID,
        this.increment = increment,
        this.binary = binary
    }
}