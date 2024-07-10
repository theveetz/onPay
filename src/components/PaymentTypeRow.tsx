import { FunctionComponent } from "react";
import styles from "./PaymentTypeRow.module.css";

export type PaymentTypeRowType = {
  className?: string;
  armchair?: string;
  freelance?: string;
  unregularPayment?: string;
  paymentTypeSeparator?: string;
};

const PaymentTypeRow: FunctionComponent<PaymentTypeRowType> = ({
  className = "",
  armchair,
  freelance,
  unregularPayment,
  paymentTypeSeparator,
}) => {
  return (
    <div className={[styles.paymentTypeRow, className].join(" ")}>
      <img
        className={styles.paymentTypeRowChild}
        alt=""
        src="/rectangle-40457.svg"
      />
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-40465.svg" />
        <img
          className={styles.armchairIcon}
          loading="lazy"
          alt=""
          src={armchair}
        />
      </div>
      <div className={styles.freelanceParent}>
        <div className={styles.freelance}>{freelance}</div>
        <div className={styles.unregularPayment}>{unregularPayment}</div>
      </div>
      <div className={styles.paymentTypeSeparator}>{paymentTypeSeparator}</div>
    </div>
  );
};

export default PaymentTypeRow;
