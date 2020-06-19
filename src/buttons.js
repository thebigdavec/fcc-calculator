import React from 'react';
import Digits from './digits';
import Operators from './operators';
import Commit from './commit';

const Buttons = () => {
	return (
		<>
			<p>the buttons</p>
			<Digits />
        <Operators />
        <Commit />
		</>
	);
};

export default Buttons;