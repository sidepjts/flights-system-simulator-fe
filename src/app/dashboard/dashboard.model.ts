export interface ApiResponse {
    meta: {};
    arrivals: Arrivals[];
    departures: Departures[];
}

export interface Arrivals {
    flight: number,
    source: string,
    scheduledTime: any,
    estimatedTime: any,
    actualTime: any | null;
    status: string;
}

export interface Departures {
    flight: number,
    destination: string,
    scheduledTime: any,
    estimatedTime: any,
    actualTime: any | null;
    status: string;
}
