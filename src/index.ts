import CountryCodeJson from './countrycode.org.json'

export interface CountryNoteType {
  code: string
  name: string
  phoneCode: string
  timeZone: string
  ISO2: string
  ISO3: string
}

const countryCodes = CountryCodeJson.map((country) => {
  const code = country.ISO2
  const name = country['Country Name']
  const phoneCode = country['Phone Code'].toString()
  const timeZone = country['Time Zone']
  return {
    code,
    name,
    phoneCode,
    timeZone,
    ISO2: code,
    ISO3: country.ISO3
  } as CountryNoteType
})

export const getAll = () => {
  return countryCodes
}

export const getTotal = () => {
  return countryCodes.length
}

export const findByName = (name: CountryNoteType['name']) => {
  return countryCodes.find((country) => country.name === name)
}

export const findByCode = (code: CountryNoteType['code']) => {
  return countryCodes.find((country) => country.code === code)
}

export const findByPhoneCode = (phoneCode: CountryNoteType['phoneCode']) => {
  return countryCodes.find((country) => country.phoneCode === phoneCode)
}

export const excludeByNames = (names: Array<CountryNoteType['name']>) => {
  return countryCodes.filter((country) => !names.includes(country.name))
}

export const excludeByCodes = (codes: Array<CountryNoteType['code']>) => {
  return countryCodes.filter((country) => !codes.includes(country.code))
}

export const excludeByPhoneCodes = (
  phoneCodes: Array<CountryNoteType['phoneCode']>
) => {
  return countryCodes.filter(
    (country) => !phoneCodes.includes(country.phoneCode)
  )
}
