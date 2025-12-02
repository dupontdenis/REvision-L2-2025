const pizzas = [
  { id: "d8a1b4b4-6f2b-4c7b-9d7f-1a2c3b4d5e01", name: "Margherita" },
  { id: "e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02", name: "Regina" },
  { id: "f1c3d5e7-8a9b-4c2d-9e0f-3b4a5c6d7e03", name: "Quattro Formaggi" },
  { id: "a2b3c4d5-e6f7-4a8b-9c0d-4e5f6a7b8c04", name: "Diavola" },
];

const ingredients = [
  {
    id: "9f1a2b3c-4d5e-4f70-8a9b-0c1d2e3f4a55",
    name: "tomate",
    pizzas: [
      "d8a1b4b4-6f2b-4c7b-9d7f-1a2c3b4d5e01",
      "e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02",
      "f1c3d5e7-8a9b-4c2d-9e0f-3b4a5c6d7e03",
      "a2b3c4d5-e6f7-4a8b-9c0d-4e5f6a7b8c04",
    ],
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d66",
    name: "mozzarella",
    pizzas: [
      "d8a1b4b4-6f2b-4c7b-9d7f-1a2c3b4d5e01",
      "e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02",
      "f1c3d5e7-8a9b-4c2d-9e0f-3b4a5c6d7e03",
    ],
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e77",
    name: "jambon",
    pizzas: ["e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02"],
  },
  {
    id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7888",
    name: "gorgonzola",
    pizzas: ["f1c3d5e7-8a9b-4c2d-9e0f-3b4a5c6d7e03"],
  },
  {
    id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8999",
    name: "salami piquant",
    pizzas: ["a2b3c4d5-e6f7-4a8b-9c0d-4e5f6a7b8c04"],
  },
];
export { pizzas, ingredients };
