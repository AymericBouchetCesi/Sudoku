import expect from 'must'
import register from 'must/register.js'
register()
import { parse } from './parser.js'

describe("a sudoku parser",()=>{
    it("must have a valid structure",()=>{
        let grid = parse("ioupi")
        grid.must.be.an.object()
        expect(grid.lines).to.not.be.undefined()
        expect(grid.cols).to.not.be.undefined()
        expect(grid.squares).to.not.be.undefined()
        grid.lines.must.be.an.array()
        expect(grid.lines[0]).to.not.be.undefined()
        grid.lines[0].must.be.an.array()
        expect(grid.lines[0][0]).to.not.be.undefined()
    })

    it("must be correctly parsed",()=>{
        let grid = parse("ioupi")
        let topLeft = grid.lines[0][0]
        topLeft.must.be.a.number()
        topLeft.must.be.at.least(0)
        topLeft.must.be.at.most(9)
    })
})
