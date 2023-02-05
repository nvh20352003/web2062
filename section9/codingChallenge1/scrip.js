const game = {
    team1: 'Việt Nam',
    team2: 'Trung quốc',
    players: [
        [
            'Bùi Tấn Trường',
            'Nguyễn Quang Hải',
            'Phạm Đức Huy',
            'Lương Xuân Trướng',
            'Nguyễn Tuấn Anh',
            'Nguyễn Văn Toàn',
            'Hà Đức Chinh',
            'Nguyễn Tiến Linh',
            'Trương Văn Thiết',
            'Quế Ngọc Hải',
            'Trương Văn Thiết',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotzr',
        ],
    ],
    score: '4:0',
    scored: ['LNguyễn Tiến Linh', 'Nguyễn Quang Hải', 'Nguyễn Tiến Linh', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const players1Final = [...players1, 'Đỗ Duy Mạnh', 'Nguyễn Thành Chung', 'Trần Đình Trọng'];


// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'kimmich');
// printGoals(game.scored);

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');