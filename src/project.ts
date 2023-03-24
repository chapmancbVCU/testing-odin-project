export class Project {
    constructor() {

    }

    calculator(a: number, b: number, op: string): number {
        if (op == 'add') {
            return a + b;
        } else if (op == 'sub') {
            return a - b;
        } else if (op == 'mult') {
            return a * b;
        } else if (op == 'div') {
            return a / b;
        } else {
            throw new Error('Invalid operation!');
        }
    }

    capitalize(myString: string): string {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }

    reverseString(myString: string): string {
        let newString = '';
        for (let i = myString.length - 1; i >= 0; i--) {
            newString += myString[i];
        }
        return newString;
    }
}