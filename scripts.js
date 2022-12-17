const Player = () => {
    /* This is a factory function to create players.
        Each player has their own array to keep track of the
        playGrids keeping their mark.
    */
    const gridArray = [];
    return {store: gridArray};
}

const Play = (() => {
    /* This is a module function to play the game.
        I made this so that I won't have to write these functions
        in every grid in the play field.
    */
    const Store = (a, b) => {
        b.push(a);
    };
    const Round = () => {
        if (round % 2 === 0) {
            return playerO;
        } else if (round % 2 === 1) {
            return playerX;
        };
    };
    const Mark = (a, b) => {
        if (b === playerO) {
            a.textContent = `O`;
        } else if (b === playerX) {
            a.textContent = `X`;
        };
    };
    const winningCondition1 = [`grid1`, `grid2`, `grid3`];
    const winningCondition2 = [`grid1`, `grid5`, `grid9`];
    const winningCondition3 = [`grid1`, `grid4`, `grid7`];
    const winningCondition4 = [`grid3`, `grid5`, `grid7`];
    const winningCondition5 = [`grid3`, `grid6`, `grid9`];
    const winningCondition6 = [`grid4`, `grid5`, `grid6`];
    const winningCondition7 = [`grid7`, `grid8`, `grid9`];
    const WinningCheck = ((store, condition) => {
        return condition.every(i => store.includes(i));
    });
    const VictoryCheck = (store) => {
        if (WinningCheck(store, winningCondition1) ||
            WinningCheck(store, winningCondition2) ||
            WinningCheck(store, winningCondition3) ||
            WinningCheck(store, winningCondition4) ||
            WinningCheck(store, winningCondition5) ||
            WinningCheck(store, winningCondition6) ||
            WinningCheck(store, winningCondition7)) {
            if (round % 2 === 0) {
                return `The winner is O`;
            } else if (round % 2 === 1) {
                return `The winner is X`;
            };
        } else {
            return `Winner undecided`;
        }
    };
    return {
        Store,
        Round,
        Mark,
        winningCondition1,
        WinningCheck,
        VictoryCheck,
    };
})();


const playerX = Player();
const playerO = Player();
// The variable 'round' keeps track of the round currently playing.
let round = 1;


const playGrid = document.querySelector(`#playGrid`);
const playButton = document.querySelector(`#playButton`);
playButton.addEventListener('click', () => {
    playGrid.classList.add(`active`);
    playButton.classList.remove(`active`);
});

const grid1 = document.querySelector(`#grid1`);
grid1.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid1, input);
    Play.Store(`grid1`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});

const grid2 = document.querySelector(`#grid2`);
grid2.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid2, input);
    Play.Store(`grid2`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});

const grid3 = document.querySelector(`#grid3`);
grid3.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid3, input);
    Play.Store(`grid3`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});

const grid4 = document.querySelector(`#grid4`);
grid4.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid4, input);
    Play.Store(`grid4`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});

const grid5 = document.querySelector(`#grid5`);
grid5.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid5, input);
    Play.Store(`grid5`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++
});

const grid6 = document.querySelector(`#grid6`);
grid6.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid6, input);
    Play.Store(`grid6`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++
});

const grid7 = document.querySelector(`#grid7`);
grid7.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid7, input);
    Play.Store(`grid7`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++
});

const grid8 = document.querySelector(`#grid8`);
grid8.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid8, input);
    Play.Store(`grid8`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});

const grid9 = document.querySelector(`#grid9`);
grid9.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid9, input);
    Play.Store(`grid9`, input.store);
    console.log(Play.VictoryCheck(input.store));
    round++;
});
