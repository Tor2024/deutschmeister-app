
'use server';
/**
 * @fileOverview An AI agent that evaluates a student's written exercise.
 *
 * - evaluateWritingExercise - A function that handles the writing exercise evaluation.
 * - EvaluateWritingInput - The input type for the evaluateWritingExercise function.
 * - EvaluateWritingOutput - The return type for the evaluateWritingExercise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EvaluateWritingInputSchema = z.object({
  userAnswer: z.string().describe("The student's written answer to the exercise prompt."),
  promptQuestion: z.string().describe('The original question or prompt for the writing exercise.'),
  languageLevel: z.string().describe('The student\'s German language level (e.g., A1, A2, B1, B2, C1, C2). This helps tailor the feedback complexity.'),
});
export type EvaluateWritingInput = z.infer<typeof EvaluateWritingInputSchema>;

const EvaluateWritingOutputSchema = z.object({
  correctedAnswer: z.string().describe("The AI's suggested correction of the student's answer. If the answer is perfect, return the original answer. Make minimal changes necessary to fix grammatical errors, improve style for the given language level, and ensure the answer addresses the prompt."),
  feedbackExplanation: z.string().describe("A detailed explanation of any errors (grammar, vocabulary, style, relevance to the prompt) in Russian. Provide specific examples from the student's text and explain the corrections. Offer suggestions for improvement. Be encouraging and constructive. Tailor the complexity of your explanation to the student's language level. If the answer is good, highlight its strengths."),
  overallAssessment: z.string().describe("A very short (1-2 sentence) overall assessment of the answer's quality in Russian (e.g., 'Хороший ответ, но есть несколько мелких ошибок.', 'Это хорошее начало, но обратите внимание на спряжение глаголов.', 'Отлично!')."),
});
export type EvaluateWritingOutput = z.infer<typeof EvaluateWritingOutputSchema>;

export async function evaluateWritingExercise(input: EvaluateWritingInput): Promise<EvaluateWritingOutput> {
  return evaluateWritingFlow(input);
}

const evaluateWritingPrompt = ai.definePrompt({
  name: 'evaluateWritingPrompt',
  input: {schema: EvaluateWritingInputSchema},
  output: {schema: EvaluateWritingOutputSchema},
  prompt: `You are an expert German language teacher. Your task is to evaluate a student's written answer to an exercise.
The student's current German language level is: {{{languageLevel}}}.
The exercise prompt was: "{{{promptQuestion}}}"
The student's answer is: "{{{userAnswer}}}"

Please provide your evaluation in the following JSON format:
{
  "correctedAnswer": "The corrected version of the student's answer. If the answer is perfect, return the original. Make minimal necessary corrections for grammar, style appropriate to the language level, and relevance to the prompt.",
  "feedbackExplanation": "A detailed explanation of errors (grammar, vocabulary, style, relevance) in Russian. Give specific examples from the student's text. Explain corrections. Offer suggestions for improvement. Be encouraging. Tailor explanations to the student's language level. If the answer is good, highlight its strengths.",
  "overallAssessment": "A concise (1-2 sentences) overall assessment of the answer's quality in Russian."
}

Focus on being helpful and constructive. For example, if a student at A1 level makes a complex sentence error that would be more appropriate to correct at B1, focus on more fundamental errors for A1 and gently point out the complex part or simplify it.
Ensure your feedback aligns with the student's language level.
Do not add any extra text outside the JSON structure.
Make sure 'feedbackExplanation' and 'overallAssessment' fields are in Russian.
`,
});

const evaluateWritingFlow = ai.defineFlow(
  {
    name: 'evaluateWritingFlow',
    inputSchema: EvaluateWritingInputSchema,
    outputSchema: EvaluateWritingOutputSchema,
  },
  async (input) => {
    const {output} = await evaluateWritingPrompt(input);
    if (!output) {
      // Fallback or error handling if AI output is empty or not in expected format
      // This basic fallback might need to be more robust in a real application
      return {
        correctedAnswer: input.userAnswer,
        feedbackExplanation: "Автоматическая оценка не удалась. Пожалуйста, попробуйте позже или обратитесь к преподавателю за помощью.",
        overallAssessment: "Оценка невозможна."
      };
    }
    // Attempt to parse if the output is a stringified JSON, common with some models
    try {
      // If output is already an object, this won't do much
      // If it's a string, it tries to parse
      const parsedOutput = typeof output === 'string' ? JSON.parse(output) : output;
      return parsedOutput as EvaluateWritingOutput;
    } catch (e) {
      console.error("Error parsing AI output:", e);
      // Fallback if parsing fails
       return {
        correctedAnswer: input.userAnswer,
        feedbackExplanation: "Ошибка при обработке ответа ИИ. Пожалуйста, попробуйте позже.",
        overallAssessment: "Оценка не удалась."
      };
    }
  }
);

