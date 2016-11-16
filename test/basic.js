var assert = require('assert');
var utils = require('../src/utils.js');
var bf = require('../src/interpreter.js').interpreter


describe('Brain f*ck interpreter', function() {
	describe('Operators', function() {
		it('#increment', function() {

			bf('+', undefined);
			bf(utils.repeat(127, '+'), undefined);

		});

		it('#decrement', function() {

			bf('-', undefined);
			bf(utils.repeat(127, '-'), undefined);

		});

		it('#move forward', function() {

			bf('>', undefined);
			bf(utils.repeat((2<<14) + 1, '>'), undefined);

		});

		it('#move backward', function() {

			bf('<', undefined);

		});

		it('#loop', function() {

			bf('[]', undefined);

		});

		it('#output', function() {


			bf('.', (_) => output = _ );

			assert.equal(String.fromCharCode(0), output);

		});

		it('#input');

		it('#undefined');

	});


	describe('Mix of operators', function() {
		it('should print numbers', function() {
			
			var numbers = '0123456789', output = '', p = 0;

			bf(utils.repeat(47, '+') + utils.repeat(10, '+.'), (_) => { output += _ });
			assert.equal(numbers, output);

		});

		it('should print alpha upcase', function() {

			var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', output = '', p = 0;

			bf(utils.repeat(64, '+') + utils.repeat(26, '+.'), (_) => { output += _ });
			assert.equal(alpha, output);

		});

		it('should print alpha lowercase', function() {

			var alpha = 'abcdefghijklmnopqrstuvwxyz', output = '', p = 0;

			bf(utils.repeat(96, '+') + utils.repeat(26, '+.'), (_) => { output += _ });
			assert.equal(alpha, output);

		});

		it('should buffer 32768', function() {

			bf('+' + utils.repeat(2<<14, '>') + '.', (_) => { output = _ });
			assert.equal(String.fromCharCode(1), output);

		});

		it('should loop 5', function() {
			
			var output = '';
			
			bf('+++++[>+>+>+>+>+<<<<<-]>.>.>.>.>.', (_) => { output += _ });
			assert.equal(utils.repeat(5, String.fromCharCode(5)), output);

		});

		it('should print hello world', function() {

			var hello_world = 'Hello World!', output = '', p = 0;
			bf(
				'++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.',
				(_) => { output += _ }
			);
			assert.equal(hello_world, output);

		});
	});
});

