export function InputComLabel({ label, id, defaultValue, type = "text" }) {
  return (
    <div className="mt-2">
      <label htmlFor={id} className="label">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        defaultValue={defaultValue}
        required
        className="input focus:outline-none focus:bg-white"
      />
    </div>
  );
}

export function SelectComLabel({ label, id, choices }) {
  return (
    <div className="mt-2">
      <label htmlFor={id} className="label">
        {label}:
      </label>
      <select
        id={id}
        name={id}
        className="input focus:outline-none focus:bg-white"
      >
        {choices.map((choice) => (
          <option value={choice.value} key={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
    </div>
  );
}
