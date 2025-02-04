const { displayAmountOfStars, displayStarsWithAGap, displayBoxWithStars} = require('./warmup')

describe('displayStarsWithAGap should display stars with a gap', () => {

    test('should display a line with a gap', () => {
        expect(displayStarsWithAGap(5)).toBe('*   *')
    })
    
})

describe('displayBoxWithStars should show a box with the given amount of lines and characters', () => {

    test('should display a star box', () => {
        expect(displayBoxWithStars(5,5)).toBe('*****\n*   *\n*   *\n*   *\n*****')
    })

    test('should display proper star box', () => {
        expect(displayBoxWithStars(6,5)).toBe('*****\n*   *\n*   *\n*   *\n*   *\n*****')
    })
    
})