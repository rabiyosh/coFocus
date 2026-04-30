function Inputs({ value, placeholder, className = "", ...props }) {
    return (
        <input
            type="text"
            value={value}
      
            placeholder={placeholder}
            className={`input ${className} `}
            {...props}
        />
    );
}

export default Inputs;
