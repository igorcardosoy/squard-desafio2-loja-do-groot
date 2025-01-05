import Plant from '../models/Plant';

export const getAllPlants = async () => {
  return await Plant.findAll();
};
