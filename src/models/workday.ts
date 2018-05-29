export class Workday {
    uid?: string;
    event?: string;
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
    hasReport?: boolean;
    reportuid?: string;
    hasBeenAbsent?: boolean;
    absentyReport?: string;
}