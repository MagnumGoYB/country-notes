# country-notes

Utility to fetch country codes viz ISO2, ISO3 and Phone code of all the countries listed in http://countrycode.org/.

Exposes the below APIs:

- Pass in any of the CountryName,PhoneCode,ISO2/ISO3 country code to get other details of the country.
- Get/Filter Name of country.
- Get/Filter ISO2 country code.
- Get/Filter ISO3 country code.
- Get/Filter Phone code of country.

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
CountryCodes.getTotal() // Return total number of countries
CountryCodes.findByName('China') // Return country information by name
CountryCodes.excludeByNames(['China', 'India']) // Returns an array of country information by excluding names
CountryCodes.findByCode('CN') // Return country information by ISO2/ISO3 Code
CountryCodes.excludeByCodes(['CN', 'IND']) // Returns an array of country information by excluding ISO2/ISO3 Codes
CountryCodes.findByPhoneCode('86') // Return country information by Phone Code
CountryCodes.excludeByPhoneCodes(['86', '91']) // Returns an array of country information by excluding Phone Codes
```

## Contributing

- Sending a pull request: [Pull requests](https://github.com/MagnumGoYB/country-notes/pulls)
- Reporting Issues: [Issues](https://github.com/MagnumGoYB/country-notes/issues/new)

## License

[MIT](https://github.com/MagnumGoYB/country-notes/blob/main/LICENSE)
