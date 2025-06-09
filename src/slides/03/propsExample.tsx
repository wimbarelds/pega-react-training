interface User {
  name: string;
  age: number;
}

export function Parent() {
  const user: User = { name: 'Sofie', age: 28 };

  const handleClick = () => {
    alert(`${user.name} clicked the button!`);
  };

  return <Child user={user} onClick={handleClick} />;
}

interface ChildProps {
  user: User;
  onClick: () => void;
}

function Child({ user, onClick }: ChildProps) {
  return (
    <div>
      <p>
        Naam: {user.name}, Leeftijd: {user.age}
      </p>
      <button onClick={onClick}>Klik hier</button>
    </div>
  );
}
