
'use server';

/**
 * @fileOverview Generates exercises from audio transcripts to improve listening comprehension and vocabulary.
 *
 * - generateAudioExercises - A function that handles the generation of exercises from audio transcripts.
 * - GenerateAudioExercisesInput - The input type for the generateAudioExercises function.
 * - GenerateAudioExercisesOutput - The return type for the generateAudioExercises function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAudioExercisesInputSchema = z.object({
  audioTranscript: z
    .string()
    .describe('The transcript of the audio to generate exercises from.'),
  topic: z.string().describe('The topic of the audio transcript.'),
  level: z.string().describe('The German language level of the audio (A2-C2).'),
});
export type GenerateAudioExercisesInput = z.infer<
  typeof GenerateAudioExercisesInputSchema
>;

// Schemas for AI-generated exercise types
const BaseAIExerciseSchema = z.object({
  explanation: z.string().describe("Explanation for the correct answer or general concept related to the exercise."),
});

const MultipleChoiceAISchema = BaseAIExerciseSchema.extend({
  type: z.literal('multiple_choice'),
  question: z.string().describe("The question text."),
  options: z.array(z.string()).min(2).describe("An array of at least two possible answer options."),
  correctAnswer: z.string().describe("The correct answer string, which must be one of the provided options."),
});

const FillInTheBlankAISchema = BaseAIExerciseSchema.extend({
  type: z.literal('fill_in_the_blank'),
  questionTextWithPlaceholder: z.string().describe("The sentence or question with a placeholder like '[BLANK]' for the user to fill in. Example: 'Das ist [BLANK] Haus.'"),
  correctAnswer: z.string().describe("The word or phrase that correctly fills the blank."),
});

const TranslationAISchema = BaseAIExerciseSchema.extend({
  type: z.literal('translation'),
  prompt: z.string().describe("The sentence or phrase to be translated."),
  languageDirection: z.enum(['to_german', 'from_german']).describe("Direction of translation: 'to_german' (e.g., English to German) or 'from_german' (e.g., German to English)."),
  correctAnswer: z.string().describe("The correct translation."),
});

const GeneratedExerciseSchema = z.discriminatedUnion('type', [
  MultipleChoiceAISchema,
  FillInTheBlankAISchema,
  TranslationAISchema,
]);

const GenerateAudioExercisesOutputSchema = z.object({
  exercises: z.array(GeneratedExerciseSchema).describe('An array of generated exercises of different types (multiple_choice, fill_in_the_blank, translation). Ensure a variety of types if possible.'),
});

export type GeneratedExercise = z.infer<typeof GeneratedExerciseSchema>;
export type GenerateAudioExercisesOutput = z.infer<
  typeof GenerateAudioExercisesOutputSchema
>;

export async function generateAudioExercises(
  input: GenerateAudioExercisesInput
): Promise<GenerateAudioExercisesOutput> {
  return generateAudioExercisesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAudioExercisesPrompt',
  input: {schema: GenerateAudioExercisesInputSchema},
  output: {schema: GenerateAudioExercisesOutputSchema},
  prompt: `You are an expert German language teacher. You will generate exercises based on an audio transcript.

  The topic of the audio is: {{{topic}}}
  The language level of the audio is: {{{level}}}

  Transcript: """{{{audioTranscript}}}"""

  Generate a variety of exercises based on the transcript, including:
  1.  Multiple choice questions about vocabulary or comprehension. (type: 'multiple_choice')
      - Include a 'question' text.
      - Include an 'options' array with at least 2-4 plausible options.
      - Include a 'correctAnswer' which must exactly match one of the options.
      - Include a brief 'explanation'.
  2.  Fill-in-the-blank exercises. (type: 'fill_in_the_blank')
      - Include a 'questionTextWithPlaceholder' field containing the sentence with a '[BLANK]' placeholder where the user should fill in the word.
      - Include a 'correctAnswer' field with the word(s) for the blank.
      - Include a brief 'explanation'.
  3.  Translation exercises (German to Russian, or if the transcript is very simple, Russian to German, using simple phrases from the transcript). (type: 'translation')
      - Include a 'prompt' field with the text to translate.
      - Include a 'languageDirection' field ('to_german' or 'from_german'). For German audio, 'from_german' is preferred for translation into Russian.
      - Include a 'correctAnswer' field with the correct translation.
      - Include a brief 'explanation'.

  The exercises should be appropriate for the given German language level ({{{level}}}).
  Return the exercises as a JSON array of objects, where each object conforms to one of the exercise type structures defined in the output schema.
  Aim for 3-5 exercises if possible, with a mix of types.
  Ensure all fields in the output schema are populated correctly for each exercise.
  For multiple_choice, the correctAnswer MUST be one of the strings present in the options array.
  For fill_in_the_blank, ensure the [BLANK] placeholder is clearly in the questionTextWithPlaceholder.
  For translation, if translating from German, the prompt should be a German phrase from the transcript and the correctAnswer its Russian translation.
  `,
});

const generateAudioExercisesFlow = ai.defineFlow(
  {
    name: 'generateAudioExercisesFlow',
    inputSchema: GenerateAudioExercisesInputSchema,
    outputSchema: GenerateAudioExercisesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || !output.exercises) {
      console.error('AI did not return exercises or output was null');
      return { exercises: [] };
    }
    return output;
  }
);
