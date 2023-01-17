export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)
//takes correct answer and mixes it with incorect ones so they can be shufled 