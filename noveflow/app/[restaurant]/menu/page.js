import { getMenu } from "@/lib/menu.js";

export default async function Page({ params }) {
  const { restaurant } = await params;

  const menu = getMenu(restaurant);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Menu for {restaurant}</h1>

      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}