import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "pbortey"
          ));
    });

    test('should return andrewID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "pbortey"
          ));
    })

    test('should return sum of two numbers', () => {
        const query = "27 plus 96";
        const response: string = QueryProcessor(query);
        expect(response).toBe("123");
    });

    test('should return largest number', () => {
        const query = "What is the largest number in 40, 69, 83?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("83");
    });

    test('should return multiple of two numbers', () => {
        const query = "5 multiplied 3";
        const response: string = QueryProcessor(query);
        expect(response).toBe("15");
    });

    test('should return number that is both a square and a cube', () => {
        const query = "What is a number that is both a square and a cube in 64, 81, 100?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should return number that is both a square and a cube', () => {
        const query = "What is a number that is both a square and a cube in 2632, 4792, 1728, 3721, 729, 3251, 110?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("729");
    });

    test('should return prime numbers', () => {
        const query = "What are the prime numbers in 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2, 3, 5, 7");
    });

});