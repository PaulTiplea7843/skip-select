function sort(arr, caseType, key) {
  switch (caseType) {
    case "asc":
      return arr.sort((a, b) => a[key] - b[key]);
    case "desc":
      return arr.sort((a, b) => b[key] - a[key]);
    case "under-10":
      return arr.filter((item) => item[key] < 10);
    case "more-10":
      return arr.filter((item) => item[key] > 10);
    default:
      throw new Error(
        "Invalid caseType. Use 'asc', 'desc', 'under-10', or 'more-10'."
      );
  }
}

export default sort;
