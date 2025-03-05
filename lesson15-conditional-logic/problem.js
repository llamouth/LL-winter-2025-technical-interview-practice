// Prompt for Lemonade Change
// You are running a lemonade stand and decide to sell lemonade for $5 per cup.
// Customers will be paying with either a $5 bill, a $10 bill, or a $20 bill.
// You need to provide the correct change to each customer.
// Return true if you can provide change to every customer, otherwise return false.

function canProvideChange(bills) {
    const bank = {5:0, 10:0, 20:0}

    for (const bill of bills) {
    
        if (bill == 5) {
            bank[bill]++
        } else if (bill == 10) {
            if (bank[5] >= 1) {
                bank[bill]++
                bank[5]--
            } else {
                return false
            }
        } else {
            if (bank[10] >= 1 && bank[5] >= 1) {
                bank[bill]++
                bank[10]--
                bank[5]--
            } else if (bank[5] >= 3) {
                bank[bill]++
                bank[5] -= 3
            } else {
                return false
            }
        }
    }

    return true
}

module.exports = canProvideChange;
