type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const ItemList = <T,>({ items, renderItem }: ItemListProps<T>) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item)}</li>
    ))}
  </ul>
);