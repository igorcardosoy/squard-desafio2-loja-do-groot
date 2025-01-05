import Plant from './Plant';
import PlantType from './PlantType';
import PlantTypePlant from './PlantTypePlant';

Plant.belongsToMany(PlantType, {
  through: PlantTypePlant,
  foreignKey: 'plantId',
  as: 'plantTypes',
});

PlantType.belongsToMany(Plant, {
  through: PlantTypePlant,
  foreignKey: 'plantTypeId',
  as: 'plants',
});