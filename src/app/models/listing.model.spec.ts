import { Country } from './country.model';
import { ListingDetails } from './listing-details.model';
import { Listing} from './listing.model';
import { Seller } from './seller.model';

describe('Listing', () =>{
    it('should create an instance', () => {
      expect(new Listing('', '', '', 0, '', '', '', new ListingDetails('', '', '', '', '', new Date(), '', ''), new Seller(''), [], new Country(0, '', ''), [])).toBeTruthy();
  });
});
