import styles from "./CountryItem.module.css";
import FlagEmoji from "./FlagEmoji";
function CountryItem({ country, countryFlag }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <FlagEmoji code={countryFlag}/>
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
