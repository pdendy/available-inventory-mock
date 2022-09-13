import { Country } from './country.model';

export class Seller {
  // Personal info
  firstName: string;
  lastName: string;
  phone: string;

  // Company Info
  displayName: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;

  // Account Info
  username: string;
  defaultLocale: Country;

  constructor(
    firstName: string,
    lastName: string,
    phone: string,
    displayName: string,
    description: string,
    address: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
    username: string,
    defaultLocale: Country
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;

    this.displayName = displayName;
    this.description = description;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipcode = zipcode;

    this.username = username;
    this.defaultLocale = defaultLocale;
  }
}
