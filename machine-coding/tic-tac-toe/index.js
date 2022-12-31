function Game() {
    this.winningPositions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [2, 5, 8],
        [3, 5, 7],
        [1, 4, 7],
        [3, 6, 9],
    ];
    this.lastInput = 'X';
    this.inputs = [null, '', '', '', '', '', '', '', '', ''];
    this.isWinner = false;

    this.addListners();
}

Game.prototype.addListners = function () {
    this.boundListner = this.handleInput.bind(this);

    //initialize event listners
    Array(9)
        .fill(1)
        .forEach((__, idx) => {
            document.getElementById(idx + 1).addEventListener('click', this.boundListner);
        });
};

Game.prototype.handleInput = function (e) {
    const el = e.target;
    const elId = e.target.id;
    const sign = this.lastInput === 'X' ? 'O' : 'X';
    console.log('s', elId);

    this.inputs[elId] = sign;
    el.innerHTML += '<h1>' + sign + '</h1>';
    this.lastInput = this.lastInput === 'X' ? 'O' : 'X';
    document.getElementById(elId).removeEventListener('click', this.boundListner);
    this.checkWin();
};

Game.prototype.checkWin = function () {
    for (let i = 0; i < this.winningPositions.length; i++) {
        const winCondition = this.winningPositions[i];
        const a = this.inputs[winCondition[0]];
        const b = this.inputs[winCondition[1]];
        const c = this.inputs[winCondition[2]];

        if (a == '' || b == '' || c == '') {
            continue;
        }
        if (a == b && b == c) {
            this.isWinner = true;
            break;
        }
    }

    if (this.isWinner) {
        document.getElementById('winner').innerHTML +=
            '<h1>' + this.lastInput[this.lastInput.length - 1] + ' WON' + '</h1>';
        this.clearListners();
        document.getElementById('reset').style.display = 'block';
        document.getElementById('reset').addEventListener('click', () => this.reset());

        return;
    }
    let draw = false;

    for (let i of this.inputs) {
        if (i !== '') {
            draw = true;
        } else {
            draw = false;
            break;
        }
    }

    if (draw) {
        document.getElementById('winner').innerHTML += '<h1> DRAW</h1>';
        document.getElementById('reset').style.display = 'block';
        document.getElementById('reset').addEventListener('click', () => this.reset());
    }
};

Game.prototype.clearListners = function () {
    Array(9)
        .fill(1)
        .forEach((__, idx) => {
            document.getElementById(idx + 1).removeEventListener('click', this.boundListner);
        });
};
Game.prototype.reset = function () {
    Array(9)
        .fill(1)
        .forEach((__, idx) => {
            document.getElementById(idx + 1).addEventListener('click', this.boundListner);
        });
    Array(9)
        .fill(1)
        .forEach((__, idx) => {
            document.getElementById(idx + 1).innerHTML = '';
        });
    this.lastInput = 'X';
    this.inputs = [null, '', '', '', '', '', '', '', '', ''];
    this.isWinner = false;
    document.getElementById('winner').innerHTML = '';
    document.getElementById('reset').style.display = 'none';
};

const game = new Game();
