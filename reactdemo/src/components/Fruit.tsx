type Fruit = {
  name: string,
  color: string,
  isAvailable: boolean,
}

type Props = {
  fruit: Fruit
}

export const Fruit = ({ fruit }: Props) => {

  return <li key={fruit.name}>{fruit.name} ({fruit.color})</li>
}