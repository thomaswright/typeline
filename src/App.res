type classification =
  | Monospaced
  | Humanist
  | Grotesque
  | Geometric
  | Didone
  | Transitional
  | OldStyle
  | Display
  | Script

type year = int
type link = string
type person = string

type typeface = {
  name: person,
  sampleImg: link,
  wikipediaPage: link,
  released: year,
  classification: classification,
}

let typefaces = [
  {
    name: "Comic Sans",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ComicSansSpec3.svg/1733px-ComicSansSpec3.svg.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Comic_Sans",
    released: 1994,
    classification: Script,
  },
  {
    name: "Curlz",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/4/46/CurlzSpec.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Curlz",
    released: 1995,
    classification: Display,
  },
  {
    name: "Courier New",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/3/36/IBMCourier.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Courier_(typeface)#Courier_New",
    released: 1995,
    classification: Monospaced,
  },
  {
    name: "Consolas",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/d/d5/ConsolasSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Consolas",
    released: 2007,
    classification: Monospaced,
  },
  {
    name: "Gills Sans ",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/4/48/GillSansEG.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gill_Sans",
    released: 1928,
    classification: Humanist,
  },
  {
    name: "Frutiger",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/e/e5/FrutigerSpec-1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Frutiger_(typeface)",
    released: 1976,
    classification: Humanist,
  },
  {
    name: "Optima",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/7/70/Optima_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Optima",
    released: 1958,
    classification: Humanist,
  },
  {
    name: "Verdana",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/0/01/VerdanaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Verdana",
    released: 1996,
    classification: Humanist,
  },
  {
    name: "Tahoma",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Tahoma_(typeface)",
    released: 1994,
    classification: Humanist,
  },
  {
    name: "Droid Sans",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/d/d4/DroidSerifSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Droid_(typeface)",
    released: 2008,
    classification: Humanist,
  },
  {
    name: "Calibri",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Calibri_sample_image.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Calibri",
    released: 2007,
    classification: Humanist,
  },
  {
    name: "Segoe UI",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/7/72/Segoe_UI_Example.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Segoe#Segoe_UI",
    released: 2003,
    classification: Humanist,
  },
  {
    name: "Akzidenz-Grotesk",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/e/e1/AkzidenzGroteskspecAIB1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Akzidenz-Grotesk",
    released: 1898,
    classification: Grotesque,
  },
  {
    name: "Helvetica",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/2/28/HelveticaSpecimenCH.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Helvetica",
    released: 1957,
    classification: Grotesque,
  },
  {
    name: "Univers",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Univers_sample_2015.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Univers",
    released: 1957,
    classification: Grotesque,
  },
  {
    name: "Arial",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/b/b1/ArialMTsp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Arial",
    released: 1982,
    classification: Grotesque,
  },
  {
    name: "Roboto",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Roboto_Font_Sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Roboto",
    released: 2011,
    classification: Grotesque,
  },
  {
    name: "Franklin Gothic",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/3/35/FranklinGothicSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Franklin_Gothic",
    released: 1902,
    classification: Geometric,
  },
  {
    name: "Futura",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/5/50/Futura_Specimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Futura_(typeface)",
    released: 1927,
    classification: Geometric,
  },
  {
    name: "Impact",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/2/2b/ImpactSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Impact_(typeface)",
    released: 1965,
    classification: Grotesque,
  },
  {
    name: "Metro",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Metro_(typeface)",
    released: 1929,
    classification: Geometric,
  },
  {
    name: "FF DIN",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/c/cd/FFDIN.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/FF_DIN",
    released: 1995,
    classification: Geometric,
  },
  {
    name: "Century Gothic",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/4/4f/CenturyGothicSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_Gothic",
    released: 1990,
    classification: Geometric,
  },
  {
    name: "Avenir",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/0/07/AvenirSP.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Avenir_(typeface)",
    released: 1988,
    classification: Geometric,
  },
  {
    name: "Gotham",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/4/4e/GothamSpec.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gotham_(typeface)",
    released: 2000,
    classification: Geometric,
  },
  {
    name: "Didot",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/f/f9/DidotSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Didot_(typeface)",
    released: 1800,
    classification: Didone,
  },
  {
    name: "Bodoni",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bodoni",
    released: 1795,
    classification: Didone,
  },
  {
    name: "Century Schoolbook",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/8/8b/CenturySchoolbookSAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_type_family",
    released: 1918,
    classification: Didone,
  },
  {
    name: "Garamond",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/6/60/GaramondSpecimenA.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Garamond",
    released: 1495,
    classification: OldStyle,
  },
  {
    name: "Baskerville",
    sampleImg: "",
    wikipediaPage: "https://en.wikipedia.org/wiki/Baskerville",
    released: 1755,
    classification: Transitional,
  },
  {
    name: "Caslon",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/e/e5/CaslonSp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Caslon",
    released: 1725,
    classification: OldStyle,
  },
  {
    name: "Bembo",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/3/38/ET_Book_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bembo",
    released: 1496,
    classification: OldStyle,
  },
  {
    name: "Times New Roman",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/2/21/Times_New_Roman-sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Times_New_Roman",
    released: 1932,
    classification: Transitional,
  },
  {
    name: "Sabon",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sabon_lt_std_preview.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Sabon",
    released: 1967,
    classification: Transitional,
  },
  {
    name: "Palatino",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Palatino_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Palatino",
    released: 1949,
    classification: Transitional,
  },
  {
    name: "Georgia",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/b/ba/GeorgiaSpecimenAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Georgia_(typeface)",
    released: 1996,
    classification: Transitional,
  },
  {
    name: "Minion",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/9/90/Minion_opticals_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Minion_(typeface)",
    released: 1990,
    classification: Transitional,
  },
  {
    name: "Cambria",
    sampleImg: "https://upload.wikimedia.org/wikipedia/commons/b/bd/CambriaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Cambria_(typeface)",
    released: 2005,
    classification: Transitional,
  },
]->Array.toSorted((a, b) => (b.released - a.released)->Int.toFloat)

let classificationString = c =>
  switch c {
  | Monospaced => "Monospaced"
  | Humanist => "Humanist"
  | Grotesque => "Grotesque"
  | Geometric => "Geometric"
  | Didone => "Didone"
  | Transitional => "Transitional"
  | OldStyle => "Old Style"
  | Display => "Display"
  | Script => "Script"
  }

let classificationUrl = c =>
  switch c {
  | Monospaced => "https://en.wikipedia.org/wiki/Monospaced_font"
  | Humanist => "https://en.wikipedia.org/wiki/Sans-serif#Humanist"
  | Grotesque => "https://en.wikipedia.org/wiki/Sans-serif#Grotesque"
  | Geometric => "https://en.wikipedia.org/wiki/Sans-serif#Geometric"
  | Didone => "https://en.wikipedia.org/wiki/Didone_(typography)"
  | Transitional => "https://en.wikipedia.org/wiki/Serif#Transitional"
  | OldStyle => "https://en.wikipedia.org/wiki/Serif#Old-style"
  | Display => "https://en.wikipedia.org/wiki/Display_typeface"
  | Script => "https://en.wikipedia.org/wiki/Script_typeface"
  }

type timePeriod =
  | T_2000
  | T_1967_T1999
  | T_1934_T1966
  | T_1900_1933
  | T_1800_1899
  | T_Pre1800

let allTimePeriods = [T_2000, T_1967_T1999, T_1934_T1966, T_1900_1933, T_1800_1899, T_Pre1800]
let getTimePeriod = y =>
  switch y {
  | y if y >= 2000 => T_2000
  | y if y >= 1967 => T_1967_T1999
  | y if y >= 1934 => T_1934_T1966
  | y if y >= 1900 => T_1900_1933
  | y if y >= 1800 => T_1800_1899
  | _ => T_Pre1800
  }

let allClassifications = [
  Monospaced,
  Humanist,
  Grotesque,
  Geometric,
  Didone,
  Transitional,
  OldStyle,
  Display,
  Script,
]

let timePeriodString = t =>
  switch t {
  | T_2000 => "Post 2000"
  | T_1900_1933 => "1900 - 1933"
  | T_1934_T1966 => "1934 - 1966"
  | T_1967_T1999 => "1967 - 1999"
  | T_1800_1899 => "1800 - 1899"
  | T_Pre1800 => "Pre 1800"
  }

@react.component
let make = () => {
  <div className="w-fit relative">
    <div className="flex flex-row sticky top-0 bg-white border-b-2 border-slate-900">
      <div className="w-32" />
      {allClassifications
      ->Array.mapWithIndex((classification, i) => {
        <a
          href={classification->classificationUrl}
          className={[
            "font-black w-32 py-2 flex flex-col items-center",
            mod(i, 2) == 0 ? "bg-slate-200" : "",
          ]->Array.join(" ")}>
          {classification->classificationString->React.string}
        </a>
      })
      ->React.array}
    </div>
    <div className="flex flex-col divide-y-2 divide-slate-900 ">
      {allTimePeriods
      ->Array.map(timePeriod => {
        <div className="flex flex-row">
          <div className="w-32 font-black px-2"> {timePeriod->timePeriodString->React.string} </div>
          {allClassifications
          ->Array.mapWithIndex((classification, i) => {
            <div
              className={[
                "w-32 flex flex-col items-center py-1",
                mod(i, 2) == 0 ? "bg-slate-100" : "",
              ]->Array.join(" ")}>
              {typefaces
              ->Array.filter(
                t => t.classification == classification && t.released->getTimePeriod == timePeriod,
              )
              ->Array.map(
                t => {
                  t.sampleImg == ""
                    ? React.null
                    : <a href={t.wikipediaPage} className="py-1">
                        <img className="border border-black" src={t.sampleImg} width={"100px"} />
                        <div className="text-xs font-bold">
                          {t.released->Int.toString->React.string}
                        </div>
                      </a>
                },
              )
              ->React.array}
            </div>
          })
          ->React.array}
        </div>
      })
      ->React.array}
    </div>
  </div>
}
