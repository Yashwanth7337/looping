class emp{
    balence_amt=500;
    account_open()
    {
        console.log("account open successfull");
    }
    account_balance()
    {
        console.log("account balance successfull");

    }
    amount_withdraw()
    {
        console.log("amount withdraw successfull");
        
    }
    set_amount()
    {
        console.log("amount credited");

    }
    get_stat()
    {
        console.log("50 rs ");
    }
    account_close()
    {
        
    
            console.log("account close successfully");
        
    }


}
let e1=new emp();
e1.account_open();
e1.account_balance();
e1.amount_withdraw();
e1.set_amount();
e1.get_stat();
e1.account_close();
console.log(e1);