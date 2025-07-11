// Capitalize huruf pertama
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Format nomor agar ada decimal dan separator lokal
export function formatNumber(number) {
  return number.toLocaleString("id-ID", {
    style: "decimal",
  });
}
