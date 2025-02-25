export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return "pbortey";
  }

  if (query.toLowerCase().includes("name")) {
    return "pbortey";
  }

  // if (query.toLowerCase().includes("27 plus 96")) {
  //   return (27 + 96).toString();
  // }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      return (num1 + num2).toString();
    }
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      return (num1 * num2).toString();
    }
  }

  return "";
}
