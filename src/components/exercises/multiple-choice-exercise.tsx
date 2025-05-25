'use client';

import type { MultipleChoiceExercise } from '@/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface MultipleChoiceExerciseProps {
  exercise: MultipleChoiceExercise;
  onAnswerChange: (answer: string) => void;
  userAnswer?: string;
  disabled?: boolean;
}

export default function MultipleChoiceExerciseComponent({ 
  exercise, 
  onAnswerChange,
  userAnswer,
  disabled 
}: MultipleChoiceExerciseProps) {
  return (
    <RadioGroup
      value={userAnswer}
      onValueChange={onAnswerChange}
      disabled={disabled}
      className="space-y-3"
    >
      {exercise.options.map((option, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
          <RadioGroupItem 
            value={option} 
            id={`${exercise.id}-option-${index}`}
            className={cn(
              "h-5 w-5",
              userAnswer === option && disabled && exercise.correctAnswer === option && "border-green-500 text-green-500",
              userAnswer === option && disabled && exercise.correctAnswer !== option && "border-red-500 text-red-500"
            )} 
          />
          <Label 
            htmlFor={`${exercise.id}-option-${index}`} 
            className={cn(
              "text-md cursor-pointer flex-1",
              disabled && exercise.correctAnswer === option && "text-green-700 font-semibold",
              userAnswer === option && disabled && exercise.correctAnswer !== option && "text-red-700"
            )}
          >
            {option}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
