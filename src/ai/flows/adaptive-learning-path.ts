
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
  lessonTopic: z.string().describe('The suggested lesson topic for the user. This topic should be in Russian or use common German grammatical terms if referring to grammar (e.g., "Dativ", "Perfekt", "Adjektivdeklination"). The topic should be concise and sound like a typical lesson title.'),
  reason: z.string().describe('The reason why this lesson is suggested based on the user input. This explanation MUST be in Russian.'),
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
The explanation (reason field) MUST be in Russian.

Consider the user's learning goals and areas where they have performed poorly in tests.
Suggest lessons that will help them improve in those areas. Suggest lessons the user has not taken yet.

Output the lesson topic and the reason for your suggestion.
The 'lessonTopic' MUST be concise and sound like a typical lesson title for a German language course.
The 'lessonTopic' SHOULD be primarily in Russian. If it's a grammar topic, it can use common German grammatical terms (e.g., "Дательный падеж (Dativ)", "Время Perfekt", "Склонение прилагательных (Adjektivdeklination)").
Do NOT invent overly creative or long lesson titles. Prefer standard and recognizable topic names.
Focus on suggesting topics from these areas: Grammar, Vocabulary, Listening Comprehension, Reading Comprehension, Writing, and Speaking.
If suggesting a grammar topic, try to use a common term like "Склонение прилагательных", "Винительный падеж", "Порядок слов".
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
