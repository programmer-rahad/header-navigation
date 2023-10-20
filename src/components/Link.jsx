function Link({ to }) {
  return (
    <li>
      <a href={to}>{to === '/' ? 'home' : to.slice(1)}</a>
    </li>
  );
}

export default Link;
