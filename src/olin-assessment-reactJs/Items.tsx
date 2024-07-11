interface ItemsProps {
  listItem: string[];
}

const Items: React.FC<ItemsProps> = ({ listItem }) => {
  return (
    <div>
      <ul className="list-disc">
        {listItem.map((item, index) => (
          <li className="text-[20px]" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
