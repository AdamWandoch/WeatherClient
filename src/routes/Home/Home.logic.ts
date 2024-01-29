type CardinalPoint = {
  abbreviation: string;
  azimuthDegrees: number;
};

const cardinalPointsData: CardinalPoint[] = [
  { abbreviation: 'N', azimuthDegrees: 0.0 },
  { abbreviation: 'NNE', azimuthDegrees: 22.5 },
  { abbreviation: 'NE', azimuthDegrees: 45.0 },
  { abbreviation: 'ENE', azimuthDegrees: 67.5 },
  { abbreviation: 'E', azimuthDegrees: 90.0 },
  { abbreviation: 'ESE', azimuthDegrees: 112.5 },
  { abbreviation: 'SE', azimuthDegrees: 135.0 },
  { abbreviation: 'SSE', azimuthDegrees: 157.5 },
  { abbreviation: 'S', azimuthDegrees: 180.0 },
  { abbreviation: 'SSW', azimuthDegrees: 202.5 },
  { abbreviation: 'SW', azimuthDegrees: 225.0 },
  { abbreviation: 'WSW', azimuthDegrees: 247.5 },
  { abbreviation: 'W', azimuthDegrees: 270.0 },
  { abbreviation: 'WNW', azimuthDegrees: 292.5 },
  { abbreviation: 'NW', azimuthDegrees: 315.0 },
  { abbreviation: 'NNW', azimuthDegrees: 337.5 },
];

export const getWindRotation = (abbreviation: string) => {
  const deg = cardinalPointsData.find((x) => x.abbreviation === abbreviation);
  return `${deg?.azimuthDegrees ?? 0 - 180}deg`;
};
