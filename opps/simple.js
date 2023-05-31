class simpleintrest
{
    principle_amount=0;
    time_p;
    rate_i;
    constructor(amount,time,rate)
    {
        this.amount=amount;
        this.time=time;
       this.rate=rate;
    }
    calculate_si(principle_amount,time_p,rate_i)
    {
        return (principle_amount*time_p*rate_i)/100;
    }
}
let si=new simpleintrest();
console.log("simple interst is:"+si.calculate_si(10000,2,10));