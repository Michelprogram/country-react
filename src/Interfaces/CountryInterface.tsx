interface ICountry {

    flags: IFlags
    translations: ITranslations
    continents: Array<string>
    population: number
    capital: Array<string>
}

interface IFlags {
    png: string
    svg: string
}

interface ITranslations {
    fra: {
        common: string
    }
}


export default ICountry