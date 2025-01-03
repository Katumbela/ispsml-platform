export function GetLevelDescription(
  level:
    | undefined
    | "bacharel"
    | "graduation"
    | "professional"
    | "master"
    | "pos-graduation"
    | "preparatory"
): string {
  switch (level) {
    case "bacharel":
      return "Bacharelado";
    case "graduation":
      return "Licenciatura";
    case "professional":
      return "Curso Profissional";
    case "master":
      return "Mestrado";
    case "pos-graduation":
      return "Pós-Graduação";
    case "preparatory":
      return "Curso Preparatório";
    default:
      return "Licenciatura";
  }
}
