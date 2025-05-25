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

const GenerateAudioExercisesOutputSchema = z.object({
  exercises: z
    .array(z.string())
    .describe('A list of exercises generated from the audio transcript.'),
});
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
  The level of the audio is: {{{level}}}

  Transcript: {{{audioTranscript}}}

  Generate a variety of exercises, including:
  - Multiple choice questions about vocabulary
  - Translation exercises (English to German and German to English)
  - Fill-in-the-blank exercises
  - Questions testing comprehension of the audio

  The exercises should be appropriate for the given level. Return the exercises as a JSON array of strings.
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
    return output!;
  }
);
