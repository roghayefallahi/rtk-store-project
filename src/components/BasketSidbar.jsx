import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";

import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";
import styles from "./BasketSidebar.module.css";

function BasketSidbar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
}

export default BasketSidbar;
