
'use server';
/**
 * @fileOverview An AI agent that evaluates a student's translation.
 *
 * - evaluateTranslation - A function that handles the translation evaluation.
 * - EvaluateTranslationInput - The input type for the evaluateTranslation function.
 * - EvaluateTranslationOutput - The return type for the evaluateTranslation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EvaluateTranslationInputSchema = z.object({
  userTranslation: z.string().describe("The student's translated sentence."),
  originalSentence: z.string().describe('The original sentence that the student was asked to translate.'),
  sourceLanguage: z.string().describe('The source language of the original sentence (e.g., "Russian", "German").'),
  targetLanguage: z.string().describe('The target language for the translation (e.g., "German", "Russian").'),
  modelAnswer: z.string().describe('A model correct translation for reference.'),
  languageLevel: z.string().describe('The student\'s language level (e.g., A1, B2). This helps tailor feedback complexity and strictness.'),
});
export type EvaluateTranslationInput = z.infer<typeof EvaluateTranslationInputSchema>;

const EvaluateTranslationOutputSchema = z.object({
  isSemanticallyAcceptable: z.boolean().describe("True if the user's translation correctly conveys the core meaning of the original sentence, considering the student's language level. Minor grammatical or stylistic differences might be acceptable for lower levels. False if the meaning is significantly distorted or incorrect."),
  feedback: z.string().describe("Feedback in Russian. If acceptable, explain why and mention any minor points or alternative phrasings. If not acceptable, explain the main errors. If perfect, acknowledge it."),
  suggestedTranslation: z.string().describe("If the student's translation is not perfect, provide a good, corrected version in the target language. This can be the modelAnswer or an AI-improved version. If the student's translation is perfect, reiterate it or the modelAnswer."),
});
export type EvaluateTranslationOutput = z.infer<typeof EvaluateTranslationOutputSchema>;

export async function evaluateTranslation(input: EvaluateTranslationInput): Promise<EvaluateTranslationOutput> {
  return evaluateTranslationFlow(input);
}

const evaluateTranslationPrompt = ai.definePrompt({
  name: 'evaluateTranslationPrompt',
  input: {schema: EvaluateTranslationInputSchema},
  output: {schema: EvaluateTranslationOutputSchema},
  prompt: `You are an expert language tutor evaluating a student's translation.
The student is at the {{{languageLevel}}} level.
The original sentence in {{{sourceLanguage}}} was: "{{{originalSentence}}}"
The student was asked to translate this into {{{targetLanguage}}}.
The student's translation is: "{{{userTranslation}}}"
A model correct answer for reference is: "{{{modelAnswer}}}"

Your tasks are:
1.  Determine if the student's translation (userTranslation) is semantically acceptable for their languageLevel. It doesn't have to be an exact match to the modelAnswer. Minor grammatical errors or stylistic choices that don't significantly change the core meaning are acceptable, especially for lower levels (A1-B1). For higher levels (B2-C2), be stricter with grammar and style. If the translation significantly distorts the meaning, contains critical grammatical errors that impede understanding, or is in the wrong language, it is not acceptable.
2.  Provide 'feedback' in Russian.
    - If the translation is acceptable and very good or perfect, acknowledge this.
    - If acceptable but with minor issues, explain these points gently and why it's still acceptable.
    - If not acceptable, clearly explain the main errors (semantic, grammatical, lexical) in Russian.
3.  Provide a 'suggestedTranslation' in the {{{targetLanguage}}}.
    - If the student's translation is perfect or very good, this can be the student's own translation or the modelAnswer.
    - If the student's translation has issues, provide a corrected, natural-sounding version.

Return your evaluation in the following JSON format:
{
  "isSemanticallyAcceptable": boolean,
  "feedback": "Russian explanation here.",
  "suggestedTranslation": "Suggested translation in {{{targetLanguage}}} here."
}

Example for an A1 student translating "I have a cat" (Ich habe eine Katze) from Russian to German:
Original (Russian): "У меня есть кошка"
Student's translation (German): "Ich bin Katze"
Model Answer (German): "Ich habe eine Katze"
Evaluation:
{
  "isSemanticallyAcceptable": false,
  "feedback": "Ваш перевод 'Ich bin Katze' означает 'Я - кошка', что не соответствует русскому предложению 'У меня есть кошка'. Глагол 'sein' (быть) здесь неуместен. Для выражения владения используется глагол 'haben' (иметь). Также перед существительным 'Katze' нужен артикль.",
  "suggestedTranslation": "Ich habe eine Katze."
}

Example for a B1 student translating "The book is interesting" (Das Buch ist interessant) from German to Russian:
Original (German): "Das Buch ist interessant."
Student's translation (Russian): "Книга интересная."
Model Answer (Russian): "Эта книга интересная."
Evaluation:
{
  "isSemanticallyAcceptable": true,
  "feedback": "Отличный перевод! 'Книга интересная' полностью передает смысл. Вариант 'Эта книга интересная' также корректen и немного конкретнее, но ваш перевод абсолютно верен.",
  "suggestedTranslation": "Книга интересная."
}

Ensure your feedback is constructive and tailored to the student's level.
The 'feedback' field MUST ALWAYS be in Russian.
The 'suggestedTranslation' field MUST ALWAYS be in the {{{targetLanguage}}}.
`,
});

const evaluateTranslationFlow = ai.defineFlow(
  {
    name: 'evaluateTranslationFlow',
    inputSchema: EvaluateTranslationInputSchema,
    outputSchema: EvaluateTranslationOutputSchema,
  },
  async (input) => {
    const {output} = await evaluateTranslationPrompt(input);
    if (!output) {
      console.error("AI did not return translation evaluation or output was null");
      return {
        isSemanticallyAcceptable: false,
        feedback: "Автоматическая оценка перевода не удалась. Пожалуйста, попробуйте позже.",
        suggestedTranslation: input.modelAnswer, // Fallback to model answer
      };
    }
    try {
      const parsedOutput = typeof output === 'string' ? JSON.parse(output) : output;
      return parsedOutput as EvaluateTranslationOutput;
    } catch (e) {
      console.error("Error parsing AI output for translation evaluation:", e);
      return {
        isSemanticallyAcceptable: false,
        feedback: "Ошибка при обработке ответа ИИ для оценки перевода. Пожалуйста, попробуйте позже.",
        suggestedTranslation: input.modelAnswer,
      };
    }
  }
);
