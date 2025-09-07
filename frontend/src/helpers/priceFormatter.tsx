const formatPrice = (cents: number, currency: string = "USD"): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(cents / 100);
}
export default formatPrice