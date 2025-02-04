export function formatToColombianPesos(amount: number): string {
  // Verificar que el valor sea un número
  if (isNaN(amount)) {
    throw new Error("El valor proporcionado no es un número válido.");
  }

  // Formatear el número con separadores de miles y el símbolo de pesos
  const formattedAmount = amount.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedAmount;
}
