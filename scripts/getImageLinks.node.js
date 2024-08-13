import axios from "axios";
import * as cheerio from "cheerio";

let typefaces = [
  {
    name: "Courier New",
    sampleImg: "https://en.wikipedia.org/wiki/File:ConsolasSP.svg",
    wikipediaPage:
      "https://en.wikipedia.org/wiki/Courier_(typeface)#Courier_New",
    released: 1995,
    classification: "Monospaced",
  },
  {
    name: "Consolas",
    sampleImg: "https://en.wikipedia.org/wiki/File:ConsolasSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Consolas",
    released: 2007,
    classification: "Monospaced",
  },
  {
    name: "Gills Sans ",
    sampleImg: "https://en.wikipedia.org/wiki/File:GillSansEG.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gill_Sans",
    released: 1928,
    classification: "Humanist",
  },
  {
    name: "Frutiger",
    sampleImg: "https://en.wikipedia.org/wiki/File:FrutigerSpec-1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Frutiger_(typeface)",
    released: 1976,
    classification: "Humanist",
  },
  {
    name: "Optima",
    sampleImg: "https://en.wikipedia.org/wiki/File:Optima_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Optima",
    released: 1958,
    classification: "Humanist",
  },
  {
    name: "Verdana",
    sampleImg: "https://en.wikipedia.org/wiki/File:VerdanaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Verdana",
    released: 1996,
    classification: "Humanist",
  },
  {
    name: "Tahoma",
    sampleImg: "https://en.wikipedia.org/wiki/File:Tahoma.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Tahoma_(typeface)",
    released: 1994,
    classification: "Humanist",
  },
  {
    name: "Droid Sans",
    sampleImg: "https://en.wikipedia.org/wiki/File:DroidSerifSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Droid_(typeface)",
    released: 2008,
    classification: "Humanist",
  },
  {
    name: "Calibri",
    sampleImg: "https://en.wikipedia.org/wiki/File:Calibri_sample_image.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Calibri",
    released: 2007,
    classification: "Humanist",
  },
  {
    name: "Segoe UI",
    sampleImg: "https://en.wikipedia.org/wiki/File:Segoe_UI_Example.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Segoe#Segoe_UI",
    released: 2003,
    classification: "Humanist",
  },
  {
    name: "Akzidenz-Grotesk",
    sampleImg: "https://en.wikipedia.org/wiki/File:AkzidenzGroteskspecAIB1.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Akzidenz-Grotesk",
    released: 1898,
    classification: "Grotesque",
  },
  {
    name: "Helvetica",
    sampleImg: "https://en.wikipedia.org/wiki/File:HelveticaSpecimenCH.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Helvetica",
    released: 1957,
    classification: "Grotesque",
  },
  {
    name: "Univers",
    sampleImg: "https://en.wikipedia.org/wiki/File:Univers_sample_2015.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Univers",
    released: 1957,
    classification: "Grotesque",
  },
  {
    name: "Arial",
    sampleImg: "https://en.wikipedia.org/wiki/File:ArialMTsp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Arial",
    released: 1982,
    classification: "Grotesque",
  },
  {
    name: "Roboto",
    sampleImg: "https://en.wikipedia.org/wiki/File:Roboto_Font_Sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Roboto",
    released: 2011,
    classification: "Grotesque",
  },
  {
    name: "Franklin Gothic",
    sampleImg: "https://en.wikipedia.org/wiki/File:FranklinGothicSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Franklin_Gothic",
    released: 1902,
    classification: "Geometric",
  },
  {
    name: "Futura",
    sampleImg: "https://en.wikipedia.org/wiki/File:Futura_Specimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Futura_(typeface)",
    released: 1927,
    classification: "Geometric",
  },
  {
    name: "Impact",
    sampleImg: "https://en.wikipedia.org/wiki/File:ImpactSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Impact_(typeface)",
    released: 1965,
    classification: "Geometric",
  },
  {
    name: "Metro",
    sampleImg: "https://en.wikipedia.org/wiki/File:MetroSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Metro_(typeface)",
    released: 1929,
    classification: "Geometric",
  },
  {
    name: "FF DIN",
    sampleImg: "https://en.wikipedia.org/wiki/File:FFDIN.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/FF_DIN",
    released: 1995,
    classification: "Geometric",
  },
  {
    name: "Century Gothic",
    sampleImg: "https://en.wikipedia.org/wiki/File:CenturyGothicSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_Gothic",
    released: 1990,
    classification: "Geometric",
  },
  {
    name: "Avenir",
    sampleImg: "https://en.wikipedia.org/wiki/File:AvenirSP.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Avenir_(typeface)",
    released: 1988,
    classification: "Geometric",
  },
  {
    name: "Gotham",
    sampleImg: "https://en.wikipedia.org/wiki/File:GothamSpec.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Gotham_(typeface)",
    released: 2000,
    classification: "Geometric",
  },
  {
    name: "Didot",
    sampleImg: "https://en.wikipedia.org/wiki/File:DidotSP.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Didot_(typeface)",
    released: 1800,
    classification: "Didone",
  },
  {
    name: "Bodoni",
    sampleImg: "https://en.wikipedia.org/wiki/File:ITCBodoni.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bodoni",
    released: 1795,
    classification: "Didone",
  },
  {
    name: "Century Schoolbook",
    sampleImg: "https://en.wikipedia.org/wiki/File:CenturySchoolbookSAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Century_type_family",
    released: 1918,
    classification: "Didone",
  },
  {
    name: "Garamond",
    sampleImg: "https://en.wikipedia.org/wiki/File:GaramondSpecimenA.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Garamond",
    released: 1495,
    classification: "OldStyle",
  },
  {
    name: "Baskerville",
    sampleImg: "https://en.wikipedia.org/wiki/File:Baskerville_font_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Baskerville",
    released: 1755,
    classification: "Transitional",
  },
  {
    name: "Caslon",
    sampleImg: "https://en.wikipedia.org/wiki/File:CaslonSp.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Caslon",
    released: 1725,
    classification: "OldStyle",
  },
  {
    name: "Bembo",
    sampleImg: "https://en.wikipedia.org/wiki/File:ET_Book_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Bembo",
    released: 1496,
    classification: "OldStyle",
  },
  {
    name: "Times New Roman",
    sampleImg: "https://en.wikipedia.org/wiki/File:Times_New_Roman-sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Times_New_Roman",
    released: 1932,
    classification: "Transitional",
  },
  {
    name: "Sabon",
    sampleImg: "https://en.wikipedia.org/wiki/File:Sabon_lt_std_preview.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Sabon",
    released: 1967,
    classification: "Transitional",
  },
  {
    name: "Palatino",
    sampleImg: "https://en.wikipedia.org/wiki/File:Palatino_font_sample.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Palatino",
    released: 1949,
    classification: "Transitional",
  },
  {
    name: "Georgia",
    sampleImg: "https://en.wikipedia.org/wiki/File:GeorgiaSpecimenAIB.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Georgia_(typeface)",
    released: 1996,
    classification: "Transitional",
  },
  {
    name: "Minion",
    sampleImg: "https://en.wikipedia.org/wiki/File:Minion_opticals_sample.png",
    wikipediaPage: "https://en.wikipedia.org/wiki/Minion_(typeface)",
    released: 1990,
    classification: "Transitional",
  },
  {
    name: "Cambria",
    sampleImg: "https://en.wikipedia.org/wiki/File:CambriaSpecimen.svg",
    wikipediaPage: "https://en.wikipedia.org/wiki/Cambria_(typeface)",
    released: 2005,
    classification: "Transitional",
  },
];

// Function to fetch the URL and find the "Original File" anchor tag
async function fetchOriginalFileLink(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the anchor tag with the text "Original File"
    const link = $("a")
      .filter(function () {
        return $(this).text().trim() === "Original file";
      })
      .attr("href");

    return link ? "https:" + link : `No "Original File" link found on ${url}`;
  } catch (error) {
    return `Error fetching ${url}: ${error.message}`;
  }
}

// Main function to process an array of URLs
// async function fetchAllOriginalFileLinks(urls) {
//   const results = await Promise.all(urls.map(fetchOriginalFileLink));
//   return results;
// }

async function main() {
  let modified = await Promise.all(
    typefaces.map(async (typeface) => {
      let result = await fetchOriginalFileLink(typeface.sampleImg);
      return {
        ...typeface,
        sampleImg: result,
      };
    })
  );

  console.log(modified);
}

main();
