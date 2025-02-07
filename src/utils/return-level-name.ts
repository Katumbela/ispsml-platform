export function GetLevelDescription(
  level:
    | undefined
    | "bacharel"
    | "undergraduation"
    | "professional"
    | "master"
    | "pos-graduation"
    | "preparatory"
): string {
  switch (level) {
    case "bacharel":
      return "Bacharelado";
    case "undergraduation":
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
