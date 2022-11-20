/**
 * Problem Statement

   Create an expense sharing application. 

   An expense sharing application is where you can add your expenses and split it among different people.
   The app keeps balances between people as in who owes how much to whom.

   Ref- https://workat.tech/machine-coding/practice/splitwise-problem-0kp2yneec2q2
 */

// //schema for user

// //Apis- API TO UPDATE PAYMENTS

import { User } from './mock.js';
function Splitwise() {
    this.user = [...User];
    this.loggedIn = this.user[1];
}

Splitwise.prototype.equal = function (total_amount = 0, ids = []) {
    const amountPerPerson = Math.floor(total_amount / (ids.length + 1));
    const hash = {};
    ids.forEach((c) => {
        hash[c] = true;
    });
    this.user.forEach((curr) => {
        if (hash[curr.id]) {
            const payload = {
                id: this.loggedIn.id,
                name: this.loggedIn.name,
                email: this.loggedIn.email,
                phone: this.loggedIn.phone,
                amount: amountPerPerson,
            };

            curr.dues.push(payload);
            this.loggedIn.my_payments.push({
                ...payload,
                id: curr.id,
                name: curr.name,
                amount: amountPerPerson,
                email: curr.email,
                phone: curr.phone,
            });
        }
    });
    // console.log(JSON.stringify(this.user, null, 2));
};

Splitwise.prototype.exact = function (ids = []) {
    const hash = {};
    ids.forEach((curr) => {
        hash[curr.id] = curr.amount;
    });

    this.user.forEach((curr) => {
        if (hash[curr.id]) {
            const due_payload = {
                id: this.loggedIn.id,
                name: this.loggedIn.name,
                email: this.loggedIn.email,
                phone: this.loggedIn.phone,
                amount: hash[curr.id],
            };
            curr.dues.push(due_payload);
        }
    });
    console.log(JSON.stringify(this.user, null, 2));
};

const s = new Splitwise();

// console.log(s.equal(1000, [1]));
console.log(
    s.exact([
        { id: 1, amount: 250 },
        { id: 4, amount: 800 },
    ])
);
