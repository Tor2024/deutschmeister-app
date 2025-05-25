
// 'use server'
'use server';

/**
 * @fileOverview An AI agent that adaptively generates the next best lesson for a user
 * based on their past performance and learning goals. It analyzes the user's progress
 * and suggests lessons that target areas where the user needs the most improvement.
 *
 * - generateAdaptiveLesson - A function that generates the next lesson.
 * - AdaptiveLessonInput - The input type for the generateAdaptiveLesson function.
 * - AdaptiveLessonOutput - The return type for the generateAdaptiveLesson function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const AdaptiveLessonInputSchema = z.object({
  currentLevel: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).describe('The current German language level of the user.'),
  completedLessons: z.array(z.string()).describe('List of lesson topics the user has completed.'),
  testResults: z.record(z.number()).describe('A map of lesson topic to test score (0-100).'),
  learningGoals: z.string().describe('The user learning goals or areas of interest in German, e.g., grammar, vocabulary, conversation.'),
});
export type AdaptiveLessonInput = z.infer<typeof AdaptiveLessonInputSchema>;

const AdaptiveLessonOutputSchema = z.object({
  lessonTopic: z.string().describe('The suggested lesson topic for the user.'),
  reason: z.string().describe('The reason why this lesson is suggested based on the user input.'),
});
export type AdaptiveLessonOutput = z.infer<typeof AdaptiveLessonOutputSchema>;

export async function generateAdaptiveLesson(input: AdaptiveLessonInput): Promise<AdaptiveLessonOutput> {
  return adaptiveLearningPathFlow(input);
}

const adaptiveLearningPathPrompt = ai.definePrompt({
  name: 'adaptiveLearningPathPrompt',
  input: {schema: AdaptiveLessonInputSchema},
  output: {schema: AdaptiveLessonOutputSchema},
  prompt: `You are an expert German language tutor. Based on the user's current level ({currentLevel}), 
the lessons they have completed ({completedLessons}), their test results ({testResults}),
and their learning goals ({learningGoals}), suggest the next best lesson topic for them.
Explain why you are suggesting this particular lesson.

Consider the user's learning goals and areas where they have performed poorly in tests. 
Suggest lessons that will help them improve in those areas. Suggest lessons the user has not taken yet.

Output the lesson topic and the reason for your suggestion. Focus on Grammar, Vocabulary, Listening Comprehension, Reading Comprehension, Writing and Speaking.
`,
});

const adaptiveLearningPathFlow = ai.defineFlow(
  {
    name: 'adaptiveLearningPathFlow',
    inputSchema: AdaptiveLessonInputSchema,
    outputSchema: AdaptiveLessonOutputSchema,
  },
  async input => {
    const {output} = await adaptiveLearningPathPrompt(input);
    return output!;
  }
);

