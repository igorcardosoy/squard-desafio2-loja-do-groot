
# Routes Information

Base URL for local server execution:
> localhost:3000

## Routes for the "Plant" Entity

The routes for the "Plant" entity interact with the "Plant" table. No plant can be created without at least having a "PlantType".

### Create Plant

> POST at /plants/

Example of the payload expected by the backend:

```json
{
  "name": "Rubber Plant",
  "subtitle": "A Bold Plant for Stylish Interiors",
  "plantTypeId": [1, 5],
  "price": 129.99,
  "isInSale": true,
  "discountPercentage": 20,
  "features": "Species: Ficus elastica.",
  "description": "The Rubber Plant is a versatile and easy-to-care-for plant that makes a bold statement in any indoor space. Its glossy, dark green leaves bring a modern and clean aesthetic.",
  "imgUrl": "https://example.com/images/rubber-plant.jpg"
}
```

Emphasizing that, to create a plant, at least one PlantTypeId must always be provided.

### Edit Plant

> PUT at /plants/:id

Example of the payload expected by the backend:

```json
{
  "name": "Rubber Plant Edited",
  "subtitle": "A Bold Plant for Stylish Interiors",
  "plantTypeId": [1, 5],
  "price": 229.99,
  "isInSale": true,
  "discountPercentage": 10,
  "features": "Species: Ficus elastica.",
  "description": "The Rubber Plant is a versatile and easy-to-care-for plant that makes a bold statement in any indoor space. Its glossy, dark green leaves bring a modern and clean aesthetic.",
  "imgUrl": "https://example.com/images/rubber-plant.jpg"
}
```

The plant must necessarily continue having at least one PlantTypeId.

### List Plants

> GET at /plants/

### Get Plant Details

> GET at /plants/:id

### Delete Plant

> DELETE at /plants/:id

## Routes for the "PlantType" Entity

The routes for the "PlantType" entity interact with the "PlantType" table.

### Create PlantType

> POST at /plant-types/

Example of the payload expected by the backend:

```json
{
  "name": "Succulent"
}
```

### Edit PlantType

> PUT at /plant-types/:id

Example of the payload expected by the backend:

```json
{
  "name": "Edited Succulent"
}
```

### List PlantTypes

> GET at /plant-types/

### Get PlantType Details

> GET at /plant-types/:id

### Delete PlantType

> DELETE at /plant-types/:id
