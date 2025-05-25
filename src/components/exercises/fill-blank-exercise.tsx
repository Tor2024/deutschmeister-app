'use client';

import type { FillInTheBlankExercise } from '@/types';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface FillInTheBlankExerciseProps {
  exercise: FillInTheBlankExercise;
  onAnswerChange: (answer: string) => void;
  userAnswer?: string;
  disabled?: boolean;
}

export default function FillInTheBlankExerciseComponent({
  exercise,
  onAnswerChange,
  userAnswer,
  disabled,
}: FillInTheBlankExerciseProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-md">
      <span>{exercise.sentenceParts[0]}</span>
      <Input
        type="text"
        value={userAnswer || ''}
        onChange={(e) => onAnswerChange(e.target.value)}
        disabled={disabled}
        className={cn(
          "w-32 md:w-40 h-10 text-md px-2 py-1",
          disabled && userAnswer?.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim() && "border-green-500 bg-green-50 text-green-700",
          disabled && userAnswer?.toLowerCase().trim() !== exercise.correctAnswer.toLowerCase().trim() && "border-red-500 bg-red-50 text-red-700"
        )}
        placeholder="Ответ"
      />
      <span>{exercise.sentenceParts[1]}</span>
    </div>
  );
}
