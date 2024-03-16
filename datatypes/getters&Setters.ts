class Incident{
    #incidentNumber:number;
    protected incidentName:string;
    incidentId:number;

    constructor(incidentNumber:number,incidentName:string,incidentId:number){
        this.#incidentNumber = incidentNumber;
        this.incidentName = incidentName;
        this.incidentId = incidentId;
    }


    get incident():number{
        return this.#incidentNumber;
    }

    set incidentNumber(incNumber:number){
        this.#incidentNumber = incNumber;
    }

    


}

//How to use the above:

let fraud = new Incident(1,"Fraud",1)

//Setting the variable
fraud.incidentNumber = 2;

//Getting the variable

fraud.incident;
