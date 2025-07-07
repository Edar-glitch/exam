type Props = {
  name: string;
  age: number;
};

const Profile: React.FC<Props> = ({ name, age }) => (
  <p>{name} — {} лет</p>
);