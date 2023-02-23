// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('it should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return "Hello ,Jane!', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('sayHello("Alex") should return "Hello ,Alex!', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return "Hello ,Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called', function() {
        expect(sayHello(true || false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('isFive(5) should return true', function() {
        expect(isFive(5)).toBe(true);
    });
    it('isFive("5") should return false', function() {
        expect(isFive('5')).toBe(false);
    });
});


describe('isEven', function() {
    it('should always return boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('returns true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when executed with isEven("banana")', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('returns true when executed with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('returns false when executed with isEven(INFINITY)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('return false when called with a boolean input', function () {
       expect(isEven(true) || isEven(false)).toBe(false );
    });
    it('returns false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false

describe('isVowel', function () {
   it('isVowel always returns a boolean', function () {
       expect(typeof isVowel()).toBe('boolean');
   });
   it('isVowel("a") returns true', function () {
       expect(isVowel('a')).toBe(true);
   });
    it('isVowel("A") returns true', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('isVowel("y") returns true', function () {
        expect(isVowel('y')).toBe(true);
    });
    it('isVowel(4) returns true', function () {
        expect(isVowel(4)).toBe(true);
    });
    it('isVowel(true) or isVowel(false) both return false', function () {
        expect(isVowel(true) || isVowel(false)).toBe(false);
    });
    it('isVowel("banana") returns false', function () {
       expect(isVowel('banana')).toBe(false);
    });
    it('isVowel() returns false', function () {
        expect(isVowel()).toBe(false);
    });
});