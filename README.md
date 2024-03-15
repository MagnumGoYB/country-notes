# country-notes

Utility to fetch country codes viz ISO2, ISO3 and Phone code of all the countries listed in http://countrycode.org/.

Exposes the below APIs:

- Pass in any of the CountryName,PhoneCode,ISO2/ISO3 country code to get other details of the country.
- Get Name of country.
- Get ISO2 country code.
- Get ISO3 country code.
- Get Phone code of country.

## Installation

```bash
pnpm i country-notes
# or
npm i country-notes
# or
yarn add country-notes
```

## Examples

```js
import CountryNotes from 'country-notes'

CountryNotes.getAll() // Returns an array of country information
CountryNotes.getTotal() // Return total number of countries
CountryNotes.findByName('China') // Return country information by name
CountryNotes.excludeByNames(['China', 'India']) // Returns an array of country information by excluding names
CountryNotes.findByCode('CN') // Return country information by ISO2/ISO3 Code
CountryNotes.filterByCodes(['CN', 'IND']) // Returns an array of country information by ISO2/ISO3 Codes
CountryNotes.excludeByCodes(['CN', 'IND']) // Returns an array of country information by excluding ISO2/ISO3 Codes
CountryNotes.findByPhoneCode('86') // Return country information by Phone Code
CountryNotes.excludeByPhoneCodes(['86', '91']) // Returns an array of country information by excluding Phone Codes
```

## Contributing

- Sending a pull request: [Pull requests](https://github.com/MagnumGoYB/country-notes/pulls)
- Reporting Issues: [Issues](https://github.com/MagnumGoYB/country-notes/issues/new)

## License

[MIT](https://github.com/MagnumGoYB/country-notes/blob/main/LICENSE)
