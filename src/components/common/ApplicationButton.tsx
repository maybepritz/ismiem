// Кнопка подачи заявки для переиспользования
import { Button } from "@/components/ui/button";

export const ApplicationButton = () => (
  <a
    href="https://scideck.ru/ismiem2026"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg">
      Подать заявку
    </Button>
  </a>
);

export default ApplicationButton;
