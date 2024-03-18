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

const Screens = {
  UNAUTHENTICATED: [
    {name: 'Onboarding', component: Onboarding},
    {name: 'Signup', component: Signup},
    {name: 'Login', component: Login},
    {name: 'Verification', component: Verification},
    // {name: 'DrawerNav', component: DrawerNav},
  ],
  AUTHENTICATED: [
    {name: 'Onboarding', component: Onboarding},
    {name: 'Signup', component: Signup},
    {name: 'Login', component: Login},
    {name: 'Verification', component: Verification},
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
    // {name: 'Onboarding', component: Onboarding},
  ],
};

export default Screens;
