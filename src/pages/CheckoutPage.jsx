import { MdHourglassEmpty } from "react-icons/md";
import { useSelector } from "react-redux";

import BasketCard from "../components/BasketCard";
import BasketSidbar from "../components/BasketSidbar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <p>Sorry, your shopping cart is empty !!!</p>
        <MdHourglassEmpty />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidbar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
