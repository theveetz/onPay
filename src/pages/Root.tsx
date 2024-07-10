import { FunctionComponent } from "react";
import ProfileItems from "../components/ProfileItems";
import MainContent from "../components/MainContent";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <header className={styles.menu}>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <div className={styles.menuItem1}>
              <div className={styles.menuItem2}>
                <img
                  className={styles.menuItemChild}
                  loading="lazy"
                  alt=""
                  src="/group-1171274689.svg"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-40462.svg"
                />
                <img
                  className={styles.magnifyingglassIcon}
                  alt=""
                  src="/magnifyingglass.svg"
                />
                <div className={styles.search}>Search</div>
              </div>
            </div>
          </div>
          <div className={styles.userMenu}>
            <div className={styles.languageMenu}>
              <div className={styles.en}>EN</div>
            </div>
            <div className={styles.notificationMenu}>
              <img
                className={styles.bellIcon}
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
            </div>
            <img
              className={styles.userAvatarIcon}
              loading="lazy"
              alt=""
              src="/ellipse-6286@2x.png"
            />
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.navigation}>
          <div className={styles.navbar}>
            <div className={styles.navLinks}>
              <button className={styles.navLinkOverview}>
                <div className={styles.overview}>Overview</div>
                <div className={styles.overviewIcon}>
                  <img className={styles.houseIcon} alt="" src="/house.svg" />
                  <img
                    className={styles.overviewChevronIcon}
                    alt=""
                    src="/overview-chevron.svg"
                  />
                </div>
              </button>
              <div className={styles.navLinkActions}>
                <div className={styles.messageNotification}>
                  <img
                    className={styles.envelopeIcon}
                    loading="lazy"
                    alt=""
                    src="/envelope.svg"
                  />
                  <div className={styles.messageLabel}>
                    <div className={styles.messages}>Messages</div>
                  </div>
                  <div className={styles.messageCounter}>
                    <div className={styles.messageCountValue}>
                      <img
                        className={styles.messageCountValueChild}
                        alt=""
                        src="/rectangle-40461.svg"
                      />
                      <div className={styles.counterValue}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.actionIcons}>
                  <img
                    className={styles.chatscircleIcon}
                    loading="lazy"
                    alt=""
                    src="/chatscircle.svg"
                  />
                  <div className={styles.communityWrapper}>
                    <div className={styles.community}>Community</div>
                  </div>
                </div>
                <div className={styles.actionIcons1}>
                  <img
                    className={styles.cardholderIcon}
                    loading="lazy"
                    alt=""
                    src="/cardholder.svg"
                  />
                  <div className={styles.paymentsWrapper}>
                    <div className={styles.payments}>Payments</div>
                  </div>
                </div>
                <div className={styles.actionIcons2}>
                  <img
                    className={styles.chartpieIcon}
                    loading="lazy"
                    alt=""
                    src="/chartpie.svg"
                  />
                  <div className={styles.statisticsWrapper}>
                    <div className={styles.statistics}>Statistics</div>
                  </div>
                </div>
                <div className={styles.actionIcons3}>
                  <img
                    className={styles.starfourIcon}
                    loading="lazy"
                    alt=""
                    src="/starfour.svg"
                  />
                  <div className={styles.referralsWrapper}>
                    <div className={styles.referrals}>Referrals</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navLinkProfile}>
              <ProfileItems
                userCircle="/usercircle.svg"
                account="Account"
                nut="/nut.svg"
                settings="Settings"
              />
            </div>
          </div>
        </div>
        <MainContent />
      </main>
    </div>
  );
};

export default Root;
