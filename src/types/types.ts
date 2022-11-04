export declare const __IN_DEBUG__: boolean;

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export interface AppConfig {
  selector: string;
  accessKey: string;
  secret: string;
  user?: Partial<User>
}
