'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AudioPlayerProps {
  src: string;
  transcript?: string;
}

export default function AudioPlayer({ src, transcript }: AudioPlayerProps) {
  return (
    <div className="space-y-4">
      <audio controls src={src} className="w-full rounded-md shadow-sm">
        Your browser does not support the audio element.
      </audio>
      {transcript && (
        <Card className="border-dashed">
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Транскрипция</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <ScrollArea className="h-32 w-full rounded-md border p-3 text-sm bg-muted/50">
              <p className="whitespace-pre-line leading-relaxed">{transcript}</p>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
