/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code

switch (true) {
    case score < 50:
        grade = 'F'
        break;
    case score < 70:
        grade = 'D'
        break;
    case score < 80:
        grade = 'C'
        break;
    case score < 90:
        grade = 'B'
        break;
    case score <= 100:
        grade = 'A'
        break;
    default:
        score = 'Invalid score'
        break;
}