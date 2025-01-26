import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const getFormattedDate = (date) => {
    const weekdayInt = dayjs(date).day();
    let weekday = "";
    switch (weekdayInt) {
        case 0:
            weekday = "Sonntag";
            break;
        case 1:
            weekday = "Montag";
            break;
        case 2:
            weekday = "Dienstag";
            break;
        case 3:
            weekday = "Mittwoch";
            break;
        case 4:
            weekday = "Donnerstag";
            break;
        case 5:
            weekday = "Freitag";
            break;
        case 6:
            weekday = "Samstag";
            break;
        default:
            weekday = "";
    }
    return dayjs(date).format(`[${weekday}], DD.MM.YYYY`);
}

export const getFormattedTime = (date) => {
    return dayjs(date).format("HH:mm");
}

export const checkIfIsBetween = (startDate, endDate, startTimeSpan, endTimeSpan) => {
    if (startTimeSpan && !endTimeSpan) {
        return dayjs(startDate).isAfter(startTimeSpan);
    }
    if (endTimeSpan && !startTimeSpan) {
       return dayjs(endDate).isBefore(endTimeSpan).add(1, 'day');
    }
    return dayjs(startDate).isBetween(startTimeSpan, dayjs(endTimeSpan).add(1, 'day')) && dayjs(endDate).isBetween(startTimeSpan, dayjs(endTimeSpan).add(1, 'day'));
}