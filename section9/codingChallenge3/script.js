const gameEvents = new Map([
    [15, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
])
// 1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

//3. 
console.log(`AN event happened, on averrage, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);

// 4. 
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECO'
    console.log(`[${half} HALF] ${min}:${event}`);
}