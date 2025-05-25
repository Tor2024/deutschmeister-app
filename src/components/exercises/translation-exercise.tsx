'use client';

import type { TranslationExercise } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface TranslationExerciseProps {
  exercise: TranslationExercise;
  onAnswerChange: (answer: string) => void;
  userAnswer?: string;
  disabled?: boolean;
}

export default function TranslationExerciseComponent({
  exercise,
  onAnswerChange,
  userAnswer,
  disabled,
}: TranslationExerciseProps) {
  return (
    <div className="space-y-3">
      <p className="text-md italic text-muted-foreground">
        "{exercise.prompt}" ({exercise.languageDirection === 'to_german' ? 'на немецкий' : 'с немецкого'})
      </p>
      <Textarea
        value={userAnswer || ''}
        onChange={(e) => onAnswerChange(e.target.value)}
        disabled={disabled}
        placeholder="Ваш перевод..."
        className={cn(
          "min-h-[80px] text-md",
          disabled && userAnswer?.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim() && "border-green-500 bg-green-50 text-green-700",
          disabled && userAnswer?.toLowerCase().trim() !== exercise.correctAnswer.toLowerCase().trim() && "border-red-500 bg-red-50 text-red-700"
        )}
      />
    </div>
  );
}
