import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users } from "lucide-react";
import Link from "next/link";

export default function DevelopersPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="h-10 w-10 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">О разработчиках</CardTitle>
          </div>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Информация и контакты для связи.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md">
            Это приложение разрабатывается с любовью и энтузиазмом, чтобы помочь вам в изучении немецкого языка!
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Контактная информация:</h3>
            <div className="flex items-center gap-2 text-md">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>Email:</span>
              <Link href="mailto:kalchenko2022@gmail.com" className="text-primary hover:underline">
                kalchenko2022@gmail.com
              </Link>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Если у вас есть вопросы, предложения или вы обнаружили ошибку, пожалуйста, свяжитесь с нами.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
