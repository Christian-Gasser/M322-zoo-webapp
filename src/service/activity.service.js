import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import activities from '../data/activities.json';
import { checkIfIsBetween } from '../service/dayjs.service.js';

dayjs.extend(isSameOrBefore);

export const getActivityList = (name, startDate, endDate) => {
    const filterDate = startDate !== '' || endDate !== '' ? true : false;
    let preparedActivities = [];
    activities.forEach(activity => {
        preparedActivities = [
            ...preparedActivities,
            ...activity.executions.map(execution => {
                return {
                    activityId: activity.id,
                    executionId: execution.id,
                    title: activity.title,
                    imageUrl: activity.imageUrl,
                    startDate: execution.startDate,
                    endDate: execution.endDate,
                    location: execution.location,
                    info: execution.info
                }
            })
        ]
    });

    const sortedActivities = preparedActivities.sort((a, b) =>
        dayjs(b.startDate).isSameOrBefore(dayjs(a.startDate)) ? 1 : -1
    );

    const filteredActivities = sortedActivities.filter(activity => {
        if (name !== '' && !activity.title.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }
        if (filterDate && !checkIfIsBetween(activity.startDate, activity.endDate, startDate || undefined, endDate || undefined)) {
            return false;
        }
        return true;
    });
    console.log(filteredActivities);
    return filteredActivities;
};


export const getDetails = (activityId, executionId) => {
    const activity = activities.find(activity => activity.id === activityId);
    if (!activity) {
        return null;
    }
    const execution = activity.executions.find(execution => execution.id === executionId);
    if (!execution) {
        return null;
    }
    return {
        activityId: activity.id,
        executionId: execution.id,
        ...activity,
        ...execution,
        id: undefined,
    };
};


export const getActivityListForActivity = (activityId, startDate, endDate) => {
    const filterDate = startDate !== '' || endDate !== '' ? true : false;
    const activity = activities.find(activity => activity.id === activityId);
    if (!activity) {
        return [];
    }
    const preparedActivities = activity.executions.map(execution => {
        return {
            activityId: activity.id,
            executionId: execution.id,
            title: activity.title,
            imageUrl: activity.imageUrl,
            startDate: execution.startDate,
            endDate: execution.endDate,
            location: execution.location,
            info: execution.info
        }
    });

    const sortedActivities = preparedActivities.sort((a, b) =>
        dayjs(b.startDate).isSameOrBefore(dayjs(a.startDate)) ? 1 : -1
    );

    return sortedActivities.filter(activity => {
        if (filterDate && !checkIfIsBetween(activity.startDate, activity.endDate, startDate, endDate)) {
            return false;
        }
        return true;
    });
};

export const getActivityTitle = (activityId) => {
    const activity = activities.find(activity => activity.id === parseInt(activityId));
    return activity ? activity.title : '';
}