export class Workday {
    workDayDate?: Date;
    branch?: string;
    extraHours?: number;
    promoter?: string;
    hasAfterDelay?: any;
    afterDelayTime?: any;
    hasCheckedStartHour?: boolean;
    hasCheckedEndHour?: boolean;
    isDayOff?: boolean;
    startCheckTime?: any;
    endHourCheckTime?: any;
    promoterLocationLat?: number;
    promoterLocationLng?: number;
    hasReport?: boolean;
    reportuid?: string;
    hasBeenAbsent: boolean;
    absentyReport: string;
}