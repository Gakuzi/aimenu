// Комментарий: Расчет калорий по формуле Harris-Benedict. Учет возраста, пола, веса, активности.

import { FamilyMember } from '../types';

export function calculateCalories(member: FamilyMember): number {
  let bmr: number;
  if (member.gender === 'male') {
    bmr = 88.362 + (13.397 * member.weight) + (4.799 * member.age * 2.54) - (5.677 * member.age);  // Примерная формула
  } else {
    bmr = 447.593 + (9.247 * member.weight) + (3.098 * member.age * 2.54) - (4.330 * member.age);
  }

  const activityMultiplier = {
    low: 1.2,
    medium: 1.55,
    high: 1.9,
  }[member.activityLevel];

  return Math.round(bmr * activityMultiplier);
}