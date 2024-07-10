import { FunctionComponent } from "react";
import PaymentTypeRow from "./PaymentTypeRow";
import ProfileItems from "./ProfileItems";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.dashboardContentParent}>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardHeader}>
            <h3 className={styles.dashboard}>Dashboard</h3>
            <div className={styles.card}>
              <img
                className={styles.cardChild}
                alt=""
                src="/group-1171274687.svg"
              />
              <div className={styles.cardBalance}>2984 5633 7859 4141</div>
              <div className={styles.cardDetails}>
                <div className={styles.cardHolder}>Card holder</div>
                <div className={styles.derrickFisher}>Derrick Fisher</div>
              </div>
              <div className={styles.cardDecorations}>
                <div className={styles.cardDecorationElements} />
                <div className={styles.cardDecorationElements1} />
                <div className={styles.cardDecorationElements2} />
                <div className={styles.cardDecorationElements3} />
                <img
                  className={styles.cardDecorationsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1171274658.svg"
                />
                <img
                  className={styles.billycartCreditDebitCardSuIcon}
                  alt=""
                  src="/billycart-credit-debit-card-suite-sky-sand-copy@2x.png"
                />
                <img
                  className={styles.contactlessPaymentIcon}
                  loading="lazy"
                  alt=""
                  src="/contactlesspayment.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.upcomingPaymentsParent}>
            <h3 className={styles.upcomingPayments}>Upcoming payments</h3>
            <div className={styles.paymentTypes}>
              <PaymentTypeRow
                armchair="/armchair.svg"
                freelance="Freelance"
                unregularPayment="Unregular payment"
                paymentTypeSeparator="$1,500"
              />
              <PaymentTypeRow
                armchair="/coins.svg"
                freelance="Salary"
                unregularPayment="Regular payment"
                paymentTypeSeparator="$4,000"
              />
            </div>
          </div>
        </div>
        <div className={styles.transactionHeaderParent}>
          <div className={styles.transactionHeader}>
            <div className={styles.transactionsTitleContainer}>
              <h3 className={styles.recentTransactions}>Recent transactions</h3>
            </div>
            <div className={styles.dropdown}>
              <img
                className={styles.dropdownChild}
                alt=""
                src="/rectangle-40375.svg"
              />
              <div className={styles.sortBy}>Sort by</div>
              <div className={styles.filterIconContainer}>
                <img
                  className={styles.caretleftIcon}
                  alt=""
                  src="/caretleft@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.transactionsList}>
            <div className={styles.transactionItems}>
              <div className={styles.frameParent}>
                <div className={styles.taxiParent}>
                  <img
                    className={styles.taxiIcon}
                    loading="lazy"
                    alt=""
                    src="/taxi.svg"
                  />
                  <div className={styles.transactionLabelContainer}>
                    <div className={styles.taxiTrips}>Taxi Trips</div>
                  </div>
                </div>
                <div className={styles.aug20221543Wrapper}>
                  <div className={styles.aug20221543}>03 Aug 2022, 15:43</div>
                </div>
              </div>
              <div className={styles.trainsimpleParent}>
                <img
                  className={styles.trainsimpleIcon}
                  loading="lazy"
                  alt=""
                  src="/trainsimple.svg"
                />
                <div className={styles.publicTransportWrapper}>
                  <div className={styles.publicTransport}>Public Transport</div>
                </div>
                <div className={styles.aug20221258Wrapper}>
                  <div className={styles.aug20221258}>01 Aug 2022, 12:58</div>
                </div>
              </div>
              <div className={styles.airplaneParent}>
                <img
                  className={styles.airplaneIcon}
                  loading="lazy"
                  alt=""
                  src="/airplane.svg"
                />
                <div className={styles.planeTicketsWrapper}>
                  <div className={styles.planeTickets}>Plane Tickets</div>
                </div>
                <div className={styles.jul20222140Wrapper}>
                  <div className={styles.jul20222140}>28 Jul 2022, 21:40</div>
                </div>
              </div>
              <div className={styles.transactionCategoryItemsParent}>
                <ProfileItems
                  userCircle="/gaspump.svg"
                  account="Gas Station"
                  nut="/barbell.svg"
                  settings="Gym"
                  propGap="40px"
                  propWidth="149px"
                  propMinWidth="149px"
                />
                <div className={styles.transactionCategoryMonthsWrapper}>
                  <div className={styles.transactionCategoryMonths}>
                    <div className={styles.jul20220928}>28 Jul 2022, 09:28</div>
                    <div className={styles.jul20221825}>26 Jul 2022, 18:25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.loadMoreContainer}>
              <div className={styles.loadMoreItems}>
                <div className={styles.loadMoreButtons}>$56.50</div>
                <div className={styles.loadMoreButtons1}>$2.50</div>
                <div className={styles.loadMoreButtons2}>$70</div>
                <div className={styles.loadMoreButtons3}>$30.75</div>
                <div className={styles.loadMoreButtons4}>$100.00</div>
              </div>
            </div>
            <div className={styles.transactionsListInner}>
              <div className={styles.moreParent}>
                <img
                  className={styles.moreIcon}
                  loading="lazy"
                  alt=""
                  src="/more.svg"
                />
                <img
                  className={styles.moreIcon1}
                  loading="lazy"
                  alt=""
                  src="/more.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spendingInsights}>
        <img
          className={styles.spendingInsightsChild}
          alt=""
          src="/rectangle-40459.svg"
        />
        <div className={styles.spendingContent}>
          <div className={styles.spentThisDayParent}>
            <div className={styles.spentThisDay}>Spent this day</div>
            <div className={styles.dailySpendingChart}>
              <div className={styles.spendingAmountArea}>
                <div className={styles.dailySpendingValue}>
                  <div className={styles.spendingValue}>$259.75</div>
                  <div className={styles.valueBackground}>
                    <div className={styles.valueContainer}>
                      <div className={styles.currencySymbol}>300</div>
                      <div className={styles.amountValue}>
                        <div className={styles.amountContainer}>
                          <img
                            className={styles.amountContainerChild}
                            loading="lazy"
                            alt=""
                            src="/rectangle-40355.svg"
                          />
                          <div className={styles.amountDecimal}>$259.75</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chartArea}>
                      <div className={styles.chartElements}>
                        <div className={styles.chartElementOne} />
                        <div className={styles.chartElementTwo} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dropdown1}>
                  <img
                    className={styles.dropdownItem}
                    alt=""
                    src="/rectangle-40375-1.svg"
                  />
                  <div className={styles.week}>Week</div>
                  <div className={styles.caretleftWrapper}>
                    <img
                      className={styles.caretleftIcon1}
                      alt=""
                      src="/caretleft@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.totalSpending}>
                <div className={styles.totalSpendingValue}>200</div>
                <div className={styles.totalSpendingIcon}>
                  <img
                    className={styles.totalSpendingIconChild}
                    alt=""
                    src="/vector-941.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statisticsContentWrapper}>
          <div className={styles.statisticsContent}>
            <div className={styles.statisticsHeader}>
              <div className={styles.statisticsTitle}>
                <div className={styles.div}>100</div>
                <div className={styles.statisticsSubtitle}>
                  <div className={styles.titleExplanation}>0</div>
                </div>
              </div>
              <div className={styles.comparisonChartWrapper}>
                <div className={styles.comparisonChart}>
                  <img
                    className={styles.comparisonBarsIcon}
                    alt=""
                    src="/vector-941.svg"
                  />
                  <img
                    className={styles.comparisonBarsIcon1}
                    alt=""
                    src="/vector-941.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.daysOfWeekWrapper}>
              <div className={styles.daysOfWeek}>
                <div className={styles.dayOfWeekLabels}>
                  <div className={styles.sun}>Sun</div>
                </div>
                <div className={styles.mon}>Mon</div>
                <div className={styles.dayOfWeekLabels1}>
                  <div className={styles.tue}>Tue</div>
                </div>
                <div className={styles.dayOfWeekLabels2}>
                  <div className={styles.wed}>Wed</div>
                </div>
                <div className={styles.dayOfWeekLabels3}>
                  <div className={styles.thu}>Thu</div>
                </div>
                <div className={styles.fri}>Fri</div>
                <div className={styles.sat}>Sat</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.spendingInsightsItem}
          alt=""
          src="/vector-941.svg"
        />
        <div className={styles.graphArea}>
          <img
            className={styles.graphAreaChild}
            loading="lazy"
            alt=""
            src="/vector-944.svg"
          />
          <div className={styles.graphBackground} />
        </div>
        <div className={styles.cardContainerParent}>
          <div className={styles.cardContainer}>
            <h3 className={styles.availableCards}>Available cards</h3>
            <div className={styles.viewAllButton}>
              <div className={styles.viewAll}>View all</div>
            </div>
          </div>
          <div className={styles.cardsList}>
            <div className={styles.cardItems}>
              <img
                className={styles.cardItemsChild}
                alt=""
                src="/rectangle-40468.svg"
              />
              <div className={styles.cardSeparatorOneParent}>
                <div className={styles.cardSeparatorOne}>98,500</div>
                <div className={styles.currencyCardsOne}>
                  <div className={styles.aud}>AUD</div>
                </div>
              </div>
              <div className={styles.cardSeparatorTwoWrapper}>
                <div className={styles.cardSeparatorTwo}>...4141</div>
              </div>
            </div>
            <div className={styles.cardItems1}>
              <img
                className={styles.cardItemsItem}
                alt=""
                src="/rectangle-40468.svg"
              />
              <div className={styles.parent}>
                <div className={styles.div1}>76,280</div>
                <div className={styles.eurWrapper}>
                  <div className={styles.eur}>EUR</div>
                </div>
              </div>
              <div className={styles.cardItemsInner}>
                <div className={styles.cardPlaceholderParent}>
                  <div className={styles.cardPlaceholder}>...8345</div>
                  <div className={styles.imagePlaceholder}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationControls}>
          <img
            className={styles.navigationControlsChild}
            alt=""
            src="/rectangle-40456.svg"
          />
          <img
            className={styles.navigationElementsIcon}
            loading="lazy"
            alt=""
            src="/vector-949.svg"
          />
          <img
            className={styles.navigationElementsIcon1}
            loading="lazy"
            alt=""
            src="/vector-949.svg"
          />
          <img
            className={styles.navigationElementsIcon2}
            loading="lazy"
            alt=""
            src="/vector-949.svg"
          />
          <img
            className={styles.navigationElementsIcon3}
            loading="lazy"
            alt=""
            src="/vector-949.svg"
          />
          <img
            className={styles.navigationControlsItem}
            alt=""
            src="/rectangle-40464.svg"
          />
          <img
            className={styles.navigationControlsInner}
            alt=""
            src="/rectangle-40463.svg"
          />
          <img
            className={styles.moreIcon2}
            loading="lazy"
            alt=""
            src="/more.svg"
          />
          <img
            className={styles.moreIcon3}
            loading="lazy"
            alt=""
            src="/more.svg"
          />
          <img
            className={styles.moreIcon4}
            loading="lazy"
            alt=""
            src="/more.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
