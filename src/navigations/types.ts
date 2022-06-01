import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {IStanding} from '@models';

export type AuthStackParamList = {
  Login: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type RootStackParamList = {
  Home: undefined;
  TeamDetails: {
    team: IStanding;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type TeamDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TeamDetails'
>;

export type TeamDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'TeamDetails'
>;
