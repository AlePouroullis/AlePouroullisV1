export default class dateFormatter {
   public static MONTHS = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
   public static getDate(date: Date) {
      return `${dateFormatter.MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
   }
}