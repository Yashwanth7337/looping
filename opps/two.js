class simpleintrest
{  
    Principleamount=0;
    time;
    rateofintrest;
    constructor(p,t,r)
    {
        this.p=this.principleamount;
        this.time=this.time;
        this.rateofintrest=this.rateofintrest;
    }
    calculaterate(p,t,r)
    {
        (this.p*this.time*this.rateofintrest)/100;
    
    }
}
let si=new simpleintrest();
console.log(si.calculaterate(10000,2,10));

