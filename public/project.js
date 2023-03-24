"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor() {
    }
    calculator(a, b, op) {
        if (op == 'add') {
            return a + b;
        }
        else if (op == 'sub') {
            return a - b;
        }
        else if (op == 'mult') {
            return a * b;
        }
        else if (op == 'div') {
            return a / b;
        }
        else {
            throw new Error('Invalid operation!');
        }
    }
    capitalize(myString) {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }
    reverseString(myString) {
        let newString = '';
        for (let i = myString.length - 1; i >= 0; i--) {
            newString += myString[i];
        }
        return newString;
    }
}
exports.Project = Project;
