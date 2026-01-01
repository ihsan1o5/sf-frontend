// this function will convert the createdAt to this format: "Aug 20, 2023"
export function formatPublishedDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}