let boxes = document.querySelectorAll('td');
let count = 2;
let ifClicked = [];
let ticked_color = [];
let lowerByTwo = 0;
function boxClick(e) {
	if (count % 2 === 0) {
		colorTogglerRed(e);
	} else {
		colorTogglerBlue(e);
	}
}

function colorTogglerRed(e) {
	if (!ifClicked.includes(e.target.className)) {
		count += 1;

		e.target.classList.toggle('togg-red');
		ifClicked.push(e.target.className);
		ifWon('red');
	}
}
function colorTogglerBlue(e) {
	if (!ifClicked.includes(e.target.className)) {
		count += 1;

		e.target.classList.toggle('togg-blue');
		ifClicked.push(e.target.className);
		ifWon('blu');
	}
}

function ifWon(turn) {
	ticked_color.push(ifClicked[lowerByTwo].slice(4, 20));
	lowerByTwo += 1;
	// Horizontal Wins
	if (
		ticked_color.includes('box-0-0 togg-' + turn) &&
		ticked_color.includes('box-0-1 togg-' + turn) &&
		ticked_color.includes('box-0-2 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
	if (
		ticked_color.includes('box-1-0 togg-' + turn) &&
		ticked_color.includes('box-1-1 togg-' + turn) &&
		ticked_color.includes('box-1-2 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
	if (
		ticked_color.includes('box-2-0 togg-' + turn) &&
		ticked_color.includes('box-2-1 togg-' + turn) &&
		ticked_color.includes('box-2-2 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}

	//Vertical Wins
	if (
		ticked_color.includes('box-0-0 togg-' + turn) &&
		ticked_color.includes('box-1-0 togg-' + turn) &&
		ticked_color.includes('box-2-0 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
	if (
		ticked_color.includes('box-0-1 togg-' + turn) &&
		ticked_color.includes('box-1-1 togg-' + turn) &&
		ticked_color.includes('box-2-1 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
	if (
		ticked_color.includes('box-0-2 togg-' + turn) &&
		ticked_color.includes('box-1-2 togg-' + turn) &&
		ticked_color.includes('box-2-2 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}

	//diagonal Wins
	if (
		ticked_color.includes('box-0-0 togg-' + turn) &&
		ticked_color.includes('box-1-1 togg-' + turn) &&
		ticked_color.includes('box-2-2 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
	if (
		ticked_color.includes('box-0-2 togg-' + turn) &&
		ticked_color.includes('box-1-1 togg-' + turn) &&
		ticked_color.includes('box-2-0 togg-' + turn)
	) {
		document.querySelector('.won').classList.remove('hidden');
		console.log('Game Finished');
	}
}
