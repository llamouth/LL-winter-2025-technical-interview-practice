const isPalindrome = require('./problem');

describe('isPalindrome', () => {
    // Simplest valid cases
    test('empty string should be palindrome', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('single character should be palindrome', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    // Simple cases
    test('basic palindrome should return true', () => {
        expect(isPalindrome('mom')).toBe(true);
    });

    test('non-palindrome should return false', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    // Complex cases
    test('palindrome with spaces should return true', () => {
        expect(isPalindrome('race car')).toBe(true);
    });

    test('palindrome with mixed case should return true', () => {
        expect(isPalindrome('RaCeCar')).toBe(true);
    });

    // Edge cases
    test('palindrome with special characters should return true', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('palindrome with numbers should work', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    test('palindrome with numbers and letters', () => {
        expect(isPalindrome('a2f44f2a')).toBeTruthy()
        expect(isPalindrome('1ab1')).toBeFalsy()
    })

    test('palidrome input is a string', () => {
        expect(()=> {
            isPalindrome(2)
        }).toThrow("Wrong input")
    })

    
});
