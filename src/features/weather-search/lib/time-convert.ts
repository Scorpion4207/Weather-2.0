export const formatTime12To24 = (time: string): string => {
  const [timePart, period] = time.split(" ");
  const [hours, minutes] = timePart.split(":");

  if (period === "PM") {
    return `${+hours + 12}:${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};
