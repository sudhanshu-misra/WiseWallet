//AUTHENTICATION
import Onboarding from '../screens/Auth/Onboarding';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import Verification from '../screens/Auth/Verification';
import BottomTab from './BottomTab';
import DrawerNav from './DrawerNavigator';

//HOME
import BudgetHome from '../screens/Budget/Budget';
import GoalHome from '../screens/Goal/Goal';
import DashboardHome from '../screens/Dashboard/Dashboard';
import WalletHome from '../screens/Wallet/Wallet';

//User Profile

//User Profile
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';

//GOAL

//WALLET-CARD
import Cash from '../screens/Wallet/WalletScreen/Cash';
import Card from '../screens/Wallet/WalletScreen/Card';
import Upi from '../screens/Wallet/WalletScreen/Upi';

//INCOME
import IncomeHome from '../screens/Dashboard/FullScreen/Income';
import ExpenseHome from '../screens/Dashboard/FullScreen/Expense';

//FILTER
import Filter from '../screens/Filter';

//MARKET
import MarketBottomTab from './MarketBottomTab';
import MarketHome from '../screens/Market/MarketHome';
import Payment from '../screens/Market/Payment.js';


//Notification
import Notification from '../screens/notification/Notification';
import MarketFilter from '../screens/Market/filter/MarketFilter.js';

//My listings
import MyListing from '../screens/MyListings/MyListing.js';
import SellScreen from '../screens/Sell/SellScreen.js';

const Screens = {
  UNAUTHENTICATED: [
    {name: 'Onboarding', component: Onboarding},
    {name: 'Signup', component: Signup},
    {name: 'Login', component: Login},
    {name: 'Verification', component: Verification},
  ],
  WALLET: [
    {name: 'DrawerNav', component: DrawerNav},
    {name: 'Tabs', component: BottomTab},
    {name: 'BudgetHome', component: BudgetHome},
    {name: 'DashboardHome', component: DashboardHome},
    {name: 'GoalHome', component: GoalHome},
    {name: 'WalletHome', component: WalletHome},
    {name: 'Profile', component: Profile},
    {name: 'EditProfile', component: EditProfile},
    {name: 'IncomeHome', component: IncomeHome},
    {name: 'ExpenseHome', component: ExpenseHome},
    {name: 'Cash', component: Cash},
    {name: 'Card', component: Card},
    {name: 'Upi', component: Upi},
    {name: 'Filter', component: Filter},
    {name:"Notification",component:Notification},
    {name:"MyListing",component:MyListing},
  ],
  MARKET: [
    {name: 'DrawerNav', component: DrawerNav},
    {name: 'MarketHome', component: MarketHome},
    {name: 'MarketBottomTab', component: MarketBottomTab},
    {name: 'Profile', component: Profile},
    {name: 'EditProfile', component: EditProfile},
    {name: 'Payment', component: Payment},
    {name:'MarketFilter' , component:MarketFilter},
    {name:"Notification",component:Notification},
    {name:"MyListing",component:MyListing},
  ],
};

export default Screens;
