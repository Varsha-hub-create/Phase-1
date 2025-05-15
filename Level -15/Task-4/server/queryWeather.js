import Weather from './weatherModel.js';

export async function getAverageTemperatureData(startDate, endDate) {
  const data = await Weather.find({
    timestamp: {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  });

  if (!data.length) {
    return { average: null, records: [] };
  }

  const avg =
    data.reduce((acc, record) => acc + record.temperature, 0) / data.length;

  return {
    average: avg.toFixed(2),
    records: data.map(r => ({
      temp: r.temperature,
      date: r.timestamp.toISOString().split('T')[0],
    })),
  };
}
