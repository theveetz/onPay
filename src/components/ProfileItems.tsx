import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProfileItems.module.css";

export type ProfileItemsType = {
  className?: string;
  userCircle?: string;
  account?: string;
  nut?: string;
  settings?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ProfileItems: FunctionComponent<ProfileItemsType> = ({
  className = "",
  userCircle,
  account,
  nut,
  settings,
  propGap,
  propWidth,
  propMinWidth,
}) => {
  const profileItemsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propGap, propWidth, propMinWidth]);

  return (
    <div
      className={[styles.profileItems, className].join(" ")}
      style={profileItemsStyle}
    >
      <div className={styles.usercircleParent}>
        <img
          className={styles.usercircleIcon}
          loading="lazy"
          alt=""
          src={userCircle}
        />
        <div className={styles.accountWrapper}>
          <div className={styles.account}>{account}</div>
        </div>
      </div>
      <div className={styles.nutParent}>
        <img className={styles.nutIcon} loading="lazy" alt="" src={nut} />
        <div className={styles.settingsWrapper}>
          <div className={styles.settings}>{settings}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItems;
