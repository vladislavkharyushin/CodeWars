//DESCRIPTION:
//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
//You can use if..else or ternary operator to complete it.

//SOLUTION:

saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);