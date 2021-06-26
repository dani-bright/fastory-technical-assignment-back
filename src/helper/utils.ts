import nodeFetch from 'node-fetch';

export const getAll = async (url) => {
    const response = await nodeFetch(url);
    const data = await response.json();
    const pageNumber = Math.round(data.count / 10);
    const array = data.results;
    const results = [];
    for (let i = 2; i <= pageNumber; i++) {
        const nextResults = await nodeFetch(`${ url }?page=${ i }`);
        const nextResultsData = await nextResults.json();
        results.push(nextResultsData.results);
    }
    return array.concat(...results);
};