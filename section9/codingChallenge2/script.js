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
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let average = 0;
const odds = Object.values(game.odds);
for (const odd of Object.values(game.odds)) average += odd;
average /= odds.length;
console.log(average);

// 3. 
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`odd of ${teamStr} ${odd}`);
}