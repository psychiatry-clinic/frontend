export default (dateString: string) => {
  const date = new Date(dateString)

  return date.toLocaleDateString('en-GB') // Adjust locale according to desired date format
}
