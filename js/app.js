
    const names=prompt("Enter your name:")

class iBank {
    constructor(currentBalance = 0) {
        this.currentBalance = currentBalance
    }
    deposit(a) {
        this.currentBalance += a
    }
    withdraw(b) {
        if (this.currentBalance - b <= 0) {
            console.log(`your balance:$${this.currentBalance}`)
            alert(" tor tk ni !!!!!!!")
            return
        }
        this.currentBalance -= b
    }
}
const imam = new iBank(0)

const input = document.getElementById('input')
const output = document.getElementById('output')
const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')

deposit.addEventListener("click", function () {
    const dValue = Number(input.value)
    const name = names

    imam.deposit(dValue)
    output.innerHTML = `${name.toUpperCase()} Your Balance $${imam.currentBalance}`
})
withdraw.addEventListener("click", function () {
    const dValue = Number(input.value)
    const name = names
    imam.withdraw(dValue)
    output.innerHTML = `${name.toUpperCase()} Your Balance $${imam.currentBalance}`
})