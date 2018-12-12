interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'WNpe9mhpApNvI198mBLJwN1v8JwJVpHL',
  domain: 'letsshop.auth0.com',
  callbackURL: 'https://warm-tundra-14923.herokuapp.com',
  apiUrl:'http://localhost:8083/api/'
};
