export default function() {
  // console.log(new Intl.DateTimeFormat('ko', {dateStyle: "full", timeStyle: "medium"}).format(Date.parse('2023-05-15T02:00:00')));
  console.log(new Intl.RelativeTimeFormat('ko', {style: "long", numeric: "auto"}, ()))
  
}