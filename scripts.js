const Player = () => {
    /* This is a factory function to create players.
        Each player has their own array to keep track of the
        playGrids keeping their mark.
    */
    const gridArray = [];
    return {store: gridArray};
}

const Play = (() => {
    // This is a module function to play the game.
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
    return {
        Store,
        Round,
        Mark,
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
    round++;
});

const grid2 = document.querySelector(`#grid2`);
grid2.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid2, input);
    Play.Store(`grid2`, input.store);
    round++;
});

const grid3 = document.querySelector(`#grid3`);
grid3.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid3, input);
    Play.Store(`grid3`, input.store);
    round++;
});

const grid4 = document.querySelector(`#grid4`);
grid4.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid4, input);
    Play.Store(`grid4`, input.store);
    round++;
});

const grid5 = document.querySelector(`#grid5`);
grid5.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid5, input);
    Play.Store(`grid5`, input.store);
    round++
});

const grid6 = document.querySelector(`#grid6`);
grid6.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid6, input);
    Play.Store(`grid6`, input.store);
    round++
});

const grid7 = document.querySelector(`#grid7`);
grid7.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid7, input);
    Play.Store(`grid7`, input.store);
    round++
});

const grid8 = document.querySelector(`#grid8`);
grid8.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid8, input);
    Play.Store(`grid8`, input.store);
    round++;
});

const grid9 = document.querySelector(`#grid9`);
grid9.addEventListener('click', () => {
    let input = Play.Round();
    Play.Mark(grid9, input);
    Play.Store(`grid9`, input.store);
    round++;
});
