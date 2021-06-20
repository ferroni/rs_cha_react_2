interface HeaderProps {
    title: String,
}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
  );
}