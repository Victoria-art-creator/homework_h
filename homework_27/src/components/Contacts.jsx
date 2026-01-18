import Link from "./Link";

const Contacts = () => {
  return (
    <ul>
      <li>
        Phone number: <Link href="tel: +34234534">+34234534</Link>
      </li>
      <li>
        Email: <Link href="mailto: someone@gmail.com">someone@gmail.com</Link>
      </li>
      <li>
        Git: <Link href="https://github.com/test">https://github.com/test</Link>
      </li>
    </ul>
  );
};

export default Contacts;
