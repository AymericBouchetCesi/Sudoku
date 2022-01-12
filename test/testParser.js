//'4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'
//should be
// [
//   [4.....8.5],
//   [.3.......],
//   [...7.....],
//   [.2.....6.],
//   [....8.4..],
//   [....1....],
//   [...6.3.7.],
//   [5..2.....],
//   [1.4......]
// ]


import must from 'must';
import expect from 'must';
import {parse} from '../parser.js'

const baseString = '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'
const finalArray = [['4.....8.5'],['.3.......'],['...7.....'],['.2.....6.'],['....8.4..'],['....1....'],['...6.3.7.'],['5..2.....'],['1.4......']]

describe('Parser', function() {
  describe('string to array', function() {
    it('should be an array', () => {
      typeof(parse(baseString)).must.be.array()
    })

    it('should be equal to finalArray', function() {
      let parsedArray = []
      parsedArray = parse(baseString)      
      parsedArray.must.be.equal(finalArray)
    });

    it('should be the right value', ()=> {
      let parsedArray = []
      parsedArray = parse(baseString)
      expect(parsedArray).to.not.be.undefined()
      expect(parsedArray[0][0]).to.be.equal('4')
      expect(parsedArray[8][8]).to.be.equal('.')
      expect(parsedArray[0][8]).to.be.equal('5')
      expect(parsedArray[1][1]).to.be.equal('3')

    })
  });
});