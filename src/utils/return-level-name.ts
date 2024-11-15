export function GetLevelDescription(
  level:
    | undefined
    | "bacharel"
    | "graduation"
    | "professional"
    | "master"
    | "pos-graduation"
): string {
  switch (level) {
    case "bacharel":
      return "Bacharelado";
    case "graduation":
      return "Licenciatura";
    case "professional":
      return "Profissional";
    case "master":
      return "Mestrado";
    case "pos-graduation":
      return "Pós-Graduação";
    default:
      return "Licenciatura";
  }
}
