export function getInitialLetterName(label: string) {
  if (!label) {
    return "";
  }

  const palavras = label.split(" ");
  let iniciais = "";

  for (const palavra of palavras) {
    if (palavra.length > 0) {
      iniciais += palavra[0].toUpperCase();
    }
  }

  return iniciais.slice(0, 2);
}
