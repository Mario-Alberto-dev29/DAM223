
import * as React from 'react';
import { Avatar } from 'react-native-paper';

const AvatarProfile = () => (
  <Avatar.Image
    size={100}
    source={require('../assets/avatar.png')}
  />
);

export default AvatarProfile;
