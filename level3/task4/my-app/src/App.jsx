const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

export default function ItemList({ itemsList = items }) {
  return (
    <ul>
      {itemsList.map((item) => (
        <li key={item.id}>{item.name}</li> 
      ))}
    </ul>
  );
}
