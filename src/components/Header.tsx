import logo from "/src/images/logo.png";

export default function Headers() {
  return (
    <header className="flex justify-center items-center py-5">
      <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
    </header>
  );
}
