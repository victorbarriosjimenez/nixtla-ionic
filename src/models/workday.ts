// Workday representa una jornada trabajada por un promotor
export class Workday {
    uid?: string; // Id de la jorndada
    event?: string; // Id del evento 
    workDayDate?: Date; // Fecha de la jornada
    branch?: string;    // Id de la sucursal
    extraHours?: number; // horas extra
    promoter?: string; // Id promotor
    hasAfterDelay?: boolean; // Registro booleano de retardo 
    afterDelayTime?: any; // Tiempo de retardo
    hasCheckedStartHour?: boolean; // Chequeo de inicio
    hasCheckedEndHour?: boolean; // Chequeo de fin 
    isDayOff?: boolean; // Indicador de dia libre
    startCheckTime?: any; //Hora de llegada
    endHourCheckTime?: any; //Hora de salida
    hasReport?: boolean; // Booleano de reporte 
    reportuid?: string; // Id del reporte 
    hasBeenAbsent?: boolean; // Registro de inasistencia 
    absentyReport?: string; // Id del reporte de inasistencia
    isWorkdayCompleted?: boolean; // Jornada completada 
}