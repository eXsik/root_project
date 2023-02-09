const Button = ({ styles, text, icon, onClick, type }) => (
  <button type={type ? type : 'button'} className={`py-4 px-6 font-poppins font-medium text-[18px] uppercase text-primary bg-secondary border-2 border-secondary transition duration-400 ease-out shadow outline-none flex items-center ${styles}`}>
    <span className={icon ? 'mr-2' : ''}>{ text }</span> { icon ? icon : null}
  </button>
);

export default Button;