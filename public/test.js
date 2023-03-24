import { Project } from "./project";

describe('#capitalize', () => {
    test('First character is capitalized', () => {
        let proj = new Project();
        let myString = 'abcdefg';
        myString = proj.capitalize(myString);

        expect(myString).toBe('Abcdefg');
    });
});

describe('#reverseString', () => {
    test('Reverses the string', () => {
        let proj = new Project();
        let myString = 'abcdefg';
        myString = proj.reverseString(myString);

        expect(myString).toBe('gfedcba');
    });
});

describe('#calculator', () => {
    describe('Test addition', () => {
        let proj = new Project();
        
        expect(proj.calculator(1, 1, 'add')).toBe(2);
    });

    describe('Test subtraction', () => {
        let proj = new Project();
        
        expect(proj.calculator(5, 1, 'sub')).toBe(4);
    });

    describe('Test multiplicatioin', () => {
        let proj = new Project();
        
        expect(proj.calculator(5, 5, 'mult')).toBe(25);
    });

    describe('Test division', () => {
        let proj = new Project();
        
        expect(proj.calculator(25, 5, 'div')).toBe(5);
    });

    describe('Invalid op', () => {
        let proj = new Project();

        //expect(() => calculator(25, 5, 'foo')).toThrow();
        //expect(() => calculator(25, 5, 'foo')).toThrow(Error);
        //expect(proj.calculator(25, 5, 'foo')).toThrow('Invalid operation!');
        expect(() => proj.calculator(25, 5, 'foo')).toThrow('Invalid operation!');
    });
});