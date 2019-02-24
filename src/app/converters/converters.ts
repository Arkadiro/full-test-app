const GetDate = (date: string): string => {
  const d = new Date(date);
  let day: string | number = d.getDate() + 1;
  let month: string | number = d.getMonth() + 1;
  const year = d.getFullYear();
  if ( day < 10 ) { day = '0' + day; }
  if ( month < 10 ) { month = '0' + month; }
  return `${day}.${month}.${year}`;
};

export {
  GetDate
};
