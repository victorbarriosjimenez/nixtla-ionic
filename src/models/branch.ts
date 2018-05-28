export interface Branch { 
    uid?: string;
    name?: string;
    city?: string;
    state?: string;
    supervisorMin?: number;
    promoters?: number;
    supervisors?: number;
    supervisorMax?: number;     
    promotersMin?: number;
    promotersMax?: number;           
    address1?: string;     
    address2?: string;
    postalCode?: string;
    contact?: string;
    contactEmail?: string;     
    scheduleMonFriOpen?: string; 
    scheduleMonFriClose?: string;         
    scheduleSatOpen?: string;
    scheduleSatClose?: string;        
    scheduleSunOpen?: string; 
    scheduleSunClose?: string;      
    details?: string;
    image?: string;
    extraHours?: number;
    coordinatesLat?: number;
    coordinatesLng?: number;
}