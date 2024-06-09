const getDay = (value) => {
    const date = new Date(value);
    let day = date.getDate();
    if(String(day).length === 1) day = "0" + day;
    return day;
}

const getMonth = (value) => {
    const date = new Date(value);
    let month = date.getMonth()+1;
    if(String(month).length === 1) month = "0" + month;
    return month;
}

const getYear = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    return year;
}

export const formatDate = (value) => {
    const day = getDay(value);
    const month = getMonth(value);
    const year = getYear(value);
    return `${day}-${month}-${year}`;
}