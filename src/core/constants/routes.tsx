export enum ROUTE_LIST {
  BOTTOM_TAB = "BOTTOM_TAB",
  HOME_TAB = "HOME_TAB",
  DEBIT_CARD_TAB = "DEBIT_CARD_TAB",
  PAYMENTS_TAB = "PAYMENTS_TAB",
  CREDIT_TAB = "CREDIT_TAB",
  PROFILE_TAB = "PROFILE_TAB",
  SPENDING_LIMIT_SCREEN = "SPENDING_LIMIT_SCREEN",
}

export const ROUTE_TITLE = {
  [ROUTE_LIST.HOME_TAB]: "Home",
  [ROUTE_LIST.DEBIT_CARD_TAB]: "Debit Card",
  [ROUTE_LIST.PAYMENTS_TAB]: "Payments",
  [ROUTE_LIST.CREDIT_TAB]: "Credit",
  [ROUTE_LIST.PROFILE_TAB]: "Profile",
  [ROUTE_LIST.SPENDING_LIMIT_SCREEN]: "Spending Limit",
};
