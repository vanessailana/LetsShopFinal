interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'WNpe9mhpApNvI198mBLJwN1v8JwJVpHL',
  domain: 'letsshop.auth0.com',
  callbackURL: 'http://warm-tundra-14923.herokuapp.com/:4200/callback',
  apiUrl:'http://localhost:8083/api/'
};
