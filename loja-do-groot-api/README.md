# squard-desafio2-loja-do-groot

> localhost:3000/api/plants/

---



## Rotas

A URL base em execução local é:
> localhost:3000

### Rotas da entidade "Plant"

As rotas da entidade "Plant" atuam sobre a tabela "Plant". Nenhuma planta pode ser criada sem um "PlantType".

#### Criar Planta

> POST em /plants/

Exemplo de payload esperado pelo backend:

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

Para criar uma planta, sempre deve ser informado pelo menos um PlantTypeId


#### Editar Planta

> PUT em /plants/:id

Exemplo de payload esperado pelo backend:

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

A planta deve, necessariamente, continuar tendo ao menos um PlantTypeId

#### Listar Plantas

> GET em /plants/

#### Detalhar Planta

> GET em /plants/:id

#### Deletar Planta

> DELETE em /plants/:id



### Rotas da entidade "PlantType"

As rotas da entidade "PlantType" atuam sobre a tabela "PlantType".

#### Criar PlantType

> POST em /plant-types/

Exemplo de payload esperado pelo backend:

{
  "name": "Suculenta"
}

#### Editar PlantType

> PUT em /plant-types/:id

Exemplo de payload esperado pelo backend:

{
  "name": "Suculenta Editada"
}

#### Listar PlantTypes

> GET em /plant-types/

#### Detalhar PlantType

> GET em /plant-types/:id

#### Deletar PlantType

> DELETE em /plant-types/:id