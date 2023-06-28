class account
{
    acc_id;
    acc_name;
    acc_loc;
    constructor(id,name,loc)
    {
        this.acc_id=id;
        this.acc_name=name;
        this.acc_loc=loc;
    }

}
class sa extends account
{
min_balance=500;
acc_bal=0;
constructor(id,name,loc,amount)
{
super(id,name,loc);

this.acc_bal=amount;
}
calculate()
{
    return this.acc_bal-this.min_balance;
}
}
let sa1=new sa(101,"yashwanth","bangalore",15000)
console.log(sa1);
let b=sa1.calculate();
console.log(b);


class ca extends account
{
min_balance=25000;
acc_bal=0;
constructor(id,name,loc,amount)
{
    super(id,name,loc)
    this.acc_bal=amount;
    
} 
calculate()
{
    return this.acc_bal-this.min_balance;
}
}
let ca1=new ca(101,"yashwanth","bangalore",50000);
console.log(ca1);
console.log(ca1.calculate());
