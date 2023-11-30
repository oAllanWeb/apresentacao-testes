function TextField(props) {
  const { name, id, placeholder, label, onChange } = props;
  if (name && id) {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}

        <input
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  }
  return <>Passe um id e um name para o componentes</>;
}

export default TextField;
